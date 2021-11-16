(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('acorn'), require('astring'), require('css-tree')) :
    typeof define === 'function' && define.amd ? define(['exports', 'acorn', 'astring', 'css-tree'], factory) :
    (global = global || self, factory(global.malina = {}, global.acorn, global.astring, global['css-tree']));
}(this, (function (exports, acorn, astring, csstree) { 'use strict';

    acorn = acorn && Object.prototype.hasOwnProperty.call(acorn, 'default') ? acorn['default'] : acorn;
    astring = astring && Object.prototype.hasOwnProperty.call(astring, 'default') ? astring['default'] : astring;
    csstree = csstree && Object.prototype.hasOwnProperty.call(csstree, 'default') ? csstree['default'] : csstree;

    let _svgElements = 'animate,animateMotion,animateTransform,circle,clipPath,color-profile,defs,desc,discard,ellipse,feBlend,feColorMatrix,feComponentTransfer,feComposite,feConvolveMatrix,feDiffuseLighting,feDisplacementMap,feDistantLight,feDropShadow,feFlood,feFuncA,feFuncB,feFuncG,feFuncR,feGaussianBlur,feImage,feMerge,feMergeNode,feMorphology,feOffset,fePointLight,feSpecularLighting,feSpotLight,feTile,feTurbulence,filter,g,hatch,hatchpath,image,line,linearGradient,marker,mask,mesh,meshgradient,meshpatch,meshrow,metadata,mpath,path,pattern,polygon,polyline,radialGradient,rect,set,solidcolor,stop,switch,symbol,text,textPath,tspan,unknown,use,view';
    let svgElements = {};
    _svgElements.split(',').forEach(k => svgElements[k] = true);

    const last = a => a[a.length - 1];

    function assert(x, info) {
        if(!x) throw info || (new Error('AssertError'));
    }

    function toCamelCase(name) {
        assert(name[name.length - 1] !== '-', 'Wrong name');
        return name.replace(/(\-\w)/g, function(part) {
            return part[1].toUpperCase();
        });
    }
    function Q(s) {
        return s.replace(/\\/g, '\\\\').replace(/`/g, '\\`');
    }
    function Q2(s) {
        return s.replace(/\\/g, '\\\\').replace(/`/g, '\\`').replace(/\n/g, '\\n');
    }
    function unwrapExp(e) {
        assert(e, 'Empty expression');
        let rx = e.match(/^\{(.*)\}$/);
        assert(rx, 'Wrong expression: ' + e);
        return rx[1];
    }
    function isSimpleName(name) {
        if(!name) return false;
        if(!name.match(/^([a-zA-Z\$_][\w\d\$_\.]*)$/)) return false;
        if(name[name.length - 1] == '.') return false;
        return true;
    }

    const isNumber = (value) => {
        if(typeof value == 'number') return true;
        if(!value) return false;
        if(typeof value != 'string') return false;
        return !isNaN(value);
    };

    function detectExpressionType(name) {
        if(isSimpleName(name)) return 'identifier';

        let ast = acorn.parse(name, {allowReturnOutsideFunction: true});

        function checkIdentificator(body) {
            if(body.length != 1) return;
            if(body[0].type != 'ExpressionStatement') return;
            if(body[0].expression.type != 'Identifier') return;
            return true;
        }

        function checkMemberIdentificator(body) {
            if(body.length != 1) return;
            if(body[0].type != 'ExpressionStatement') return;
            let obj = body[0].expression;
            if(obj.type != 'MemberExpression') return;
            if(obj.property.type != 'Identifier') return;
            return true;
        }

        function checkFunction(body) {
            if(body.length != 1) return;
            if(body[0].type != 'ExpressionStatement') return;
            let obj = body[0].expression;
            if(obj.type != 'ArrowFunctionExpression') return;
            return true;
        }

        if(checkIdentificator(ast.body)) return 'identifier';
        if(checkMemberIdentificator(ast.body)) return 'identifier';
        if(checkFunction(ast.body)) return 'function';

        return;
    }

    function checkRootName(name) {
        let rx = name.match(/^([\w\$_][\w\d\$_]*)/);
        if(!rx) return this.warning({message: 'Error name: ' + name});
        let root = rx[1];

        if(this.script.rootVariables[root] || this.script.rootFunctions[root]) return true;
        this.warning({message:'No name: ' + name});
    }

    function trimEmptyNodes(srcNodes) {
        let nodes = srcNodes.slice();
        while(nodes.length) {
            let n = nodes[0];
            if(n.type == 'text' && !n.value.trim()) nodes.shift();
            else break;
        }
        while(nodes.length) {
            let n = last(nodes);
            if(n.type == 'text' && !n.value.trim()) nodes.pop();
            else break;
        }
        return nodes;
    }


    function compactDOM() {
        let data = this.DOM;
        const details = {
            node: [n => n.body],
            each: [n => n.body],
            slot: [n => n.body],
            fragment: [n => n.body],
            if: [n => n.body, n => n.bodyMain],
            await: [n => n.parts.main, n => n.parts.then, n => n.parts.catch]
        };

        function go(body, parentNode) {
            let i;

            const getPrev = () => {
                return i > 0 && body.length ? body[i - 1] : null;
            };

            const getNext = () => {
                return i < body.length ? body[i + 1] : null;
            };

            for(i=0; i<body.length; i++) {
                let node = body[i];
                if(node.type == 'text') {
                    let next = getNext();
                    if(next && next.type == 'text') {
                        node.value += next.value;
                        body.splice(i + 1, 1);
                    }

                    if(node.value) {
                        if(!node.value.trim()) {
                            node.value = ' ';
                        } else {
                            let rx = node.value.match(/^(\s*)(.*?)(\s*)$/);
                            if(rx) {
                                let r = '';
                                if(rx[1]) r += ' ';
                                r += rx[2];
                                if(rx[3]) r += ' ';
                                node.value = r;
                            }
                        }
                    }
                } else {
                    if(node.type == 'node' && (node.name == 'pre' || node.name == 'textarea')) continue;
                    let keys = details[node.type];
                    keys && keys.forEach(k => {
                        let body = k(node);
                        if(body && body.length) go(body, node);
                    });
                }
            }

            const isTable = n => ['thead', 'tbody', 'tfoot', 'tr', 'td', 'th', 'colgroup', 'col'].includes(n.name);

            i = 0;
            while(i < body.length) {
                let node = body[i];
                if(node.type == 'text' && !node.value.trim()) {
                    if(parentNode && (parentNode.name == 'table' || isTable(parentNode)) && (i == 0 || i == body.length -1)) {
                        body.splice(i, 1);
                        continue;
                    }

                    let prev = getPrev();
                    let next = getNext();
                    if(prev && next) {
                        if(prev.type == 'node' && next.type == 'node') {
                            if(isTable(prev) && isTable(next) ||
                                prev.name == 'li' && next.name == 'li' ||
                                prev.name == 'div' && next.name == 'div') {
                                    body.splice(i, 1);
                                    continue;
                                }
                        }
                    } else if(parentNode) {
                        let p = prev && prev.type == 'node' && prev.name;
                        let n = next && next.type == 'node' && next.name;

                        if((p == 'td' || n == 'td') && ((parentNode.type == 'node' && parentNode.name == 'tr') || (parentNode.type == 'each'))) {
                            body.splice(i, 1);
                            continue;
                        }
                        if((p == 'tbody' || n == 'tbody') && (parentNode.type == 'node' && parentNode.name == 'table')) {
                            body.splice(i, 1);
                            continue;
                        }
                        if((p == 'li' || n == 'li') && (parentNode.type == 'node' && parentNode.name == 'ul')) {
                            body.splice(i, 1);
                            continue;
                        }
                        if(parentNode.type == 'node' && parentNode.name == 'div') {
                            body.splice(i, 1);
                            continue;
                        }
                        if(parentNode.type == 'node' && (prev && prev.type == 'each' || next && next.type == 'each')) {
                            body.splice(i, 1);
                            continue;
                        }
                    }
                }
                i++;
            }

        }

        function trimNodes(srcNodes) {
            let nodes = srcNodes.slice();
            let ex = [];
            while(nodes.length) {
                let n = nodes[0];
                if(n.type == 'fragment' || n.type == 'comment') {
                    ex.push(n);
                    nodes.shift();
                    continue;
                }
                if(n.type == 'text' && !n.value.trim()) nodes.shift();
                else break;
            }
            nodes = [...ex, ...nodes];
            ex = [];
            while(nodes.length) {
                let n = last(nodes);
                if(n.type == 'fragment' || n.type == 'comment') {
                    ex.push(n);
                    nodes.pop();
                    continue;
                }
                if(n.type == 'text' && !n.value.trim()) nodes.pop();
                else break;
            }
            return [...nodes, ...ex];
        }

        data.body = trimNodes(data.body);

        go(data.body);
    }

    const genId = () => {
        let id = Math.floor(Date.now() * Math.random()).toString(36);
        if(id.length > 6) id = id.substring(id.length - 6);
        return 'm' + id;
    };


    const extractKeywords = (exp) => {
        let ast = acorn.parse(exp, {sourceType: 'module', ecmaVersion: 12});

        const keys = new Set();
        const rec = (n) => {
            let self;
            if(n.type) {
                self = n;
                if(n.type == 'Identifier' && (n._parent.type != 'MemberExpression' || n._parent.property !== n)) {
                    let name = [n.name];
                    let i = n._parent;
                    while(i?.type == 'MemberExpression') {
                        if(i.property.type == 'Identifier') name.push('.' + i.property.name);
                        else if(i.property.type == 'Literal') name.push(`[${i.property.raw}]`);
                        else throw `Wrong member type: ${i.property.type}`;
                        i = i._parent;
                    }
                    keys.add(name.join(''));
                }
            }

            for(let k in n) {
                if(k == '_parent') continue;
                let v = n[k];
                if(typeof(v) != 'object') continue;
                if(Array.isArray(v)) v.forEach(i => {
                    i._parent = self || n._parent;
                    rec(i);
                });
                else {
                    v._parent = self || n._parent;
                    rec(v);
                }
            }
        };
        rec(ast);

        return [...keys];
    };


    const replaceElementKeyword = (exp, fn) => {
        let changed = false;
        let r = parseJS(exp, (n, pk) => {
            if(n.type != 'Identifier') return;
            if(pk == 'property' || pk == 'params') return;
            if(n.name != '$element') return;
            n.name = fn();
            changed = true;
        });
        return changed ? r.build().trim() : exp;
    };


    const parseJS = (exp, fn) => {
        let result = {};
        let ast = result.ast = acorn.parse(exp, {sourceType: 'module', ecmaVersion: 12});

        const rec = (n, pk) => {
            let self;
            if(n.type) {
                self = n;
                fn?.(n, pk);
            }

            for(let k in n) {
                if(k == '_parent') continue;
                let v = n[k];
                if(v == null || typeof(v) != 'object') continue;
                if(Array.isArray(v)) {
                    v.forEach(i => {
                        i._parent = self || n._parent;
                        rec(i, k);
                    });
                } else {
                    v._parent = self || n._parent;
                    rec(v, k);
                }
            }
        };
        rec(ast, null);

        result.build = (data) => {
            return astring.generate(data || ast);
        };
        return result;
    };


    function I(value = 0) {
        this.$indent = value;
    }

    function xWriter(ctx) {
        this._ctx = ctx;
        this.inuse = ctx.inuse;
        this.result = [];
        this.indent = 0;

        this.getIndent = function() {
            return new I(this.indent);
        };
        this.writeIndent = function() {this.write(this.getIndent());};
        this.goIndent = function(fn) {
            this.indent++;
            fn();
            this.indent--;
        };
        this.write = function(...args) {
            for(let i of args) {
                if(i === true) this.result.push(this.getIndent());
                else this.result.push(i);
            }
        };
        this.writeLine = function(s) {
            this.write(true, s + '\n');
        };
        this._compile = function() {
            let result = this.result.slice();
            let dyn, prevDyn = 0, index = 99;

            for(;index>0;index--) {
                dyn = 0;
                let parts = result.slice();
                result = [];
                parts.forEach(n => {
                    if(n.node) {
                        dyn++;
                        let r = this.subBuild(n.node, n.indent);
                        if(r?.length) result.push(...r);
                    } else result.push(n);
                });
                if(dyn == 0) break;
                if(dyn == prevDyn) throw 'Compile error: circular dependencies';
                prevDyn = dyn;
            }
            if(index <= 0) throw 'Compile error: circular dependencies';

            return result;
        };
        this.toString = function() {
            let result = this._compile();
            return result.map(i => {
                if(i instanceof I) {
                    let r = '', l = i.$indent;
                    while(l--) r += '  ';
                    return r;
                }
                return i;
            }).join('');
        };
        this.build = function(node) {
            if(node == null) return;
            if(node.$deps?.length) {
                if(node.$deps.some(n => !n.$done)) {
                    this.result.push({node, indent: this.indent});
                    return;
                }
            }
            node.handler(this, node);
            node.$done = true;
        };
        this.subBuild = function(node, indent=0) {
            let w = new xWriter(this._ctx);
            w.indent = indent;
            w.build(node);
            let r = w._compile();
            return r.length ? r : null;
        };
        this.addBlock = function(b) {
            b && b.forEach(i => {
                if(i instanceof I) i.$indent += this.indent;
                this.result.push(i);
            });
        };
    }

    function xNode(_type, _data, _handler) {
        /*
            xNode(type, data, handler)
            xNode(type, handler)
            xNode(data, handler)
            xNode(handler)
        */
        if(!(this instanceof xNode)) return new xNode(_type, _data, _handler);

        let type, data, handler;
        if(typeof _type == 'string') {
            type = _type;
            if(typeof _data == 'function') {
                assert(!_handler);
                handler = _data;
            } else {
                data = _data;
                handler = _handler;
            }
        } else if(typeof _type == 'function') {
            assert(!_data && !_handler);
            handler = _type;
        } else {
            assert(typeof _type == 'object');
            data = _type;
            handler = _data;
        }

        if(!handler) handler = xNode.init[type];
        assert(handler);

        if(data) Object.assign(this, data);
        if(handler.init) {
            handler.init(this);
            handler = handler.handler;
            assert(handler);
        }

        this.type = type;
        this.handler = handler;
        return this;
    }

    xNode.init = {
        raw: (ctx, node) => {
            ctx.writeLine(node.value);
        },
        block: {
            init: (node) => {
                if(!node.body) node.body = [];
                node.push = function(child) {
                    assert(arguments.length == 1, 'Wrong xNode');
                    if(typeof child == 'string') child = xNode('raw', {value: child});
                    this.body.push(child);
                };
            },
            handler: (ctx, node) => {
                if(node.scope) {
                    ctx.writeLine('{');
                    ctx.indent++;
                }
                node.body.forEach(n => {
                    if(n == null) return;
                    if(typeof n == 'string') {
                        if(n) ctx.writeLine(n);
                    } else ctx.build(n);
                });
                if(node.scope) {
                    ctx.indent--;
                    ctx.writeLine('}');
                }
            }
        },
        function: {
            init: (node) => {
                if(!node.args) node.args = [];
                xNode.init.block.init(node);
            },
            handler: (ctx, node) => {
                if(!node.inline) ctx.writeIndent();

                if(node.arrow) {
                    if(node.name) ctx.write(`let ${node.name} = `);
                } else {
                    ctx.write('function');
                    if(node.name) ctx.write(' ' + node.name);
                }
                ctx.write(`(${node.args.join(', ')}) `);
                if(node.arrow) ctx.write('=> ');
                ctx.write(`{\n`);
                ctx.indent++;
                xNode.init.block.handler(ctx, node);
                ctx.indent--;
                if(node.inline) ctx.write(true, '}');
                else ctx.writeLine('}');
            }
        },
        node: {
            init: (node) => {
                node.children = [];
                node.attributes = [];
                node.class = new Set();
                node.voidTag = false;

                node.bindName = xNode.init.node.bindName;
                node.push = function(n) {
                    if(typeof n == 'string') {
                        let p = last(this.children);
                        if(p && p.type == 'node:text') {
                            p.value += n;
                            return p;
                        }
                        n = xNode('node:text', {value: n});
                    }
                    assert(n instanceof xNode);
                    this.children.push(n);
                    n._ctx = this._ctx;
                    return n;
                };
            },
            handler: (ctx, node) => {
                if(node.inline) {
                    node.children.forEach(n => ctx.build(n));
                } else {
                    assert(node.name, 'No node name');
                    ctx.write(`<${node.name}`);

                    if(node.attributes.length) {
                        node.attributes.forEach(p => {
                            if(p.name == 'class') {
                                if(p.value) p.value.split(/\s+/).forEach(name => node.class.add(name));
                                return;
                            }

                            if(p.value) ctx.write(` ${p.name}="${p.value}"`);
                            else ctx.write(` ${p.name}`);
                        });
                    }

                    let className = Array.from(node.class).join(' ');
                    if(className) ctx.write(` class="${className}"`);

                    if(node.children.length) {
                        ctx.write('>');
                        node.children.forEach(n => ctx.build(n));
                        ctx.write(`</${node.name}>`);
                    } else {
                        if(node.voidTag) ctx.write(`/>`);
                        else ctx.write(`></${node.name}>`);
                    }
                }
            },
            bindName: function() {
                if(!this._boundName) this._boundName = `el${this._ctx.uniqIndex++}`;
                return this._boundName;
            }
        },
        'node:text': {
            init: (node) => {
                node.bindName = xNode.init.node.bindName;
            },
            handler: (ctx, node) => {
                ctx.write(node.value);
            }
        },
        'node:comment': {
            init: (node) => {
                node.bindName = xNode.init.node.bindName;
            },
            handler: (ctx, node) => {
                if(ctx._ctx.config.debug && ctx._ctx.config.debugLabel) ctx.write(`<!-- ${node.value} -->`);
                else ctx.write(`<!---->`);
            }
        },
        template: (ctx, node) => {
            let template = ctx._ctx.xBuild(node.body);
            let convert;
            if(node.svg) convert = '$runtime.svgToFragment';
            else if(!template.match(/[<>]/)) {
                convert = '$runtime.createTextNode';
                if(!node.raw) template = htmlEntitiesToText(template);
            } else {
                convert = '$$htmlToFragment';
                template = template.replace(/<!---->/g, '<>');
            }
            if(node.raw) {
                ctx.write(ctx._ctx.Q(template));
            } else if(node.inline) {
                ctx.write(`${convert}(\`${ctx._ctx.Q(template)}\`)`);
            } else {
                assert(node.name);
                ctx.writeLine(`const ${node.name} = ${convert}(\`${ctx._ctx.Q(template)}\`);`);
            }
        }
    };


    const htmlEntitiesToText = (text) => {
        let entities = [
            [/&amp;/g, '&'],
            [/&apos;/g, '\''],
            [/&#x27;/g, '\''],
            [/&#x2F;/g, '/'],
            [/&#39;/g, '\''],
            [/&#47;/g, '/'],
            [/&lt;/g, '<'],
            [/&gt;/g, '>'],
            [/&nbsp;/g, ' '],
            [/&quot;/g, '"']
        ];
        entities.forEach(([k, v]) => {
            text = text.replace(k, v);
        });
        return text;
    };

    function parse() {
        let source = this.source;
        let index = 0;

        const readNext = () => {
            assert(index < source.length, 'EOF');
            return source[index++];
        };

        const readTag = () => {
            let start = index;
            let a = readNext();
            assert(a === '<', 'Tag error');
            let attributes = [];
            let begin = true;
            let name = '';
            let eq, attr_start;
            let elArg = null;

            const error = (name) => {
                let e = new Error(name);
                e.details = source.substring(start, index);
                throw e;
            };

            function flush(shift) {
                if(!attr_start) return;
                shift = shift || 0;
                let end = index - 1 + shift;
                if(elArg === true) {
                    elArg = source.substring(attr_start, end);
                    attr_start = null;
                    eq = null;
                    return;
                }
                let a = {
                    content: source.substring(attr_start, end)
                };
                if(eq) {
                    a.name = source.substring(attr_start, eq);
                    a.value = source.substring(eq + 1, end);
                    if(a.value[0] == '"' || a.value[0] == '\'') a.value = a.value.substring(1);
                    let i = a.value.length - 1;
                    if(a.value[i] == '"' || a.value[i] == '\'') a.value = a.value.substring(0, i);
                } else a.name = a.content;
                attributes.push(a);
                attr_start = null;
                eq = null;
            }
            while(true) {
                a = readNext();
                if(!begin && !attr_start && a.match(/\S/) && a != '/' && a != '>') attr_start = index - 1;
                if(a == '"' || a == "'" || a == '`') {
                    while(a != readNext());
                    continue;
                }
                if(a == '{') {
                    index--;
                    readBinding();
                    flush(1);
                    continue;
                }
                if(a == '}') error('Wrong attr');
                if(a == '<') error('Wrong tag');
                if(a == '/') {
                    a = readNext();
                    assert(a == '>');
                    flush(-1);
                }
                if(a == '>') {
                    flush();
                    const voidTags = ['area', 'base', 'br', 'col', 'embed', 'hr', 'img', 'input', 'link', 'meta', 'param', 'source', 'track', 'wbr'];
                    let voidTag = voidTags.indexOf(name) >= 0;
                    let closedTag = voidTag || source[index-2] == '/';
                    return {
                        type: 'node',
                        name,
                        elArg,
                        openTag: source.substring(start, index),
                        start: start,
                        end: index,
                        closedTag,
                        voidTag,
                        attributes
                    }
                }
                if(begin) {
                    if(a.match(/[\da-zA-Z^\-]/)) {
                        name += a;
                        continue;
                    } else {
                        begin = false;
                        if(a == ':') {
                            elArg = true;
                            attr_start = index;
                        }
                    }
                } else if(attr_start) {
                    if(a == '=' && !eq) eq = index - 1;
                    else if(a.match(/\s/)) flush();
                }
            }
        };

        const readScript = (tag) => {
            let endTag = `</${tag}>`;
            let q, a, p, start = index;
            while(true) {
                p = a;
                a = readNext();
                if(q) {
                    if(a != q) continue;
                    if(p == '\\') continue;
                    q = null;
                    continue
                }
                if(a == '"' || a == '\'' || a == '`') {
                    q = a;
                    continue;
                }
                if(a == '<') {
                    if(source.substring(index-1, index + endTag.length - 1) == endTag) {
                        let end = index - 1;
                        index += endTag.length - 1;
                        return source.substring(start, end);
                    }
                }
            }
        };

        const readStyle = () => {
            let start = index;
            let end = source.substring(start).indexOf('</style>') + start;
            assert(end >= 0, '<style> is not closed');
            index = end + 9;
            return source.substring(start, end);
        };

        const readBinding = () => {
            let start = index;
            assert(readNext() === '{', 'Bind error');
            let a = null, p, q;
            let bkt = 1;

            while(true) {
                p = a;
                a = readNext();

                if(q) {
                    if(a != q) continue;
                    if(p == '\\') continue;
                    q = null;
                    continue
                }
                if(a == '"' || a == "'" || a == '`') {
                    q = a;
                    continue;
                }
                if(a == '*' && p == '/') {
                    // comment block
                    while(true) {
                        p = a;
                        a = readNext();
                        if(a == '/' && p == '*') break;
                    }
                    continue;
                }

                if(a == '{') {
                    bkt++;
                    continue;
                }
                if(a == '}') {
                    bkt--;
                    if(bkt > 0) continue;
                } else continue;

                return {
                    value: source.substring(start + 1, index - 1)
                };
            }
        };

        const readComment = () => {
            let start = index;
            let end = source.indexOf('-->', start);
            assert(end >= 0, 'Comment is not closed');
            end += 3;
            index = end;
            return source.substring(start, end);
        };

        const go = (parent) => {
            let textNode = null;

            const flushText = () => {
                if(!textNode) return;
                parent.body.push(textNode);
                textNode = null;
            };

            while(index < source.length) {
                let a = source[index];
                if(a === '<') {
                    flushText();

                    if(source.substring(index, index + 4) === '<!--') {
                        parent.body.push({
                            type: 'comment',
                            content: readComment()
                        });
                        continue;
                    }

                    if(source[index + 1] === '/') {  // close tag
                        let name = '';
                        index += 2;
                        while(true) {
                            a = readNext();
                            if(a === '>') break;
                            name += a;
                        }
                        name = name.trim();
                        if(name) {
                            name = name.split(':')[0];
                            assert(name === parent.name, 'Wrong close-tag: ' + parent.name + ' - ' + name);
                        }
                        return;
                    }

                    let tag = readTag();
                    parent.body.push(tag);
                    if(tag.name === 'script') {
                        tag.type = 'script';
                        tag.content = readScript('script');
                        continue;
                    } else if(tag.name === 'template') {
                        tag.type = 'template';
                        tag.content = readScript('template');
                        continue;
                    } else if(tag.name === 'style') {
                        tag.type = 'style';
                        tag.content = readStyle();
                        continue;
                    } else {
                        tag.classes = new Set();
                    }
                    if(tag.closedTag) continue;

                    tag.body = [];
                    try {
                        go(tag);
                    } catch (e) {
                        if(typeof e == 'string') e = new Error(e);
                        if(!e.details) e.details = tag.openTag;
                        throw e;
                    }
                    continue;
                } else if(a === '{') {
                    if(['#', '/', ':', '@'].indexOf(source[index + 1]) >= 0) {
                        flushText();
                        let bind = readBinding();
                        if(bind.value.match(/^@\w+/)) {
                            let tag = {
                                type: 'systag',
                                value: bind.value
                            };
                            parent.body.push(tag);
                            continue;
                        } else if(bind.value.startsWith('#each ')) {
                            let tag = {
                                type: 'each',
                                value: bind.value,
                                body: []
                            };
                            parent.body.push(tag);
                            go(tag);
                            continue;
                        } else if(bind.value === '/each') {
                            assert(parent.type === 'each', 'Bind error: /each');
                            return;
                        } else if(bind.value.startsWith('#if ')) {
                            let tag = {
                                type: 'if',
                                value: bind.value,
                                body: []
                            };
                            parent.body.push(tag);
                            go(tag);
                            continue;
                        } else if(bind.value === '/if') {
                            assert(parent.type === 'if', 'Bind error: /if');
                            return;
                        } else if(bind.value === ':else') {
                            assert(parent.type === 'if', 'Bind error: :else');
                            parent.bodyMain = parent.body;
                            parent.body = [];
                        } else if(bind.value.startsWith('#await ')) {
                            let mainPart = [];
                            let tag = {
                                type: 'await',
                                value: bind.value,
                                body: mainPart,
                                parts: {
                                    main: mainPart,
                                    mainValue: bind.value
                                }
                            };
                            parent.body.push(tag);
                            go(tag);
                            continue;
                        } else if(bind.value.match(/^\:then( |$)/)) {
                            assert(parent.type === 'await', 'Bind error: await-then');
                            let thenPart = [];
                            parent.parts.then = thenPart;
                            parent.parts.thenValue = bind.value;
                            parent.body = thenPart;
                        } else if(bind.value.match(/^\:catch( |$)/)) {
                            assert(parent.type === 'await', 'Bind error: await-catch');
                            let catchPart = [];
                            parent.parts.catch = catchPart;
                            parent.parts.catchValue = bind.value;
                            parent.body = catchPart;
                        } else if(bind.value == '/await') {
                            assert(parent.type === 'await', 'Bind error: /await');
                            return;
                        } else if(bind.value.match(/^\#slot(\:| |$)/)) {
                            let tag = {
                                type: 'slot',
                                value: bind.value,
                                body: []
                            };
                            parent.body.push(tag);
                            go(tag);
                            continue;
                        } else if(bind.value == '/slot') {
                            assert(parent.type === 'slot', 'Slot error: /slot');
                            return;
                        } else if(bind.value.startsWith('#fragment:')) {
                            let tag = {
                                type: 'fragment',
                                value: bind.value,
                                body: []
                            };
                            parent.body.push(tag);
                            go(tag);
                            continue;
                        } else if(bind.value == '/fragment') {
                            assert(parent.type === 'fragment', 'Fragment error: /fragment');
                            return;
                        } else throw 'Error binding: ' + bind.value;
                    }
                }

                if(!textNode) {
                    textNode = {
                        type: 'text',
                        value: ''
                    };
                }
                textNode.value += readNext();
            }        flushText();
            assert(parent.type === 'root', 'File ends to early');
        };

        let root = {
            type: 'root',
            body: []
        };
        go(root);

        this.DOM = root;
    }

    function parseText(source) {
        let i = 0;
        let step = 0;
        let text = '';
        let exp = '';
        let q;
        let len = source.length;
        let parts = [];
        let depth = 0;
        while(i < len) {
            let a = source[i++];
            if(step == 1) {
                if(q) {
                    if(a === q) q = null;
                    exp += a;
                    continue;
                }
                if(a === '"' || a === "'" || a === '`') {
                    q = a;
                    exp += a;
                    continue;
                }
                if(a === '{') depth++;
                else if(a === '}') {
                    depth--;
                    if(!depth) {
                        step = 0;
                        let js = exp[0] == '*';
                        if(js) exp = exp.substring(1);
                        exp = exp.trim();
                        if(!exp) throw 'Wrong expression';
                        parts.push({value: exp, type: js ? 'js' : 'exp'});
                        exp = '';
                        continue;
                    }
                }
                exp += a;
                continue;
            }
            if(a === '{') {
                depth++;
                if(text) {
                    parts.push({value: text, type: 'text'});
                    text = '';
                }
                step = 1;
                continue;
            }
            text += a;
        }
        if(text) parts.push({value: text, type: 'text'});
        assert(step == 0, 'Wrong expression: ' + source);
        let staticText = null;
        if(!parts.some(p => p.type == 'exp')) staticText = parts.map(p => p.type == 'text' ? p.value : '').join('');
        let result = [];
        parts.forEach(p => {
            if(p.type == 'js') return;
            if(p.type == 'exp') result.push(p);
            else {
                let l = last(result);
                if(l?.type == 'text') l.value += p.value;
                else result.push({...p});
            }
        });
        result = result.map(p => p.type == 'text' ? '`' + this.Q(p.value) + '`' : '(' + p.value + ')').join('+');
        return {result, parts, staticText};
    }

    function parse$1() {
        let source = this.scriptNodes.length ? this.scriptNodes[0].content : null;
        this.script = {
            source,
            watchers: [],
            imports: [],
            importedNames: [],
            autosubscribeNames: [],
            props: [],
            rootVariables: {},
            rootFunctions: {},
            readOnly: false,
            autoimport: {},
            comments: []
        };
        if(source) {
            this.script.readOnly = this.scriptNodes.some(n => n.attributes.some(a => a.name == 'read-only'));

            if(!this.script.readOnly) {
                source = source.split(/\n/).map(line => {
                    let rx = line.match(/^(\s*)\/\/(.*)$/);
                    if(!rx) return line;
                    let code = rx[2].trim();
                    if(code != '!no-check') return line;
                    return rx[1] + '$$_noCheck;';
                }).join('\n');
            }
            const onComment = (isBlockComment, value, start, end) => {
                if(isBlockComment) return;
                this.script.comments.push({start, end, value});
            };
            this.script.ast = acorn.parse(source, {sourceType: 'module', ecmaVersion: 12, onComment});

            if(source.includes('$props')) this.require('$props');
            if(source.includes('$attributes')) this.require('$attributes');
            if(source.includes('$emit')) this.require('$emit');
            if(source.includes('$onDestroy')) this.require('$onDestroy');
            if(source.includes('$onMount')) this.require('$onMount');
            if(source.includes('$context')) this.require('$context');
            if(source.includes('$component')) this.require('$component');
        } else {
            this.script.ast = {
                body: [],
                sourceType: "module",
                type: "Program"
            };
        }
    }
    function transform() {
        const result = this.script;
        const source = this.script.source;
        const ast = this.script.ast;

        let rootVariables = result.rootVariables;
        let rootFunctions = result.rootFunctions;
        ast.body.forEach(n => {
            if(n.type == 'FunctionDeclaration') {
                rootFunctions[n.id.name] = true;
            } else if(n.type == 'VariableDeclaration') {
                n.declarations.forEach(i => {
                    rootVariables[i.id.name] = true;
                    if(i.init && i.init.type == 'ArrowFunctionExpression') rootFunctions[i.id.name] = true;
                });
            }
        });

        result.onMount = rootFunctions.onMount;
        result.onDestroy = rootFunctions.onDestroy;

        const funcTypes = {
            FunctionDeclaration: 1,
            FunctionExpression: 1,
            ArrowFunctionExpression: 1
        };

        const applyBlock = () => {
            this.require('apply');
            return {
                _apply: true,
                type: 'ExpressionStatement',
                expression: {
                    callee: {
                        type: 'Identifier',
                        name: '$$apply'
                    },
                    type: 'CallExpression'
                }
            }
        };

        const returnApplyBlock = (a) => {
            this.require('apply');
            return {
                _apply: true,
                callee: {
                    type: 'Identifier',
                    name: '$$apply'
                },
                type: 'CallExpression',
                arguments: [a]
            }
        };

        function isInLoop(node) {
            if(!node._parent || node._parent.type != 'CallExpression') return false;
            if(node._parent.callee.type != 'MemberExpression') return false;
            let method = node._parent.callee.property.name;
            return method == 'forEach' || method == 'map' || method == 'filter';
        }

        function isNoCheck(node) {
            return node.type == 'ExpressionStatement' && node.expression.type == 'Identifier' && node.expression.name == '$$_noCheck';
        }
        function transformNode(node) {
            if(funcTypes[node.type] && node.body.body && node.body.body.length) {
                if(node._parent.type == 'CallExpression' && node._parent.callee.name == '$onDestroy') return 'stop';
                for(let i=0; i<node.body.body.length; i++) {
                    let n = node.body.body[i];
                    if(!isNoCheck(n)) continue;
                    node.body.body.splice(i, 1);
                    return 'stop';
                }
                if(!isInLoop(node)) {
                    node.body.body.unshift(applyBlock());
                }
            } else if(node.type == 'ArrowFunctionExpression') {
                if(node._parent.type == 'CallExpression' && node._parent.callee.name == '$onDestroy') return 'stop';
                if(node.body.type != 'BlockStatement' && node.body.type != 'ArrowFunctionExpression' && !isInLoop(node)) {
                    node.body = returnApplyBlock(node.body);
                }
            } else if(node.type == 'AwaitExpression') {
                let n = node, p;
                while(n._parent) {
                    p = n._parent;
                    if(p.type == 'BlockStatement') break;
                    n = p;
                    p = null;
                }
                if(p) {
                    let i = p.body.indexOf(n);
                    if(i >= 0 && !(p.body[i + 1] && p.body[i + 1]._apply)) {
                        if(n.type == 'ReturnStatement') {
                            n.argument = returnApplyBlock(n.argument);
                        } else {
                            p.body.splice(i + 1, 0, applyBlock());
                        }
                    }
                }
            }
        }
        function walk(node, parent, fn) {
            if(typeof node !== 'object') return;

            if(node._apply) return;
            node._parent = parent;
            let forParent = parent;
            if(node.type) {
                if(fn(node) == 'stop') return;
                forParent = node;
            }
            for(let key in node) {
                let child = node[key];
                if(key == '_parent') continue;
                if(!child || typeof child !== 'object') continue;

                if(Array.isArray(child)) {
                    for(let i=0;i<child.length;i++) {
                        walk(child[i], forParent, fn);
                    }
                } else {
                    walk(child, forParent, fn);
                }
            }
        }    if(!this.script.readOnly) walk(ast, null, transformNode);

        function makeVariable(name) {
            return {
                "type": "VariableDeclaration",
                "declarations": [{
                    "type": "VariableDeclarator",
                    "id": {
                        "type": "Identifier",
                        "name": name
                    },
                    "init": null
                }],
                "kind": "var"
            }
        }

        const makeWatch = (n) => {
            function assertExpression(n) {
                if(['Identifier', 'TemplateLiteral', 'Literal'].includes(n.type)) return;
                if(n.type.endsWith('Expression')) return;
                throw 'Wrong expression';
            }
            if(n.body.type != 'ExpressionStatement') throw 'Error';
            if(n.body.expression.type == 'AssignmentExpression') {
                const ex = n.body.expression;
                if(ex.operator != '=') throw 'Error';
                let target;
                if(ex.left.type == 'Identifier') {
                    target = ex.left.name;
                    if(!(target in rootVariables)) resultBody.push(makeVariable(target));
                } else if(ex.left.type == 'MemberExpression') {
                    target = source.substring(ex.left.start, ex.left.end);
                } else throw 'Error';
                assertExpression(ex.right);
                const exp = source.substring(ex.right.start, ex.right.end);
                result.watchers.push(`$runtime.prefixPush($cd, () => {${target} = ${exp};});`);
            } else if(n.body.expression.type == 'SequenceExpression') {
                const ex = n.body.expression.expressions;
                const handler = ex[ex.length - 1];
                let callback = source.substring(handler.start, handler.end);
                if(handler.type == 'ArrowFunctionExpression' || handler.type == 'FunctionExpression') ; else if(detectExpressionType(callback) == 'identifier') {
                    callback = `(v) => { ${callback}(v); }`;
                } else {
                    callback = `() => { ${callback}; }`;
                }

                if(ex.length == 2) {
                    assertExpression(ex[0]);
                    let exp = source.substring(ex[0].start, ex[0].end);
                    if(this.config.immutable) result.watchers.push(`$watch($cd, () => (${exp}), ${callback});`);
                    else result.watchers.push(`$watch($cd, () => (${exp}), ${callback}, {cmp: $runtime.$$deepComparator(0)});`);
                } else if(ex.length > 2) {
                    for(let i = 0;i<ex.length-1;i++) assertExpression(ex[i]);
                    let exp = source.substring(ex[0].start, ex[ex.length-2].end);
                    result.watchers.push(`$watch($cd, () => [${exp}], ($args) => { (${callback}).apply(null, $args); }, {cmp: $runtime.$$deepComparator(1)});`);
                } else throw 'Error';
            } else throw 'Error';
        };

        let imports = [];
        let resultBody = [];
        let lastPropIndex = null;
        let constantProps = true;

        if(result.comments.length) {
            result.comments.forEach(c => {
                for(let i = 1; i < ast.body.length; i++) {
                    let p = ast.body[i-1];
                    let n = ast.body[i];
                    if(p.end < c.start && c.start < n.start) {
                        p._comment = c.value;
                        return;
                    }
                }
            });
        }

        ast.body.forEach(n => {
            if(n.type == 'ImportDeclaration') {
                imports.push(n);
                n.specifiers.forEach(s => {
                    if(s.local.type != 'Identifier') return;
                    let name = s.local.name;
                    result.importedNames.push(name);
                    if(name[0].toLowerCase() == name[0]) {
                        if(!n._comment || !n._comment.includes('!no-autosubscribe')) result.autosubscribeNames.push(s.local.name);
                    }
                    if(s.type != 'ImportDefaultSpecifier') return;
                    result.imports.push(name);
                });
                return;
            } else if(n.type == 'ExportNamedDeclaration') {
                if(n.declaration.kind != 'const') constantProps = false;
                assert(n.declaration.type == 'VariableDeclaration', 'Wrong export');
                n.declaration.declarations.forEach(d => {
                    assert(d.type == 'VariableDeclarator', 'Wrong export');
                    let p = {name: d.id.name};
                    if(d.init) {
                        if(d.init.type == 'Literal') {
                            p.value = d.init.raw;
                        } else {
                            p.value = astring.generate(d.init);
                        }
                    }
                    result.props.push(p);
                    this.require('$props:no-deps');
                    lastPropIndex = resultBody.length;
                });
                return;
            }

            if(n.type == 'LabeledStatement' && n.label.name == '$') {
                try {
                    makeWatch(n);
                    return;
                } catch (e) {
                    throw new Error(e + ': ' + source.substring(n.start, n.end));
                }
            }
            resultBody.push(n);
        });

        let header = [];
        header.push(rawNode(() => {
            if(this.inuse.$component) return 'const $component = $runtime.current_component;';
        }));

        header.push(rawNode(() => {
            if(this.inuse.$events) return 'const $events = $option.events || {};';
        }));

        if(lastPropIndex != null) {
            header.push(rawNode(() => {
                if(this.inuse.$props) return 'let $props = $option.props || {};';
            }));

            if(!constantProps && !this.script.readOnly) this.require('apply', '$cd');

            resultBody.splice(lastPropIndex, 0, rawNode(() => {
                let code = [];
                if(this.inuse.$attributes) {
                    let pa = result.props.map(p => {
                        if(p.value === void 0) return `${p.name}`;
                        return `${p.name}=${p.value}`;
                    }).join(', ');
                    code.push(`let {${pa}, ...$attributes} = $props;`);

                    if(!this.script.readOnly && !constantProps) {
                        code.push(`$runtime.current_component.push = () => ({${result.props.map(p => p.name+'='+p.name).join(', ')}, ...$attributes} = $props = $option.props || {});`);
                        code.push(`$runtime.current_component.exportedProps = () => ({${result.props.map(p => p.name).join(', ')}});`);
                    }
                } else if(this.inuse.$props) {
                    let pa = result.props.map(p => {
                        if(p.value === void 0) return `${p.name}`;
                        return `${p.name}=${p.value}`;
                    }).join(', ');
                    code.push(`let {${pa}} = $props;`);

                    if(!this.script.readOnly && !constantProps) {
                        code.push(`$runtime.current_component.push = () => ({${result.props.map(p => p.name+'='+p.name).join(', ')}} = $props = $option.props || {});`);
                        code.push(`$runtime.current_component.exportedProps = () => ({${result.props.map(p => p.name).join(', ')}});`);
                    }
                }
                return code;
            }));
        } else {
            header.push(rawNode(() => {
                let code = [];
                if(this.inuse.$props && this.inuse.$attributes) {
                    code.push('let $props = $option.props || {}, $attributes = $props;');
                    if(!constantProps && !this.script.readOnly) code.push(`$runtime.current_component.push = () => $props = $option.props || {}, $attributes = $props;`);
                } else if(this.inuse.$props) {
                    code.push('let $props = $option.props || {};');
                    if(!constantProps && !this.script.readOnly) code.push(`$runtime.current_component.push = () => $props = $option.props || {};`);
                } else if(this.inuse.$attributes) {
                    code.push('let $attributes = $option.props || {};');
                    if(!constantProps && !this.script.readOnly) code.push(`$runtime.current_component.push = () => $attributes = $option.props || {};`);
                }
                return code;
            }));
        }

        header.push(rawNode(() => {
            if(this.inuse.$context) return 'const $context = $runtime.$context;';
        }));


        imports.push(rawNode(() => {
            if(this.inuse.$onMount) return `import {$onMount} from 'malinajs/runtime.js';`;
        }));

        header.push(rawNode(() => {
            if(this.inuse.$onDestroy) return `const $onDestroy = fn => $component._d.push(fn);`;
        }));

        if(this.config.autoSubscribe && result.autosubscribeNames.length) {
            if(!this.script.readOnly) this.require('$cd', 'apply');
            header.push(rawNode(() => {
                if(this.inuse.apply) return `$runtime.autoSubscribe(${result.autosubscribeNames.join(', ')});`;
            }));
        }

        if(!rootFunctions.$emit) {
            header.push(rawNode(() => {
                if(this.inuse.$emit) return 'const $emit = $runtime.$makeEmitter($option);';
            }));
        }

        if(this.scriptNodes[0] && this.scriptNodes[0].attributes.some(a => a.name == 'property')) {
            result.props.forEach(p => {
                this.require('$cd');
                resultBody.push(rawNode(`$runtime.makeExternalProperty($component, '${p.name}', () => ${p.name}, _${p.name} => ${p.name} = _${p.name});`));
            });
        }

        this.script.rootLevel = resultBody;

        this.module.top.push(xNode('autoimport', (ctx) => {
            Object.values(this.script.autoimport).forEach(l => ctx.writeLine(l));
        }));

        this.module.top.push(xNode('ast', {body: imports}));
        this.module.head.push(xNode('ast', {body: header}));
        this.module.code.push(xNode('ast', {body: resultBody}));
    }
    function build() {
        const generator = Object.assign({
            ImportExpression: function(node, state) {
                state.write('import(');
                this[node.source.type](node.source, state);
                state.write(')');
            },
            Raw: function(node, state) {
                state.write(node.value);
            }
        }, astring.baseGenerator);
        this.script.code = astring.generate(this.script.ast, {generator});
    }


    function rawNode(exp, n) {
        n = n || {};
        n.type = 'Raw';
        n.value = exp;
        return n;
    }


    const generator = Object.assign({
        ImportExpression: function(node, state) {
            state.write('import(');
            this[node.source.type](node.source, state);
            state.write(')');
        },
        Raw: function(node, state) {
            let value = typeof node.value == 'function' ? node.value() : node.value;
            if(value) {
                var indent = state.indent.repeat(state.indentLevel);
                if(!Array.isArray(value)) value = [value];
                value.forEach(v => {
                    state.write(indent + v + state.lineEnd);
                });
            }
        },
        CustomBlock: function(node, state) {
            var indent = state.indent.repeat(state.indentLevel);
            var lineEnd = state.lineEnd;

            var statements = node.body;
            var length = statements.length;

            for (var i = 0; i < length; i++) {
                var statement = statements[i];

                if(statement.type != 'Raw') state.write(indent);
                this[statement.type](statement, state);
                if(statement.type != 'Raw') state.write(lineEnd);
            }
        }
    }, astring.baseGenerator);


    xNode.init.ast = (ctx, node) => {
        if(!node.body.length) return;
        let code = astring.generate({
            type: 'CustomBlock',
            body: node.body
        }, {generator, startingIndentLevel: ctx.indent});
        ctx.write(code);
    };

    function buildRuntime() {
        let runtime = xNode('block', {scope: true});
        runtime.push(xNode((ctx) => {
            if(this.inuse.$cd) ctx.writeLine('let $cd = $component.$cd;');
        }));

        let bb = this.buildBlock(this.DOM, {inline: true});
        runtime.push(xNode('template', {
            name: '$parentElement',
            body: bb.tpl,
            svg: bb.svg
        }));
        runtime.push(bb.source);

        if(this.script.onMount) runtime.push(`$runtime.$onMount(onMount);`);
        if(this.script.onDestroy) runtime.push(`$runtime.$onDestroy(onDestroy);`);
        if(this.script.watchers.length) {
            this.script.watchers.forEach(n => runtime.push(n));
        }

        runtime.push(xNode('addStyle', ctx => {
            if(!this.css.active()) return;
            let style = this.css.getContent();
            if(!style) return;
            let config = ctx._ctx.config;
            if(config.css) {
                if(typeof config.css == 'function') config.css(style, config.path, ctx._ctx, ctx);
                else ctx.writeLine(`$runtime.addStyles('${this.css.id}', \`${this.Q(style)}\`);`);
            } else {
                ctx._ctx.css.result = style;
            }
        }));

        runtime.push(xNode('bind-component-element', (ctx) => {
            if(ctx.inuse.$insertElementByOption) ctx.writeLine('$runtime.$insertElementByOption($element, $option, $parentElement);');
            else ctx.writeLine('return $parentElement;');
        }));

        this.module.body.push(runtime);

        if(!this.script.readOnly && this.css.active() && this.css.containsExternal()) this.require('apply', '$cd');

        this.module.head.push(xNode('resolveClass', (ctx) => {
            if(!this.inuse.resolveClass) return;
            if(this.css.active()) {
                let {classMap, metaClass, main} = this.css.getClassMap();
                if(main) main = `'${main}'`;
                else main = 'null';
                classMap = Object.entries(classMap).map(i => `'${i[0]}': '${i[1]}'`).join(', ');
                metaClass = Object.entries(metaClass).map(i => {
                    let value = i[1] === true ? 'true' : `'${i[1]}'`;
                    return `'${i[0]}': ${value}`;
                }).join(', ');

                ctx.writeLine(`const $$resolveClass = $runtime.makeClassResolver(`);
                ctx.indent++;
                ctx.writeLine(`$option, {${classMap}}, {${metaClass}}, ${main}`);
                ctx.indent--;
                ctx.writeLine(`);`);
            } else {
                ctx.writeLine(`const $$resolveClass = $runtime.noop;`);
            }
        }));
    }


    function buildBlock(data, option={}) {
        let rootTemplate = xNode('node', {inline: true, _ctx: this});
        let binds = xNode('block');
        let result = {};
        let inuse = Object.assign({}, this.inuse);

        const go = (data, isRoot, tpl) => {
            let body = data.body.filter(n => {
                if(n.type == 'script' || n.type == 'style' || n.type == 'slot') return false;
                if(n.type == 'comment' && !this.config.preserveComments) return false;
                if(n.type == 'fragment') {
                    try {
                        let f = this.makeFragment(n);
                        f && binds.push(f);
                    } catch (e) {
                        wrapException(e, n);
                    }
                    return false;
                }
                return true;
            });

            if(tpl.name == 'table') {
                let result = [], tbody = null;
                body.forEach(n => {
                    if(n.type == 'node' && ['thead', 'tbody', 'tfoot', 'colgroup'].includes(n.name)) {
                        result.push(n);
                        tbody = null;
                        return;
                    }

                    if(!tbody) {
                        tbody = {type: 'node', name: 'tbody', body: [], attributes: [], classes: new Set()};
                        result.push(tbody);
                    }
                    tbody.body.push(n);
                });
                body = result;
            }

            {
                let i = 1;
                while(body[i]) {
                    if(body[i].type == 'text' && body[i-1].type == 'text') {
                        body[i-1].value += body[i].value;
                        body.splice(i, 1);
                    } else i++;
                }
            }

            if(isRoot) {
                let svg = false, other = false;
                body.some(node => {
                    if(node.type != 'node') return;
                    if(svgElements[node.name]) svg = true;
                    else return other = true;
                });
                if(svg && !other) result.svg = true;
            }

            const bindNode = (n) => {
                if(n.type === 'text') {
                    if(n.value.indexOf('{') >= 0) {
                        const pe = this.parseText(n.value);
                        this.detectDependency(pe);

                        let textNode;
                        if(pe.staticText != null) {
                            textNode = tpl.push(pe.staticText);
                        } else {
                            textNode = tpl.push(' ');
                            binds.push(xNode('bindText', {
                                el: textNode.bindName(),
                                exp: pe.result
                            }, (ctx, n) => {
                                if(this.inuse.$cd) ctx.writeLine(`$runtime.bindText($cd, ${n.el}, () => ${n.exp});`);
                                else ctx.writeLine(`${n.el}.textContent = ${n.exp};`);
                            }));
                        }

                        pe.parts.forEach(p => {
                            if(p.type != 'js') return;
                            let exp = p.value;
                            if(!exp.endsWith(';')) exp += ';';
                            binds.push(xNode('block', {body: [
                                replaceElementKeyword(exp, () => textNode.bindName())
                            ]}));
                        });

                    } else {
                        tpl.push(n.value);
                    }
                } else if(n.type === 'template') {
                    tpl.push(n.openTag);
                    tpl.push(n.content);
                    tpl.push('</template>');
                } else if(n.type === 'node') {
                    if(n.name == 'malina' && !option.malinaElement) {
                        let b;
                        if(n.elArg == 'portal') b = this.attachPortal(n);
                        else b = this.attachHead(n);
                        b && binds.push(b);
                        return;
                    }
                    if(n.name == 'component' || n.name.match(/^[A-Z]/)) {
                        if(n.name == 'component' || !n.elArg) {
                            // component
                            let el = xNode('node:comment', {label: true, value: n.name});
                            tpl.push(el);
                            let b = this.makeComponent(n, el);
                            binds.push(b.bind);
                        } else {
                            let el = xNode('node:comment', {label: true, value: `exported ${n.elArg}`});
                            tpl.push(el);
                            let b = this.attchExportedFragment(n, el, n.name);
                            b && binds.push(b);
                        }
                        return;
                    }
                    if(n.name == 'slot') {
                        let slotName = n.elArg;
                        if(!slotName) {
                            if(option.context == 'fragment') {
                                let el = xNode('node:comment', {label: true, value: 'fragment-slot'});
                                tpl.push(el);
                                binds.push(this.attachFragmentSlot(el));
                                return;
                            } else slotName = 'default';
                        }
                        let el = xNode('node:comment', {label: true, value: slotName});
                        tpl.push(el);
                        binds.push(this.attachSlot(slotName, el, n));
                        return;
                    }
                    if(n.name == 'fragment') {
                        assert(n.elArg, 'Fragment name is required');
                        let el = xNode('node:comment', {label: true, value: `fragment ${n.elArg}`});
                        tpl.push(el);
                        let b = this.attachFragment(n, el);
                        b && binds.push(b);
                        return;
                    }

                    let el = xNode('node', {name: n.name});
                    if(option.oneElement) el._boundName = option.oneElement;
                    tpl.push(el);

                    if(n.attributes.some(a => a.name.startsWith('{...'))) {
                        n.spreading = [];
                        this.require('$cd');
                        binds.push(xNode('spread-to-element', {
                            el: el.bindName(),
                            props: n.spreading
                        }, (ctx, n) => {
                            ctx.writeLine(`$runtime.spreadAttributes($cd, ${n.el}, () => ({${n.props.join(', ')}}));`);
                        }));
                    }
                    let bindTail = [];
                    n.attributes.forEach(p => {
                        let b = this.bindProp(p, n, el);
                        if(b) {
                            if(b.bind) binds.push(b.bind);
                            if(b.bindTail) bindTail.push(b.bindTail);
                        }
                    });
                    n.classes.forEach(n => el.class.add(n));

                    if(option.bindAttributes && (el.attributes.length || el.class.size)) {
                        el.bindName();
                        binds.push(xNode('bindAttributes', {el}, (ctx, n) => {
                            let elName = n.el.bindName();
                            n.el.attributes.forEach(a => {
                                ctx.writeLine(`${elName}.setAttribute('${a.name}', \`${this.Q(a.value)}\`);`);
                            });
                        }));
                        binds.push(xNode('bindClasses', {el}, (ctx, n) => {
                            let el = n.el;
                            let elName = el.bindName();
                            if(el.class.size) {
                                let className = Array.from(el.class.values()).join(' ');
                                ctx.writeLine(`${elName}.className += ' ${className}';`);
                            }
                        }));
                    }
                    bindTail.forEach(b => binds.push(b));

                    el.voidTag = n.voidTag;
                    if(!n.closedTag) {
                        go(n, false, el);
                    }
                } else if(n.type === 'each') {
                    if(data.type == 'node' && data.body.length == 1) {
                        let eachBlock = this.makeEachBlock(n, {
                            elName: tpl.bindName(),
                            onlyChild: true
                        });
                        binds.push(eachBlock.source);
                        return;
                    } else {
                        let element = xNode('node:comment', {label: true, value: `${n.value}`});
                        tpl.push(element);
                        let eachBlock = this.makeEachBlock(n, {elName: element.bindName()});
                        binds.push(eachBlock.source);
                        return;
                    }
                } else if(n.type === 'if') {
                    let element = xNode('node:comment', {label: true, value: n.value});
                    tpl.push(element);
                    let ifBlock = this.makeifBlock(n, element);
                    binds.push(ifBlock.source);
                    return;
                } else if(n.type === 'systag') {
                    let r = n.value.match(/^@(\w+)\s+(.*)$/s);
                    let name = r[1];
                    let exp = r[2];

                    if(name == 'html') {
                        let el = xNode('node:comment', {label: true, value: 'html'});
                        tpl.push(el);
                        binds.push(this.makeHtmlBlock(exp, el));
                        return;
                    } else throw 'Wrong tag';
                } else if(n.type === 'await') {
                    let el = xNode('node:comment', {label: true, value: n.value});
                    tpl.push(el);
                    binds.push(this.makeAwaitBlock(n, el));
                    return;
                } else if(n.type === 'comment') {
                    tpl.push(n.content);
                }
            };
            body.forEach(node => {
                try {
                    bindNode(node);
                } catch (e) {
                    wrapException(e, node);
                }
            });
        };
        go(data, true, rootTemplate);
        if(option.protectLastTag) {
            let l = last(rootTemplate.children);
            if(l && l.type == 'node:comment' && l.label) {
                rootTemplate.push(xNode('node:comment', {value: ''}));
            }
        }

        result.tpl = rootTemplate;

        if(binds.body.length) {
            const innerBlock = xNode('block');
            if(!option.oneElement) {
                innerBlock.push(xNode('bindNodes', ctx => {
        
                    const gen = (parent, parentName) => {
                        for(let i=0; i < parent.children.length; i++) {
                            let node = parent.children[i];
                            let diff = i == 0 ? '[$runtime.firstChild]' : `[$runtime.childNodes][${i}]`;
        
                            if(node._boundName) ctx.writeLine(`let ${node._boundName} = ${parentName() + diff};`);
                            if(node.children) gen(node, () => {
                                if(node._boundName) return node._boundName;
                                return parentName() + diff;
                            });
                        }
                    };
                    gen(rootTemplate, () => '$parentElement');
                }));
            }
            innerBlock.push(binds);

            if(option.inline) {
                result.source = innerBlock;
            } else if(option.inlineFunction) {
                result.source = xNode('function', {
                    inline: true,
                    arrow: true,
                    args: ['$cd', '$parentElement'].concat(option.args || []),
                    body: [innerBlock]
                });
            } else {
                result.name = '$$build' + (this.uniqIndex++);
                result.source = xNode('function', {
                    name: result.name,
                    args: ['$cd', '$parentElement'].concat(option.args || []),
                    body: [innerBlock]
                });
            }
        } else {
            result.name = '$runtime.noop';
            result.source = null;
        }
        result.inuse = {};
        for(let k in this.inuse) {
            result.inuse[k] = this.inuse[k] - (inuse[k] || 0);
        }
        return result;
    }
    function wrapException(e, n) {
        if(typeof e === 'string') e = new Error(e);
        if(!e.details) {
            console.log('Node: ', n);
            if(n.type == 'text') e.details = n.value.trim();
            else if(n.type == 'node') e.details = n.openTag.trim();
            else if(n.type == 'each') e.details = n.value.trim();
            else if(n.type == 'if') e.details = n.value.trim();
        }
        throw e;
    }

    var commonjsGlobal = typeof globalThis !== 'undefined' ? globalThis : typeof window !== 'undefined' ? window : typeof global !== 'undefined' ? global : typeof self !== 'undefined' ? self : {};

    function createCommonjsModule(fn, basedir, module) {
    	return module = {
    	  path: basedir,
    	  exports: {},
    	  require: function (path, base) {
          return commonjsRequire(path, (base === undefined || base === null) ? module.path : base);
        }
    	}, fn(module, module.exports), module.exports;
    }

    function commonjsRequire () {
    	throw new Error('Dynamic requires are not currently supported by @rollup/plugin-commonjs');
    }

    var nwsapi = createCommonjsModule(function (module, exports) {
    /*
     * Copyright (C) 2007-2019 Diego Perini
     * All rights reserved.
     *
     * nwsapi.js - Fast CSS Selectors API Engine
     *
     * Author: Diego Perini <diego.perini at gmail com>
     * Version: 2.2.0
     * Created: 20070722
     * Release: 20191102
     *
     * License:
     *  http://javascript.nwbox.com/nwsapi/MIT-LICENSE
     * Download:
     *  http://javascript.nwbox.com/nwsapi/nwsapi.js
     */

    (function Export(global, factory) {

      {
        module.exports = factory;
      }

    })(commonjsGlobal, function Factory(global, Export) {

      var version = 'nwsapi-2.2.0',

      doc = global.document,
      root = doc.documentElement,
      slice = Array.prototype.slice,

      WSP = '[\\x20\\t\\r\\n\\f]',

      CFG = {
        // extensions
        operators: '[~*^$|]=|=',
        combinators: '[\\x20\\t>+~](?=[^>+~])'
      },

      NOT = {
        // not enclosed in double/single/parens/square
        double_enc: '(?=(?:[^"]*["][^"]*["])*[^"]*$)',
        single_enc: "(?=(?:[^']*['][^']*['])*[^']*$)",
        parens_enc: '(?![^\\x28]*\\x29)',
        square_enc: '(?![^\\x5b]*\\x5d)'
      },

      REX = {
        // regular expressions
        HasEscapes: RegExp('\\\\'),
        HexNumbers: RegExp('^[0-9a-fA-F]'),
        EscOrQuote: RegExp('^\\\\|[\\x22\\x27]'),
        RegExpChar: RegExp('(?:(?!\\\\)[\\\\^$.*+?()[\\]{}|\\/])', 'g'),
        TrimSpaces: RegExp('[\\r\\n\\f]|^' + WSP + '+|' + WSP + '+$', 'g'),
        CommaGroup: RegExp('(\\s*,\\s*)' + NOT.square_enc + NOT.parens_enc, 'g'),
        SplitGroup: RegExp('((?:\\x28[^\\x29]*\\x29|\\[[^\\]]*\\]|\\\\.|[^,])+)', 'g'),
        FixEscapes: RegExp('\\\\([0-9a-fA-F]{1,6}' + WSP + '?|.)|([\\x22\\x27])', 'g'),
        CombineWSP: RegExp('[\\n\\r\\f\\x20]+' + NOT.single_enc + NOT.double_enc, 'g'),
        TabCharWSP: RegExp('(\\x20?\\t+\\x20?)' + NOT.single_enc + NOT.double_enc, 'g'),
        PseudosWSP: RegExp('\\s+([-+])\\s+' + NOT.square_enc, 'g')
      },

      STD = {
        combinator: RegExp('\\s?([>+~])\\s?', 'g'),
        apimethods: RegExp('^(?:[a-z]+|\\*)\\|', 'i'),
        namespaces: RegExp('(\\*|[a-z]+)\\|[-a-z]+', 'i')
      },

      GROUPS = {
        // pseudo-classes requiring parameters
        linguistic: '(dir|lang)\\x28\\s?([-\\w]{2,})\\s?(?:\\x29|$)',
        logicalsel: '(matches|not)\\x28\\s?([^()]*|[^\\x28]*\\x28[^\\x29]*\\x29)\\s?(?:\\x29|$)',
        treestruct: '(nth(?:-last)?(?:-child|-of-type))(?:\\x28\\s?(even|odd|(?:[-+]?\\d*)(?:n\\s?[-+]?\\s?\\d*)?)\\s?(?:\\x29|$))',
        // pseudo-classes not requiring parameters
        locationpc: '(link|visited|target)\\b',
        useraction: '(hover|active|focus|focus-within)\\b',
        structural: '(root|empty|(?:(?:first|last|only)(?:-child|-of-type)))\\b',
        inputstate: '(enabled|disabled|read-only|read-write|placeholder-shown|default)\\b',
        inputvalue: '(checked|indeterminate|required|optional|valid|invalid|in-range|out-of-range)\\b',
        // pseudo-elements starting with single colon (:)
        pseudo_sng: '(after|before|first-letter|first-line)\\b',
        // pseudo-elements starting with double colon (::)
        pseudo_dbl: ':(after|before|first-letter|first-line|selection|placeholder|-webkit-[-a-zA-Z0-9]{2,})\\b'
      },

      Patterns = {
        // pseudo-classes
        treestruct: RegExp('^:(?:' + GROUPS.treestruct + ')(.*)', 'i'),
        structural: RegExp('^:(?:' + GROUPS.structural + ')(.*)', 'i'),
        linguistic: RegExp('^:(?:' + GROUPS.linguistic + ')(.*)', 'i'),
        useraction: RegExp('^:(?:' + GROUPS.useraction + ')(.*)', 'i'),
        inputstate: RegExp('^:(?:' + GROUPS.inputstate + ')(.*)', 'i'),
        inputvalue: RegExp('^:(?:' + GROUPS.inputvalue + ')(.*)', 'i'),
        locationpc: RegExp('^:(?:' + GROUPS.locationpc + ')(.*)', 'i'),
        logicalsel: RegExp('^:(?:' + GROUPS.logicalsel + ')(.*)', 'i'),
        pseudo_dbl: RegExp('^:(?:' + GROUPS.pseudo_dbl + ')(.*)', 'i'),
        pseudo_sng: RegExp('^:(?:' + GROUPS.pseudo_sng + ')(.*)', 'i'),
        // combinator symbols
        children: RegExp('^' + WSP + '?\\>' + WSP + '?(.*)'),
        adjacent: RegExp('^' + WSP + '?\\+' + WSP + '?(.*)'),
        relative: RegExp('^' + WSP + '?\\~' + WSP + '?(.*)'),
        ancestor: RegExp('^' + WSP + '+(.*)'),
       // universal & namespace
       universal: RegExp('^\\*(.*)'),
       namespace: RegExp('^(\\w+|\\*)?\\|(.*)')
      },

      // regexp to aproximate detection of RTL languages (Arabic)
      RTL = RegExp('^[\\u0591-\\u08ff\\ufb1d-\\ufdfd\\ufe70-\\ufefc ]+$'),

      // emulate firefox error strings
      qsNotArgs = 'Not enough arguments',
      qsInvalid = ' is not a valid selector',

      // detect structural pseudo-classes in selectors
      reNthElem = RegExp('(:nth(?:-last)?-child)', 'i'),
      reNthType = RegExp('(:nth(?:-last)?-of-type)', 'i'),

      // placeholder for global regexp
      reOptimizer,
      reValidator,

      // special handling configuration flags
      Config = {
        IDS_DUPES: true,
        MIXEDCASE: true,
        LOGERRORS: true,
        VERBOSITY: true
      },

      NAMESPACE,
      QUIRKS_MODE,
      HTML_DOCUMENT,

      ATTR_STD_OPS = {
        '=': 1, '^=': 1, '$=': 1, '|=': 1, '*=': 1, '~=': 1
      },

      HTML_TABLE = {
        'accept': 1, 'accept-charset': 1, 'align': 1, 'alink': 1, 'axis': 1,
        'bgcolor': 1, 'charset': 1, 'checked': 1, 'clear': 1, 'codetype': 1, 'color': 1,
        'compact': 1, 'declare': 1, 'defer': 1, 'dir': 1, 'direction': 1, 'disabled': 1,
        'enctype': 1, 'face': 1, 'frame': 1, 'hreflang': 1, 'http-equiv': 1, 'lang': 1,
        'language': 1, 'link': 1, 'media': 1, 'method': 1, 'multiple': 1, 'nohref': 1,
        'noresize': 1, 'noshade': 1, 'nowrap': 1, 'readonly': 1, 'rel': 1, 'rev': 1,
        'rules': 1, 'scope': 1, 'scrolling': 1, 'selected': 1, 'shape': 1, 'target': 1,
        'text': 1, 'type': 1, 'valign': 1, 'valuetype': 1, 'vlink': 1
      },

      Combinators = { },

      Selectors = { },

      Operators = {
         '=': { p1: '^',
                p2: '$',
                p3: 'true' },
        '^=': { p1: '^',
                p2: '',
                p3: 'true' },
        '$=': { p1: '',
                p2: '$',
                p3: 'true' },
        '*=': { p1: '',
                p2: '',
                p3: 'true' },
        '|=': { p1: '^',
                p2: '(-|$)',
                p3: 'true' },
        '~=': { p1: '(^|\\s)',
                p2: '(\\s|$)',
                p3: 'true' }
      },

      concatCall =
        function(nodes, callback) {
          var i = 0, l = nodes.length, list = Array(l);
          while (l > i) {
            if (false === callback(list[i] = nodes[i])) break;
            ++i;
          }
          return list;
        },

      concatList =
        function(list, nodes) {
          var i = -1, l = nodes.length;
          while (l--) { list[list.length] = nodes[++i]; }
          return list;
        },

      documentOrder =
        function(a, b) {
          if (!hasDupes && a === b) {
            hasDupes = true;
            return 0;
          }
          return a.compareDocumentPosition(b) & 4 ? -1 : 1;
        },

      hasDupes = false,

      unique =
        function(nodes) {
          var i = 0, j = -1, l = nodes.length + 1, list = [ ];
          while (--l) {
            if (nodes[i++] === nodes[i]) continue;
            list[++j] = nodes[i - 1];
          }
          hasDupes = false;
          return list;
        },

      // check context for mixed content
      hasMixedCaseTagNames =
        function(context) {
          var ns, api = 'getElementsByTagNameNS';

          // current host context (ownerDocument)
          context = context.ownerDocument || context;

          // documentElement (root) element namespace or default html/xhtml namespace
          ns = context.documentElement.namespaceURI || 'http://www.w3.org/1999/xhtml';

          // checking the number of non HTML nodes in the document
          return (context[api]('*', '*').length - context[api](ns, '*').length) > 0;
        },

      switchContext =
        function(context, force) {
          var oldDoc = doc;
          doc = context.ownerDocument || context;
          if (force || oldDoc !== doc) {
            // force a new check for each document change
            // performed before the next select operation
            root = doc.documentElement;
            HTML_DOCUMENT = isHTML(doc);
            QUIRKS_MODE = HTML_DOCUMENT &&
              doc.compatMode.indexOf('CSS') < 0;
            NAMESPACE = root && root.namespaceURI;
            Snapshot.doc = doc;
            Snapshot.root = root;
          }
          return (Snapshot.from = context);
        },

      // convert single codepoint to UTF-16 encoding
      codePointToUTF16 =
        function(codePoint) {
          // out of range, use replacement character
          if (codePoint < 1 || codePoint > 0x10ffff ||
            (codePoint > 0xd7ff && codePoint < 0xe000)) {
            return '\\ufffd';
          }
          // javascript strings are UTF-16 encoded
          if (codePoint < 0x10000) {
            var lowHex = '000' + codePoint.toString(16);
            return '\\u' + lowHex.substr(lowHex.length - 4);
          }
          // supplementary high + low surrogates
          return '\\u' + (((codePoint - 0x10000) >> 0x0a) + 0xd800).toString(16) +
                 '\\u' + (((codePoint - 0x10000) % 0x400) + 0xdc00).toString(16);
        },

      // convert single codepoint to string
      stringFromCodePoint =
        function(codePoint) {
          // out of range, use replacement character
          if (codePoint < 1 || codePoint > 0x10ffff ||
            (codePoint > 0xd7ff && codePoint < 0xe000)) {
            return '\ufffd';
          }
          if (codePoint < 0x10000) {
            return String.fromCharCode(codePoint);
          }
          return String.fromCodePoint ?
            String.fromCodePoint(codePoint) :
            String.fromCharCode(
              ((codePoint - 0x10000) >> 0x0a) + 0xd800,
              ((codePoint - 0x10000) % 0x400) + 0xdc00);
        },

      // convert escape sequence in a CSS string or identifier
      // to javascript string with javascript escape sequences
      convertEscapes =
        function(str) {
          return REX.HasEscapes.test(str) ?
            str.replace(REX.FixEscapes,
              function(substring, p1, p2) {
                // unescaped " or '
                return p2 ? '\\' + p2 :
                  // javascript strings are UTF-16 encoded
                  REX.HexNumbers.test(p1) ? codePointToUTF16(parseInt(p1, 16)) :
                  // \' \"
                  REX.EscOrQuote.test(p1) ? substring :
                  // \g \h \. \# etc
                  p1;
              }
            ) : str;
        },

      // convert escape sequence in a CSS string or identifier
      // to javascript string with characters representations
      unescapeIdentifier =
        function(str) {
          return REX.HasEscapes.test(str) ?
            str.replace(REX.FixEscapes,
              function(substring, p1, p2) {
                // unescaped " or '
                return p2 ? p2 :
                  // javascript strings are UTF-16 encoded
                  REX.HexNumbers.test(p1) ? stringFromCodePoint(parseInt(p1, 16)) :
                  // \' \"
                  REX.EscOrQuote.test(p1) ? substring :
                  // \g \h \. \# etc
                  p1;
              }
            ) : str;
        },

      method = {
        '#': 'getElementById',
        '*': 'getElementsByTagNameNS',
        '.': 'getElementsByClassName'
        },

      compat = {
        '#': function(c, n) { REX.HasEscapes.test(n) && (n = unescapeIdentifier(n)); return function(e, f) { return byId(n, c); }; },
        '*': function(c, n) { REX.HasEscapes.test(n) && (n = unescapeIdentifier(n)); return function(e, f) { return byTag(n, c); }; },
        '.': function(c, n) { REX.HasEscapes.test(n) && (n = unescapeIdentifier(n)); return function(e, f) { return byClass(n, c); }; }
        },

      // find duplicate ids using iterative walk
      byIdRaw =
        function(id, context) {
          var node = context, nodes = [ ], next = node.firstElementChild;
          while ((node = next)) {
            node.id == id && (nodes[nodes.length] = node);
            if ((next = node.firstElementChild || node.nextElementSibling)) continue;
            while (!next && (node = node.parentElement) && node !== context) {
              next = node.nextElementSibling;
            }
          }
          return nodes;
        },

      // context agnostic getElementById
      byId =
        function(id, context) {
          var e, nodes, api = method['#'];

          // duplicates id allowed
          if (Config.IDS_DUPES === false) {
            if (api in context) {
              return (e = context[api](id)) ? [ e ] : none;
            }
          } else {
            if ('all' in context) {
              if ((e = context.all[id])) {
                if (e.nodeType == 1) return e.getAttribute('id') != id ? [ ] : [ e ];
                else if (id == 'length') return (e = context[api](id)) ? [ e ] : none;
                for (i = 0, l = e.length, nodes = [ ]; l > i; ++i) {
                  if (e[i].id == id) nodes[nodes.length] = e[i];
                }
                return nodes && nodes.length ? nodes : [ nodes ];
              } else return none;
            }
          }

          return byIdRaw(id, context);
        },

      // context agnostic getElementsByTagName
      byTag =
        function(tag, context) {
          var e, nodes, api = method['*'];
          // DOCUMENT_NODE (9) & ELEMENT_NODE (1)
          if (api in context) {
            return slice.call(context[api]('*', tag));
          } else {
            // DOCUMENT_FRAGMENT_NODE (11)
            if ((e = context.firstElementChild)) {
              tag = tag.toLowerCase();
              if (!(e.nextElementSibling || tag == '*' || e.nodeName.toLowerCase() == tag)) {
                return slice.call(e[api]('*', tag));
              } else {
                nodes = [ ];
                do {
                  if (tag == '*' || e.nodeName.toLowerCase() == tag) nodes[nodes.length] = e;
                  concatList(nodes, e[api]('*', tag));
                } while ((e = e.nextElementSibling));
              }
            } else nodes = none;
          }
          return nodes;
        },

      // context agnostic getElementsByClassName
      byClass =
        function(cls, context) {
          var e, nodes, api = method['.'], reCls;
          // DOCUMENT_NODE (9) & ELEMENT_NODE (1)
          if (api in context) {
            return slice.call(context[api](cls));
          } else {
            // DOCUMENT_FRAGMENT_NODE (11)
            if ((e = context.firstElementChild)) {
              reCls = RegExp('(^|\\s)' + cls + '(\\s|$)', QUIRKS_MODE ? 'i' : '');
              if (!(e.nextElementSibling || reCls.test(e.className))) {
                return slice.call(e[api](cls));
              } else {
                nodes = [ ];
                do {
                  if (reCls.test(e.className)) nodes[nodes.length] = e;
                  concatList(nodes, e[api](cls));
                } while ((e = e.nextElementSibling));
              }
            } else nodes = none;
          }
          return nodes;
        },

      // namespace aware hasAttribute
      // helper for XML/XHTML documents
      hasAttributeNS =
        function(e, name) {
          var i, l, attr = e.getAttributeNames();
          name = RegExp(':?' + name + '$', HTML_DOCUMENT ? 'i' : '');
          for (i = 0, l = attr.length; l > i; ++i) {
            if (name.test(attr[i])) return true;
          }
          return false;
        },

      // fast resolver for the :nth-child() and :nth-last-child() pseudo-classes
      nthElement = (function() {
        var idx = 0, len = 0, set = 0, parent = undefined, parents = Array(), nodes = Array();
        return function(element, dir) {
          // ensure caches are emptied after each run, invoking with dir = 2
          if (dir == 2) {
            idx = 0; len = 0; set = 0; nodes.length = 0;
            parents.length = 0; parent = undefined;
            return -1;
          }
          var e, i, j, k, l;
          if (parent === element.parentElement) {
            i = set; j = idx; l = len;
          } else {
            l = parents.length;
            parent = element.parentElement;
            for (i = -1, j = 0, k = l - 1; l > j; ++j, --k) {
              if (parents[j] === parent) { i = j; break; }
              if (parents[k] === parent) { i = k; break; }
            }
            if (i < 0) {
              parents[i = l] = parent;
              l = 0; nodes[i] = Array();
              e = parent && parent.firstElementChild || element;
              while (e) { nodes[i][l] = e; if (e === element) j = l; e = e.nextElementSibling; ++l; }
              set = i; idx = 0; len = l;
              if (l < 2) return l;
            } else {
              l = nodes[i].length;
              set = i;
            }
          }
          if (element !== nodes[i][j] && element !== nodes[i][j = 0]) {
            for (j = 0, e = nodes[i], k = l - 1; l > j; ++j, --k) {
              if (e[j] === element) { break; }
              if (e[k] === element) { j = k; break; }
            }
          }
          idx = j + 1; len = l;
          return dir ? l - j : idx;
        };
      })(),

      // fast resolver for the :nth-of-type() and :nth-last-of-type() pseudo-classes
      nthOfType = (function() {
        var idx = 0, len = 0, set = 0, parent = undefined, parents = Array(), nodes = Array();
        return function(element, dir) {
          // ensure caches are emptied after each run, invoking with dir = 2
          if (dir == 2) {
            idx = 0; len = 0; set = 0; nodes.length = 0;
            parents.length = 0; parent = undefined;
            return -1;
          }
          var e, i, j, k, l, name = element.nodeName;
          if (nodes[set] && nodes[set][name] && parent === element.parentElement) {
            i = set; j = idx; l = len;
          } else {
            l = parents.length;
            parent = element.parentElement;
            for (i = -1, j = 0, k = l - 1; l > j; ++j, --k) {
              if (parents[j] === parent) { i = j; break; }
              if (parents[k] === parent) { i = k; break; }
            }
            if (i < 0 || !nodes[i][name]) {
              parents[i = l] = parent;
              nodes[i] || (nodes[i] = Object());
              l = 0; nodes[i][name] = Array();
              e = parent && parent.firstElementChild || element;
              while (e) { if (e === element) j = l; if (e.nodeName == name) { nodes[i][name][l] = e; ++l; } e = e.nextElementSibling; }
              set = i; idx = j; len = l;
              if (l < 2) return l;
            } else {
              l = nodes[i][name].length;
              set = i;
            }
          }
          if (element !== nodes[i][name][j] && element !== nodes[i][name][j = 0]) {
            for (j = 0, e = nodes[i][name], k = l - 1; l > j; ++j, --k) {
              if (e[j] === element) { break; }
              if (e[k] === element) { j = k; break; }
            }
          }
          idx = j + 1; len = l;
          return dir ? l - j : idx;
        };
      })(),

      // check if the document type is HTML
      isHTML =
        function(node) {
          var doc = node.ownerDocument || node;
          return doc.nodeType == 9 &&
            // contentType not in IE <= 11
            'contentType' in doc ?
              doc.contentType.indexOf('/html') > 0 :
              doc.createElement('DiV').nodeName == 'DIV';
        },

      // configure the engine to use special handling
      configure =
        function(option, clear) {
          if (typeof option == 'string') { return !!Config[option]; }
          if (typeof option != 'object') { return Config; }
          for (var i in option) {
            Config[i] = !!option[i];
          }
          // clear lambda cache
          if (clear) {
            matchResolvers = { };
            selectResolvers = { };
          }
          setIdentifierSyntax();
          return true;
        },

      // centralized error and exceptions handling
      emit =
        function(message, proto) {
          var err;
          if (Config.VERBOSITY) {
            if (proto) {
              err = new proto(message);
            } else {
              err = new global.DOMException(message, 'SyntaxError');
            }
            throw err;
          }
          if (Config.LOGERRORS && console && console.log) {
            console.log(message);
          }
        },

      // execute the engine initialization code
      initialize =
        function(doc) {
          setIdentifierSyntax();
          lastContext = switchContext(doc, true);
        },

      // build validation regexps used by the engine
      setIdentifierSyntax =
        function() {

          //
          // NOTE: SPECIAL CASES IN CSS SYNTAX PARSING RULES
          //
          // The <EOF-token> https://drafts.csswg.org/css-syntax/#typedef-eof-token
          // allow mangled|unclosed selector syntax at the end of selectors strings
          //
          // Literal equivalent hex representations of the characters: " ' ` ] )
          //
          //     \\x22 = " - double quotes    \\x5b = [ - open square bracket
          //     \\x27 = ' - single quote     \\x5d = ] - closed square bracket
          //     \\x60 = ` - back tick        \\x28 = ( - open round parens
          //     \\x5c = \ - back slash       \\x29 = ) - closed round parens
          //
          // using hex format prevents false matches of opened/closed instances
          // pairs, coloring breakage and other editors highlightning problems.
          //

          var identifier =
            // doesn't start with a digit
            '(?=[^0-9])' +
            // can start with double dash
            '(?:-{2}' +
              // may include ascii chars
              '|[a-zA-Z0-9-_]' +
              // non-ascii chars
              '|[^\\x00-\\x9f]' +
              // escaped chars
              '|\\\\[^\\r\\n\\f0-9a-fA-F]' +
              // unicode chars
              '|\\\\[0-9a-fA-F]{1,6}(?:\\r\\n|\\s)?' +
              // any escaped chars
              '|\\\\.' +
            ')+',

          pseudonames = '[-\\w]+',
          pseudoparms = '(?:[-+]?\\d*)(?:n\\s?[-+]?\\s?\\d*)',
          doublequote = '"[^"\\\\]*(?:\\\\.[^"\\\\]*)*(?:"|$)',
          singlequote = "'[^'\\\\]*(?:\\\\.[^'\\\\]*)*(?:'|$)",

          attrparser = identifier + '|' + doublequote + '|' + singlequote,

          attrvalues = '([\\x22\\x27]?)((?!\\3)*|(?:\\\\?.)*?)(?:\\3|$)',

          attributes =
            '\\[' +
              // attribute presence
              '(?:\\*\\|)?' +
              WSP + '?' +
              '(' + identifier + '(?::' + identifier + ')?)' +
              WSP + '?' +
              '(?:' +
                '(' + CFG.operators + ')' + WSP + '?' +
                '(?:' + attrparser + ')' +
              ')?' +
              // attribute case sensitivity
              WSP + '?' + '(i)?' + WSP + '?' +
            '(?:\\]|$)',

          attrmatcher = attributes.replace(attrparser, attrvalues),

          pseudoclass =
            '(?:\\x28' + WSP + '*' +
              '(?:' + pseudoparms + '?)?|' +
              // universal * &
              // namespace *|*
              '(?:\\*|\\|)|' +
              '(?:' +
                '(?::' + pseudonames +
                '(?:\\x28' + pseudoparms + '?(?:\\x29|$))?|' +
              ')|' +
              '(?:[.#]?' + identifier + ')|' +
              '(?:' + attributes + ')' +
              ')+|' +
              '(?:' + WSP + '?,' + WSP + '?)|' +
              '(?:' + WSP + '?)|' +
              '(?:\\x29|$))*',

          standardValidator =
            '(?=' + WSP + '?[^>+~(){}<>])' +
            '(?:' +
              // universal * &
              // namespace *|*
              '(?:\\*|\\|)|' +
              '(?:[.#]?' + identifier + ')+|' +
              '(?:' + attributes + ')+|' +
              '(?:::?' + pseudonames + pseudoclass + ')|' +
              '(?:' + WSP + '?' + CFG.combinators + WSP + '?)|' +
              '(?:' + WSP + '?,' + WSP + '?)|' +
              '(?:' + WSP + '?)' +
            ')+';

          // the following global RE is used to return the
          // deepest nodeName in selector strings and then
          // use it to retrieve all possible matching nodes
          // that will be filtered by compiled resolvers
          reOptimizer = RegExp(
            '(?:([.:#*]?)' +
            '(' + identifier + ')' +
            '(?:' +
              ':[-\\w]+|' +
              '\\[[^\\]]+(?:\\]|$)|' +
              '\\x28[^\\x29]+(?:\\x29|$)' +
            ')*)$');

          // global
          reValidator = RegExp(standardValidator, 'g');

          Patterns.id = RegExp('^#(' + identifier + ')(.*)');
          Patterns.tagName = RegExp('^(' + identifier + ')(.*)');
          Patterns.className = RegExp('^\\.(' + identifier + ')(.*)');
          Patterns.attribute = RegExp('^(?:' + attrmatcher + ')(.*)');
        },

      F_INIT = '"use strict";return function Resolver(c,f,x,r)',

      S_HEAD = 'var lvl=[],e,n,o,j=r.length-1,k=-1',
      M_HEAD = 'var e,n,o',

      S_LOOP = 'main:while((e=c[++k]))',
      N_LOOP = 'main:while((e=c.item(++k)))',
      M_LOOP = 'e=c;',

      S_BODY = 'r[++j]={node:c[k],lvl:lvl};lvl=[];',
      N_BODY = 'r[++j]=c.item(k);',
      M_BODY = '',

      S_TAIL = 'continue main;',
      M_TAIL = 'r=true;',

      S_TEST = 'if(f(c[k])){break main;}',
      N_TEST = 'if(f(c.item(k))){break main;}',
      M_TEST = 'f(c);',

      S_VARS = [ ],
      M_VARS = [ ],

      // compile groups or single selector strings into
      // executable functions for matching or selecting
      compile =
        function(selector, mode, callback) {
          var factory, head = '', loop = '', macro = '', source = '', vars = '';

          // 'mode' can be boolean or null
          // true = select / false = match
          // null to use collection.item()
          switch (mode) {
            case true:
              if (selectLambdas[selector]) { return selectLambdas[selector]; }
              macro = S_BODY + (callback ? S_TEST : '') + S_TAIL;
              head = S_HEAD;
              loop = S_LOOP;
              break;
            case false:
              if (matchLambdas[selector]) { return matchLambdas[selector]; }
              macro = M_BODY + (callback ? M_TEST : '') + M_TAIL;
              head = M_HEAD;
              loop = M_LOOP;
              break;
            case null:
              if (selectLambdas[selector]) { return selectLambdas[selector]; }
              macro = N_BODY + (callback ? N_TEST : '') + S_TAIL;
              head = S_HEAD;
              loop = N_LOOP;
              break;
          }

          source = compileSelector(selector, macro, mode, callback, false);

          loop += mode || mode === null ? '{' + source + '}' : source;

          if (mode || mode === null && selector.includes(':nth')) {
            loop += reNthElem.test(selector) ? 's.nthElement(null, 2);' : '';
            loop += reNthType.test(selector) ? 's.nthOfType(null, 2);' : '';
          }

          if (S_VARS[0] || M_VARS[0]) {
            vars = ',' + (S_VARS.join(',') || M_VARS.join(','));
            S_VARS.length = 0;
            M_VARS.length = 0;
          }

          factory = Function('s', F_INIT + '{' + head + vars + ';' + loop + 'return r;}')(Snapshot);

          return mode || mode === null ? (selectLambdas[selector] = factory) : (matchLambdas[selector] = factory);
        },

      // build conditional code to check components of selector strings
      compileSelector =
        function(expression, source, mode, callback, not) {

          // N is the negation pseudo-class flag
          // D is the default inverted negation flag
          var a, b, n, f, i, l, name, nested, NS,
          N = not ? '!' : '', D = not ? '' : '!',
          compat, expr, match, result, status, symbol, test,
          type, selector = expression, selector_string, vars;

          // original 'select' or 'match' selector string before normalization
          selector_string = mode ? lastSelected : lastMatched;

          // isolate selector combinators/components and normalize whitespace
          selector = selector.replace(STD.combinator, '$1');//.replace(STD.whitespace, ' ');

          var index = 0;
          while (selector) {
            source = 'lvl[' + (index++) + ']=e;' + source;  // collect all related nodes

            // get namespace prefix if present or get first char of selector
            symbol = STD.apimethods.test(selector) ? '|' : selector[0];

            switch (symbol) {

              // universal resolver
              case '*':
                match = selector.match(Patterns.universal);
                if (N == '!') {
                  source = 'if(' + N + 'true' +
                    '){' + source + '}';
                }
                break;

              // id resolver
              case '#':
                match = selector.match(Patterns.id);
                source = 'if(' + N + '(/^' + match[1] + '$/.test(e.getAttribute("id"))' +
                  ')){' + source + '}';
                break;

              // class name resolver
              case '.':
                match = selector.match(Patterns.className);
                compat = (QUIRKS_MODE ? 'i' : '') + '.test(e.getAttribute("class"))';
                source = 'if(' + N + '(/(^|\\s)' + match[1] + '(\\s|$)/' + compat +
                  ')){' + source + '}';
                break;

              // tag name resolver
              case (/[a-z]/i.test(symbol) ? symbol : undefined):
                match = selector.match(Patterns.tagName);
                source = 'if(' + N + '(e.nodeName' +
                  (Config.MIXEDCASE || hasMixedCaseTagNames(doc) ?
                    '.toLowerCase()=="' + match[1].toLowerCase() + '"' :
                    '=="' + match[1].toUpperCase() + '"') +
                  ')){' + source + '}';
                break;

              // namespace resolver
              case '|':
                match = selector.match(Patterns.namespace);
                if (match[1] == '*') {
                  source = 'if(' + N + 'true){' + source + '}';
                } else if (!match[1]) {
                  source = 'if(' + N + '(!e.namespaceURI)){' + source + '}';
                } else if (typeof match[1] == 'string' && root.prefix == match[1]) {
                  source = 'if(' + N + '(e.namespaceURI=="' + NAMESPACE + '")){' + source + '}';
                } else {
                  emit('\'' + selector_string + '\'' + qsInvalid);
                }
                break;

              // attributes resolver
              case '[':
                match = selector.match(Patterns.attribute);
                NS = match[0].match(STD.namespaces);
                name = match[1];
                expr = name.split(':');
                expr = expr.length == 2 ? expr[1] : expr[0];
                if (match[2] && !(test = Operators[match[2]])) {
                  emit('\'' + selector_string + '\'' + qsInvalid);
                  return '';
                }
                if (match[4] === '') {
                  test = match[2] == '~=' ?
                    { p1: '^\\s', p2: '+$', p3: 'true' } :
                      match[2] in ATTR_STD_OPS && match[2] != '~=' ?
                    { p1: '^',    p2: '$',  p3: 'true' } : test;
                } else if (match[2] == '~=' && match[4].includes(' ')) {
                  // whitespace separated list but value contains space
                  source = 'if(' + N + 'false){' + source + '}';
                  break;
                } else if (match[4]) {
                  match[4] = convertEscapes(match[4]).replace(REX.RegExpChar, '\\$&');
                }
                type = match[5] == 'i' || (HTML_DOCUMENT && HTML_TABLE[expr.toLowerCase()]) ? 'i' : '';
                source = 'if(' + N + '(' +
                  (!match[2] ? (NS ? 's.hasAttributeNS(e,"' + name + '")' : 'e.hasAttribute("' + name + '")') :
                  !match[4] && ATTR_STD_OPS[match[2]] && match[2] != '~=' ? 'e.getAttribute("' + name + '")==""' :
                  '(/' + test.p1 + match[4] + test.p2 + '/' + type + ').test(e.getAttribute("' + name + '"))==' + test.p3) +
                  ')){' + source + '}';
                break;

              // *** General sibling combinator
              // E ~ F (F relative sibling of E)
              case '~':
                match = selector.match(Patterns.relative);
                source = 'n=e;while((e=e.previousElementSibling)){' + source + '}e=n;';
                break;
              // *** Adjacent sibling combinator
              // E + F (F adiacent sibling of E)
              case '+':
                match = selector.match(Patterns.adjacent);
                source = 'n=e;if((e=e.previousElementSibling)){' + source + '}e=n;';
                break;
              // *** Descendant combinator
              // E F (E ancestor of F)
              case '\x09':
              case '\x20':
                match = selector.match(Patterns.ancestor);
                source = 'n=e;while((e=e.parentElement)){' + source + '}e=n;';
                break;
              // *** Child combinator
              // E > F (F children of E)
              case '>':
                match = selector.match(Patterns.children);
                source = 'n=e;if((e=e.parentElement)){' + source + '}e=n;';
                break;

              // *** user supplied combinators extensions
              case (symbol in Combinators ? symbol : undefined):
                // for other registered combinators extensions
                match[match.length - 1] = '*';
                source = Combinators[symbol](match) + source;
                break;

              // *** tree-structural pseudo-classes
              // :root, :empty, :first-child, :last-child, :only-child, :first-of-type, :last-of-type, :only-of-type
              case ':':
                if ((match = selector.match(Patterns.structural))) {
                  match[1] = match[1].toLowerCase();
                  switch (match[1]) {
                    case 'root':
                      // there can only be one :root element, so exit the loop once found
                      source = 'if(' + N + '(e===s.root)){' + source + (mode ? 'break main;' : '') + '}';
                      break;
                    case 'empty':
                      // matches elements that don't contain elements or text nodes
                      source = 'n=e.firstChild;while(n&&!(/1|3/).test(n.nodeType)){n=n.nextSibling}if(' + D + 'n){' + source + '}';
                      break;

                    // *** child-indexed pseudo-classes
                    // :first-child, :last-child, :only-child
                    case 'only-child':
                      source = 'if(' + N + '(!e.nextElementSibling&&!e.previousElementSibling)){' + source + '}';
                      break;
                    case 'last-child':
                      source = 'if(' + N + '(!e.nextElementSibling)){' + source + '}';
                      break;
                    case 'first-child':
                      source = 'if(' + N + '(!e.previousElementSibling)){' + source + '}';
                      break;

                    // *** typed child-indexed pseudo-classes
                    // :only-of-type, :last-of-type, :first-of-type
                    case 'only-of-type':
                      source = 'o=e.nodeName;' +
                        'n=e;while((n=n.nextElementSibling)&&n.nodeName!=o);if(!n){' +
                        'n=e;while((n=n.previousElementSibling)&&n.nodeName!=o);}if(' + D + 'n){' + source + '}';
                      break;
                    case 'last-of-type':
                      source = 'n=e;o=e.nodeName;while((n=n.nextElementSibling)&&n.nodeName!=o);if(' + D + 'n){' + source + '}';
                      break;
                    case 'first-of-type':
                      source = 'n=e;o=e.nodeName;while((n=n.previousElementSibling)&&n.nodeName!=o);if(' + D + 'n){' + source + '}';
                      break;
                    default:
                      emit('\'' + selector_string + '\'' + qsInvalid);
                      break;
                  }
                }

                // *** child-indexed & typed child-indexed pseudo-classes
                // :nth-child, :nth-of-type, :nth-last-child, :nth-last-of-type
                else if ((match = selector.match(Patterns.treestruct))) {
                  match[1] = match[1].toLowerCase();
                  switch (match[1]) {
                    case 'nth-child':
                    case 'nth-of-type':
                    case 'nth-last-child':
                    case 'nth-last-of-type':
                      expr = /-of-type/i.test(match[1]);
                      if (match[1] && match[2]) {
                        type = /last/i.test(match[1]);
                        if (match[2] == 'n') {
                          source = 'if(' + N + 'true){' + source + '}';
                          break;
                        } else if (match[2] == '1') {
                          test = type ? 'next' : 'previous';
                          source = expr ? 'n=e;o=e.nodeName;' +
                            'while((n=n.' + test + 'ElementSibling)&&n.nodeName!=o);if(' + D + 'n){' + source + '}' :
                            'if(' + N + '!e.' + test + 'ElementSibling){' + source + '}';
                          break;
                        } else if (match[2] == 'even' || match[2] == '2n0' || match[2] == '2n+0' || match[2] == '2n') {
                          test = 'n%2==0';
                        } else if (match[2] == 'odd'  || match[2] == '2n1' || match[2] == '2n+1') {
                          test = 'n%2==1';
                        } else {
                          f = /n/i.test(match[2]);
                          n = match[2].split('n');
                          a = parseInt(n[0], 10) || 0;
                          b = parseInt(n[1], 10) || 0;
                          if (n[0] == '-') { a = -1; }
                          if (n[0] == '+') { a = +1; }
                          test = (b ? '(n' + (b > 0 ? '-' : '+') + Math.abs(b) + ')' : 'n') + '%' + a + '==0' ;
                          test =
                            a >= +1 ? (f ? 'n>' + (b - 1) + (Math.abs(a) != 1 ? '&&' + test : '') : 'n==' + a) :
                            a <= -1 ? (f ? 'n<' + (b + 1) + (Math.abs(a) != 1 ? '&&' + test : '') : 'n==' + a) :
                            a === 0 ? (n[0] ? 'n==' + b : 'n>' + (b - 1)) : 'false';
                        }
                        expr = expr ? 'OfType' : 'Element';
                        type = type ? 'true' : 'false';
                        source = 'n=s.nth' + expr + '(e,' + type + ');if(' + N + '(' + test + ')){' + source + '}';
                      } else {
                        emit('\'' + selector_string + '\'' + qsInvalid);
                      }
                      break;
                    default:
                      emit('\'' + selector_string + '\'' + qsInvalid);
                      break;
                  }
                }

                // *** logical combination pseudo-classes
                // :matches( s1, [ s2, ... ]), :not( s1, [ s2, ... ])
                else if ((match = selector.match(Patterns.logicalsel))) {
                  match[1] = match[1].toLowerCase();
                  switch (match[1]) {
                    case 'matches':
                      if (not === true || nested === true) {
                        emit(':matches() pseudo-class cannot be nested');
                      }
                      nested = true;
                      expr = match[2].replace(REX.CommaGroup, ',').replace(REX.TrimSpaces, '');
                      // check nested compound selectors s1, s2
                      expr = match[2].match(REX.SplitGroup);
                      for (i = 0, l = expr.length; l > i; ++i) {
                        expr[i] = expr[i].replace(REX.TrimSpaces, '');
                        source = 'if(s.match("' + expr[i].replace(/\x22/g, '\\"') + '",e)){' + source + '}';
                      }
                      break;
                    case 'not':
                      if (not === true || nested === true) {
                        emit(':not() pseudo-class cannot be nested');
                      }
                      expr = match[2].replace(REX.CommaGroup, ',').replace(REX.TrimSpaces, '');
                      // check nested compound selectors s1, s2
                      expr = match[2].match(REX.SplitGroup);
                      for (i = 0, l = expr.length; l > i; ++i) {
                        expr[i] = expr[i].replace(REX.TrimSpaces, '');
                        source = compileSelector(expr[i], source, false, callback, true);
                      }
                      break;
                    default:
                      emit('\'' + selector_string + '\'' + qsInvalid);
                      break;
                  }
                }

                // *** linguistic pseudo-classes
                // :dir( ltr / rtl ), :lang( en )
                else if ((match = selector.match(Patterns.linguistic))) {
                  match[1] = match[1].toLowerCase();
                  switch (match[1]) {
                    case 'dir':
                      source = 'var p;if(' + N + '(' +
                        '(/' + match[2] + '/i.test(e.dir))||(p=s.ancestor("[dir]", e))&&' +
                        '(/' + match[2] + '/i.test(p.dir))||(e.dir==""||e.dir=="auto")&&' +
                        '(' + (match[2] == 'ltr' ? '!':'')+ RTL +'.test(e.textContent)))' +
                        '){' + source + '};';
                      break;
                    case 'lang':
                      expr = '(?:^|-)' + match[2] + '(?:-|$)';
                      source = 'var p;if(' + N + '(' +
                        '(e.isConnected&&(e.lang==""&&(p=s.ancestor("[lang]",e)))&&' +
                        '(p.lang=="' + match[2] + '")||/'+ expr +'/i.test(e.lang)))' +
                        '){' + source + '};';
                      break;
                    default:
                      emit('\'' + selector_string + '\'' + qsInvalid);
                      break;
                  }
                }

                // *** location pseudo-classes
                // :link, :visited, :target
                else if ((match = selector.match(Patterns.locationpc))) {
                  match[1] = match[1].toLowerCase();
                  switch (match[1]) {
                    case 'link':
                      source = 'if(' + N + '(/^a|area|link$/i.test(e.nodeName)&&e.hasAttribute("href"))){' + source + '}';
                      break;
                    case 'visited':
                      source = 'if(' + N + '(/^a|area|link$/i.test(e.nodeName)&&e.hasAttribute("href")&&e.visited)){' + source + '}';
                      break;
                    case 'target':
                      source = 'if(' + N + '((s.doc.compareDocumentPosition(e)&16)&&s.doc.location.hash&&e.id==s.doc.location.hash.slice(1))){' + source + '}';
                      break;
                    default:
                      emit('\'' + selector_string + '\'' + qsInvalid);
                      break;
                  }
                }

                // *** user actions pseudo-classes
                // :hover, :active, :focus
                else if ((match = selector.match(Patterns.useraction))) {
                  match[1] = match[1].toLowerCase();
                  switch (match[1]) {
                    case 'hover':
                      source = 'hasFocus' in doc && doc.hasFocus() ?
                        'if(' + N + '(e===s.doc.hoverElement)){' + source + '}' :
                        'if(' + D + 'true){' + source + '}';
                      break;
                    case 'active':
                      source = 'hasFocus' in doc && doc.hasFocus() ?
                        'if(' + N + '(e===s.doc.activeElement)){' + source + '}' :
                        'if(' + D + 'true){' + source + '}';
                      break;
                    case 'focus':
                      source = 'hasFocus' in doc ?
                        'if(' + N + '(e===s.doc.activeElement&&s.doc.hasFocus()&&(e.type||e.href||typeof e.tabIndex=="number"))){' + source + '}' :
                        'if(' + N + '(e===s.doc.activeElement&&(e.type||e.href))){' + source + '}';
                      break;
                    case 'focus-within':
                      source = 'hasFocus' in doc ?
                        'n=s.doc.activeElement;while(e){if(e===n||e.parentNode===n)break;}' +
                        'if(' + N + '(e===n&&s.doc.hasFocus()&&(e.type||e.href||typeof e.tabIndex=="number"))){' + source + '}' : source;
                      break;
                    default:
                      emit('\'' + selector_string + '\'' + qsInvalid);
                      break;
                  }
                }

                // *** user interface and form pseudo-classes
                // :enabled, :disabled, :read-only, :read-write, :placeholder-shown, :default
                else if ((match = selector.match(Patterns.inputstate))) {
                  match[1] = match[1].toLowerCase();
                  switch (match[1]) {
                    case 'enabled':
                      source = 'if(' + N + '(("form" in e||/^optgroup$/i.test(e.nodeName))&&"disabled" in e &&e.disabled===false' +
                        ')){' + source + '}';
                      break;
                    case 'disabled':
                      // https://www.w3.org/TR/html5/forms.html#enabling-and-disabling-form-controls:-the-disabled-attribute
                      source = 'if(' + N + '(("form" in e||/^optgroup$/i.test(e.nodeName))&&"disabled" in e&&' +
                        '(e.disabled===true||(n=s.ancestor("fieldset",e))&&(n=s.first("legend",n))&&!n.contains(e))' +
                        ')){' + source + '}';
                      break;
                    case 'read-only':
                      source =
                        'if(' + N + '(' +
                          '(/^textarea$/i.test(e.nodeName)&&(e.readOnly||e.disabled))||' +
                          '("|password|text|".includes("|"+e.type+"|")&&e.readOnly)' +
                        ')){' + source + '}';
                      break;
                    case 'read-write':
                      source =
                        'if(' + N + '(' +
                          '((/^textarea$/i.test(e.nodeName)&&!e.readOnly&&!e.disabled)||' +
                          '("|password|text|".includes("|"+e.type+"|")&&!e.readOnly&&!e.disabled))||' +
                          '(e.hasAttribute("contenteditable")||(s.doc.designMode=="on"))' +
                        ')){' + source + '}';
                      break;
                    case 'placeholder-shown':
                      source =
                        'if(' + N + '(' +
                          '(/^input|textarea$/i.test(e.nodeName))&&e.hasAttribute("placeholder")&&' +
                          '("|textarea|password|number|search|email|text|tel|url|".includes("|"+e.type+"|"))&&' +
                          '(!s.match(":focus",e))' +
                        ')){' + source + '}';
                      break;
                    case 'default':
                      source =
                        'if(' + N + '("form" in e && e.form)){' +
                          'var x=0;n=[];' +
                          'if(e.type=="image")n=e.form.getElementsByTagName("input");' +
                          'if(e.type=="submit")n=e.form.elements;' +
                          'while(n[x]&&e!==n[x]){' +
                            'if(n[x].type=="image")break;' +
                            'if(n[x].type=="submit")break;' +
                            'x++;' +
                          '}' +
                        '}' +
                        'if(' + N + '(e.form&&(e===n[x]&&"|image|submit|".includes("|"+e.type+"|"))||' +
                          '((/^option$/i.test(e.nodeName))&&e.defaultSelected)||' +
                          '(("|radio|checkbox|".includes("|"+e.type+"|"))&&e.defaultChecked)' +
                        ')){' + source + '}';
                      break;
                    default:
                      emit('\'' + selector_string + '\'' + qsInvalid);
                      break;
                  }
                }

                // *** input pseudo-classes (for form validation)
                // :checked, :indeterminate, :valid, :invalid, :in-range, :out-of-range, :required, :optional
                else if ((match = selector.match(Patterns.inputvalue))) {
                  match[1] = match[1].toLowerCase();
                  switch (match[1]) {
                    case 'checked':
                      source = 'if(' + N + '(/^input$/i.test(e.nodeName)&&' +
                        '("|radio|checkbox|".includes("|"+e.type+"|")&&e.checked)||' +
                        '(/^option$/i.test(e.nodeName)&&(e.selected||e.checked))' +
                        ')){' + source + '}';
                      break;
                    case 'indeterminate':
                      source =
                        'if(' + N + '(/^progress$/i.test(e.nodeName)&&!e.hasAttribute("value"))||' +
                          '(/^input$/i.test(e.nodeName)&&("checkbox"==e.type&&e.indeterminate)||' +
                          '("radio"==e.type&&e.name&&!s.first("input[name="+e.name+"]:checked",e.form))' +
                        ')){' + source + '}';
                      break;
                    case 'required':
                      source =
                        'if(' + N +
                          '(/^input|select|textarea$/i.test(e.nodeName)&&e.required)' +
                        '){' + source + '}';
                      break;
                    case 'optional':
                      source =
                        'if(' + N +
                          '(/^input|select|textarea$/i.test(e.nodeName)&&!e.required)' +
                        '){' + source + '}';
                      break;
                    case 'invalid':
                      source =
                        'if(' + N + '((' +
                          '(/^form$/i.test(e.nodeName)&&!e.noValidate)||' +
                          '(e.willValidate&&!e.formNoValidate))&&!e.checkValidity())||' +
                          '(/^fieldset$/i.test(e.nodeName)&&s.first(":invalid",e))' +
                        '){' + source + '}';
                      break;
                    case 'valid':
                      source =
                        'if(' + N + '((' +
                          '(/^form$/i.test(e.nodeName)&&!e.noValidate)||' +
                          '(e.willValidate&&!e.formNoValidate))&&e.checkValidity())||' +
                          '(/^fieldset$/i.test(e.nodeName)&&s.first(":valid",e))' +
                        '){' + source + '}';
                      break;
                    case 'in-range':
                      source =
                        'if(' + N +
                          '(/^input$/i.test(e.nodeName))&&' +
                          '(e.willValidate&&!e.formNoValidate)&&' +
                          '(!e.validity.rangeUnderflow&&!e.validity.rangeOverflow)&&' +
                          '("|date|datetime-local|month|number|range|time|week|".includes("|"+e.type+"|"))&&' +
                          '("range"==e.type||e.getAttribute("min")||e.getAttribute("max"))' +
                        '){' + source + '}';
                      break;
                    case 'out-of-range':
                      source =
                        'if(' + N +
                          '(/^input$/i.test(e.nodeName))&&' +
                          '(e.willValidate&&!e.formNoValidate)&&' +
                          '(e.validity.rangeUnderflow||e.validity.rangeOverflow)&&' +
                          '("|date|datetime-local|month|number|range|time|week|".includes("|"+e.type+"|"))&&' +
                          '("range"==e.type||e.getAttribute("min")||e.getAttribute("max"))' +
                        '){' + source + '}';
                      break;
                    default:
                      emit('\'' + selector_string + '\'' + qsInvalid);
                      break;
                  }
                }

                // allow pseudo-elements starting with single colon (:)
                // :after, :before, :first-letter, :first-line
                else if ((match = selector.match(Patterns.pseudo_sng))) {
                  source = 'if(' + D + '(e.nodeType==1)){' + source + '}';
                }

                // allow pseudo-elements starting with double colon (::)
                // ::after, ::before, ::marker, ::placeholder, ::inactive-selection, ::selection, ::-webkit-<foo-bar>
                else if ((match = selector.match(Patterns.pseudo_dbl))) {
                  source = 'if(' + D + '(e.nodeType==1)){' + source + '}';
                }

                else {

                  // reset
                  expr = false;
                  status = false;

                  // process registered selector extensions
                  for (expr in Selectors) {
                    if ((match = selector.match(Selectors[expr].Expression))) {
                      result = Selectors[expr].Callback(match, source, mode, callback);
                      if ('match' in result) { match = result.match; }
                      vars = result.modvar;
                      if (mode) {
                         // add extra select() vars
                         vars && S_VARS.indexOf(vars) < 0 && (S_VARS[S_VARS.length] = vars);
                      } else {
                         // add extra match() vars
                         vars && M_VARS.indexOf(vars) < 0 && (M_VARS[M_VARS.length] = vars);
                      }
                      // extension source code
                      source = result.source;
                      // extension status code
                      status = result.status;
                      // break on status error
                      if (status) { break; }
                    }
                  }

                  if (!status) {
                    emit('unknown pseudo-class selector \'' + selector + '\'');
                    return '';
                  }

                  if (!expr) {
                    emit('unknown token in selector \'' + selector + '\'');
                    return '';
                  }

                }
                break;

            default:
              emit('\'' + selector_string + '\'' + qsInvalid);
              break;

            }
            // end of switch symbol

            if (!match) {
              emit('\'' + selector_string + '\'' + qsInvalid);
              return '';
            }

            // pop last component
            selector = match.pop();
          }
          // end of while selector

          return source;
        },

      // replace ':scope' pseudo-class with element references
      makeref =
        function(selectors, element) {
          return selectors.replace(/:scope/ig,
            element.nodeName.toLowerCase() +
            (element.id ? '#' + element.id : '') +
            (element.className ? '.' + element.classList[0] : ''));
        },

      // equivalent of w3c 'closest' method
      ancestor =
        function _closest(selectors, element, callback) {

          if ((/:scope/i).test(selectors)) {
            selectors = makeref(selectors, element);
          }

          while (element) {
            if (match(selectors, element, callback)) break;
            element = element.parentElement;
          }
          return element;
        },

      match_assert =
        function(f, element, callback) {
          for (var i = 0, l = f.length, r = false; l > i; ++i)
            f[i](element, callback, null, false) && (r = true);
          return r;
        },

      match_collect =
        function(selectors, callback) {
          for (var i = 0, l = selectors.length, f = [ ]; l > i; ++i)
            f[i] = compile(selectors[i], false, callback);
          return { factory: f };
        },

      // equivalent of w3c 'matches' method
      match =
        function _matches(selectors, element, callback) {

          var expressions, parsed;

          if (element && matchResolvers[selectors]) {
            return match_assert(matchResolvers[selectors].factory, element, callback);
          }

          lastMatched = selectors;

          // arguments validation
          if (arguments.length === 0) {
            emit(qsNotArgs, TypeError);
            return Config.VERBOSITY ? undefined : false;
          } else if (arguments[0] === '') {
            emit('\'\'' + qsInvalid);
            return Config.VERBOSITY ? undefined : false;
          }

          // input NULL or UNDEFINED
          if (typeof selectors != 'string') {
            selectors = '' + selectors;
          }

          if ((/:scope/i).test(selectors)) {
            selectors = makeref(selectors, element);
          }

          // normalize input string
          parsed = selectors.
            replace(/\x00|\\$/g, '\ufffd').
            replace(REX.CombineWSP, '\x20').
            replace(REX.PseudosWSP, '$1').
            replace(REX.TabCharWSP, '\t').
            replace(REX.CommaGroup, ',').
            replace(REX.TrimSpaces, '');

          // parse, validate and split possible compound selectors
          if ((expressions = parsed.match(reValidator)) && expressions.join('') == parsed) {
            expressions = parsed.match(REX.SplitGroup);
            if (parsed[parsed.length - 1] == ',') {
              emit(qsInvalid);
              return Config.VERBOSITY ? undefined : false;
            }
          } else {
            emit('\'' + selectors + '\'' + qsInvalid);
            return Config.VERBOSITY ? undefined : false;
          }

          matchResolvers[selectors] = match_collect(expressions, callback);

          return match_assert(matchResolvers[selectors].factory, element, callback);
        },

      // equivalent of w3c 'querySelector' method
      first =
        function _querySelector(selectors, context, callback) {
          if (arguments.length === 0) {
            emit(qsNotArgs, TypeError);
          }
          return select(selectors, context,
            typeof callback == 'function' ?
            function firstMatch(element) {
              callback(element);
              return false;
            } :
            function firstMatch() {
              return false;
            }
          )[0] || null;
        },

      // equivalent of w3c 'querySelectorAll' method
      select =
        function _querySelectorAll(selectors, context, callback) {

          var expressions, nodes, parsed, resolver;

          context || (context = doc);

          if (selectors) {
            if ((resolver = selectResolvers[selectors])) {
              if (resolver.context === context && resolver.callback === callback) {
                var f = resolver.factory, h = resolver.htmlset, n = resolver.nodeset, nodes = [ ];
                if (n.length > 1) {
                  for (var i = 0, l = n.length, list; l > i; ++i) {
                    list = compat[n[i][0]](context, n[i].slice(1))();
                    if (f[i] !== null) {
                      f[i](list, callback, context, nodes);
                    } else {
                      nodes = nodes.concat(list);
                    }
                  }
                  if (l > 1 && nodes.length > 1) {
                    nodes.sort(documentOrder);
                    hasDupes && (nodes = unique(nodes));
                  }
                } else {
                  if (f[0]) {
                    nodes = f[0](h[0](), callback, context, nodes);
                  } else {
                    nodes = h[0]();
                  }
                }
                return typeof callback == 'function' ?
                  concatCall(nodes, callback) : nodes;
              }
            }
          }

          lastSelected = selectors;

          // arguments validation
          if (arguments.length === 0) {
            emit(qsNotArgs, TypeError);
            return Config.VERBOSITY ? undefined : none;
          } else if (arguments[0] === '') {
            emit('\'\'' + qsInvalid);
            return Config.VERBOSITY ? undefined : none;
          } else if (lastContext !== context) {
            lastContext = switchContext(context);
          }

          // input NULL or UNDEFINED
          if (typeof selectors != 'string') {
            selectors = '' + selectors;
          }

          if ((/:scope/i).test(selectors)) {
            selectors = makeref(selectors, context);
          }

          // normalize input string
          parsed = selectors.
            replace(/\x00|\\$/g, '\ufffd').
            replace(REX.CombineWSP, '\x20').
            replace(REX.PseudosWSP, '$1').
            replace(REX.TabCharWSP, '\t').
            replace(REX.CommaGroup, ',').
            replace(REX.TrimSpaces, '');

          // parse, validate and split possible compound selectors
          if ((expressions = parsed.match(reValidator)) && expressions.join('') == parsed) {
            expressions = parsed.match(REX.SplitGroup);
            if (parsed[parsed.length - 1] == ',') {
              emit(qsInvalid);
              return Config.VERBOSITY ? undefined : false;
            }
          } else {
            emit('\'' + selectors + '\'' + qsInvalid);
            return Config.VERBOSITY ? undefined : false;
          }

          // save/reuse factory and closure collection
          selectResolvers[selectors] = collect(expressions, context, callback);

          if(context._extraNodes) return selectResolvers[selectors].extraNodes;

          nodes = selectResolvers[selectors].results;

          return typeof callback == 'function' ?
            concatCall(nodes, callback) : nodes;
        },

      // optimize selectors avoiding duplicated checks
      optimize =
        function(selector, token) {
          var index = token.index,
          length = token[1].length + token[2].length;
          return selector.slice(0, index) +
            (' >+~'.indexOf(selector.charAt(index - 1)) > -1 ?
              (':['.indexOf(selector.charAt(index + length + 1)) > -1 ?
              '*' : '') : '') + selector.slice(index + length - (token[1] == '*' ? 1 : 0));
        },

      // prepare factory resolvers and closure collections
      collect =
        function(selectors, context, callback) {

          var i, l, seen = { }, token = ['', '*', '*'], optimized = selectors,
          factory = [ ], htmlset = [ ], nodeset = [ ], results = [ ], type;

          for (i = 0, l = selectors.length; l > i; ++i) {

            if (!seen[selectors[i]] && (seen[selectors[i]] = true)) {
              type = selectors[i].match(reOptimizer);
              if (type && type[1] != ':' && (token = type)) {
                token[1] || (token[1] = '*');
                optimized[i] = optimize(optimized[i], token);
              } else {
                token = ['', '*', '*'];
              }
    		}

            nodeset[i] = token[1] + token[2];
            htmlset[i] = compat[token[1]](context, token[2]);
            factory[i] = compile(optimized[i], true, null);

            factory[i] ?
              factory[i](htmlset[i](), callback, context, results) :
              result.concat(htmlset[i]());
          }

          var extraNodes = [];
          results = results.map(function(i) {
            if(!i.node) return i;
            extraNodes.push(i);
            return i.node;
          });

          if (l > 1) {
            results.sort(documentOrder);
            hasDupes && (results = unique(results));
          }

          return {
            callback: callback,
            context: context,
            factory: factory,
            htmlset: htmlset,
            nodeset: nodeset,
            results: results,
            extraNodes: extraNodes
          };

        },

      // QSA placeholders to native references
      _closest, _matches, _querySelector, _querySelectorAll,

      // overrides QSA methods (only for browsers)
      install =
        function(all) {

          // save native QSA references
          _closest = Element.prototype.closest;
          _matches = Element.prototype.matches;
          _querySelector = Document.prototype.querySelector;
          _querySelectorAll = Document.prototype.querySelectorAll;

          Element.prototype.closest =
            function closest() {
              var ctor = Object.getPrototypeOf(this).__proto__.__proto__.constructor.name;
              if (!('nodeType' in this)) { emit('\'closest\' called on an object that does not implement interface ' + ctor + '.', TypeError); }
              return arguments.length < 1 ? ancestor.apply(this, [ ]) :
                     arguments.length < 2 ? ancestor.apply(this, [ arguments[0], this ]) :
                                            ancestor.apply(this, [ arguments[0], this, typeof arguments[1] == 'function' ? arguments[1] : undefined ]);
            };

          Element.prototype.matches =
            function matches() {
              var ctor = Object.getPrototypeOf(this).__proto__.__proto__.constructor.name;
              if (!('nodeType' in this)) { emit('\'matches\' called on an object that does not implement interface ' + ctor + '.', TypeError); }
              return arguments.length < 1 ? match.apply(this, [ ]) :
                     arguments.length < 2 ? match.apply(this, [ arguments[0], this ]) :
                                            match.apply(this, [ arguments[0], this, typeof arguments[1] == 'function' ? arguments[1] : undefined ]);
            };

          Element.prototype.querySelector =
          Document.prototype.querySelector =
          DocumentFragment.prototype.querySelector =
            function querySelector() {
              var ctor = Object.getPrototypeOf(this).__proto__.__proto__.constructor.name;
              if (!('nodeType' in this)) { emit('\'querySelector\' called on an object that does not implement interface ' + ctor + '.', TypeError); }
              return arguments.length < 1 ? first.apply(this, [ ]) :
                     arguments.length < 2 ? first.apply(this, [ arguments[0], this ]) :
                                            first.apply(this, [ arguments[0], this, typeof arguments[1] == 'function' ? arguments[1] : undefined ]);
            };

          Element.prototype.querySelectorAll =
          Document.prototype.querySelectorAll =
          DocumentFragment.prototype.querySelectorAll =
            function querySelectorAll() {
              var ctor = Object.getPrototypeOf(this).__proto__.__proto__.constructor.name;
              if (!('nodeType' in this)) { emit('\'querySelectorAll\' called on an object that does not implement interface ' + ctor + '.', TypeError); }
              return arguments.length < 1 ? select.apply(this, [ ]) :
                     arguments.length < 2 ? select.apply(this, [ arguments[0], this ]) :
                                            select.apply(this, [ arguments[0], this, typeof arguments[1] == 'function' ? arguments[1] : undefined ]);
            };

          if (all) {
            document.addEventListener('load', function(e) {
              var c, d, r, s, t = e.target;
              if (/iframe/i.test(t.nodeName)) {
                c = '(' + Export + ')(this, ' + Factory + ');'; d = t.contentDocument;
                s = d.createElement('script'); s.textContent = c + 'NW.Dom.install()';
                r = d.documentElement; r.removeChild(r.insertBefore(s, r.firstChild));
              }
            }, true);
          }

        },

      // restore QSA methods (only for browsers)
      uninstall =
        function() {
          // reinstates QSA native references
          Element.prototype.closest = _closest;
          Element.prototype.matches = _matches;
          Element.prototype.querySelector =
          Document.prototype.querySelector =
          DocumentFragment.prototype.querySelector = _querySelector;
          Element.prototype.querySelectorAll =
          Document.prototype.querySelectorAll =
          DocumentFragment.prototype.querySelectorAll = _querySelectorAll;
        },

      // empty set
      none = Array(),

      // context
      lastContext,

      // selector
      lastMatched,
      lastSelected,

      // cached lambdas
      matchLambdas = { },
      selectLambdas = { },

      // cached resolvers
      matchResolvers = { },
      selectResolvers = { },

      // passed to resolvers
      Snapshot = {

        doc: doc,
        from: doc,
        root: root,

        byTag: byTag,

        first: first,
        match: match,

        ancestor: ancestor,

        nthOfType: nthOfType,
        nthElement: nthElement,

        hasAttributeNS: hasAttributeNS
      },

      // public exported methods/objects
      Dom = {

        // exported cache objects

        lastMatched: lastMatched,
        lastSelected: lastSelected,

        matchLambdas: matchLambdas,
        selectLambdas: selectLambdas,

        matchResolvers: matchResolvers,
        selectResolvers: selectResolvers,

        // exported compiler macros

        CFG: CFG,

        M_BODY: M_BODY,
        S_BODY: S_BODY,
        M_TEST: M_TEST,
        S_TEST: S_TEST,

        // exported engine methods

        byId: byId,
        byTag: byTag,
        byClass: byClass,

        match: match,
        first: first,
        select: select,
        closest: ancestor,

        compile: compile,
        configure: configure,

        emit: emit,
        Config: Config,
        Snapshot: Snapshot,

        Version: version,

        install: install,
        uninstall: uninstall,

        Operators: Operators,
        Selectors: Selectors,

        // register a new selector combinator symbol and its related function resolver
        registerCombinator:
          function(combinator, resolver) {
            var i = 0, l = combinator.length, symbol;
            for (; l > i; ++i) {
              if (combinator[i] != '=') {
                symbol = combinator[i];
                break;
              }
            }
            if (CFG.combinators.indexOf(symbol) < 0) {
              CFG.combinators = CFG.combinators.replace('](', symbol + '](');
              CFG.combinators = CFG.combinators.replace('])', symbol + '])');
              Combinators[combinator] = resolver;
              setIdentifierSyntax();
            } else {
              console.warn('Warning: the \'' + combinator + '\' combinator is already registered.');
            }
          },

        // register a new attribute operator symbol and its related function resolver
        registerOperator:
          function(operator, resolver) {
            var i = 0, l = operator.length, symbol;
            for (; l > i; ++i) {
              if (operator[i] != '=') {
                symbol = operator[i];
                break;
              }
            }
            if (CFG.operators.indexOf(symbol) < 0 && !Operators[operator]) {
              CFG.operators = CFG.operators.replace(']=', symbol + ']=');
              Operators[operator] = resolver;
              setIdentifierSyntax();
            } else {
              console.warn('Warning: the \'' + operator + '\' operator is already registered.');
            }
          },

        // register a new selector symbol and its related function resolver
        registerSelector:
          function(name, rexp, func) {
            Selectors[name] || (Selectors[name] = {
              Expression: rexp,
              Callback: func
            });
          }

      };

      initialize(doc);

      return Dom;

    });
    });

    function processCSS() {
        let styleNodes = this.styleNodes;
        const genId$1 = () => this.config.cssGenId ? this.config.cssGenId() : genId();

        let self = this.css = {id: genId$1(), externalMainName: null};
        let astList = [];
        let selectors = {};
        let removeBlocks = [];
        let active = false;

        const selector2str = (sel) => {
            if(!sel.children) sel = {type: 'Selector', children: sel};
            return csstree.generate(sel);
        };

        const convertAst = (node, parent) => {
            if(!node) return node;
            if(typeof node != 'object') return node;
            if(Array.isArray(node)) return node.map(i => convertAst(i, parent));
            if(node.toArray) return node.toArray().map(i => convertAst(i, parent));
            let r = {parent};
            let newParent = node.type ? r : parent;
            for(let k in node) r[k] = convertAst(node[k], newParent);
            return r;
        };

        const parseCSS = (content, option) => {
            let ast = csstree.parse(content, option);
            return convertAst(ast, null);
        };

        const isKeyframes = (name) => name == 'keyframes' || name == '-webkit-keyframes' || name == '-moz-keyframes' || name == '-o-keyframes';

        styleNodes.forEach(transform);

        function transform(styleNode) {
            active = true;
            let external = false;
            let globalBlock = false;
            styleNode.attributes.forEach(a => {
                if(a.name == 'external') self.hasExternal = external = true;
                else if(a.name == 'main') self.externalMainName = a.value;
                else if(a.name == 'global') globalBlock = true;
            });

            let ast = parseCSS(styleNode.content);
            astList.push(ast);

            csstree.walk(ast, function(node) {
                if(node.type == 'Declaration') {
                    if(node.property == 'animation' || node.property == 'animation-name') {
                        let c = node.value.children[0];
                        if(!c) return;
                        if(c.type == 'Identifier') {
                            c.name += '-' + self.id;
                        } else {
                            c = last(node.value.children);
                            if(c.type == 'Identifier') c.name += '-' + self.id;
                        }
                    }
                } else if(node.type === 'Atrule') {
                    if(isKeyframes(node.name)) {
                        node.prelude.children[0].name += '-' + self.id;
                    }
                } else if(node.type === 'Rule') {
                    if(node.parent.parent && node.parent.parent.type == 'Atrule') {
                        if(isKeyframes(node.parent.parent.name)) return;
                    }

                    assert(node.prelude.type=='SelectorList');

                    let emptyBlock = node.block.children.length == 0;
                    if(emptyBlock) removeBlocks.push(node);

                    let selectorList = node.prelude.children;
                    for(let i=0; i < selectorList.length; i++) {
                        processSelector(selectorList[i]);
                    }

                    function processSelector(fullSelector) {
                        assert(fullSelector.type == 'Selector');
                        let origin = [];
                        fullSelector.children.forEach(sel => {
                            if(sel.type == 'PseudoClassSelector' && sel.name == 'global') {
                                sel = sel.children[0];
                                assert(sel.type == 'Raw');
                                let a = parseCSS(sel.value, {context: 'selector'});
                                assert(a.type == 'Selector');
                                a.children.forEach(sel => {
                                    sel.global = true;
                                    origin.push(sel);
                                });
                            } else {
                                origin.push(sel);
                            }
                        });

                        assert(origin.length);

                        let cleanSelectorItems = [];
                        for(let i=0; i<origin.length; i++) {
                            let s = origin[i];
                            if(s.global) continue;
                            if(s.type == 'PseudoClassSelector' || s.type == 'PseudoElementSelector') {
                                let prev = origin[i - 1];
                                if(!prev || prev.type == 'Combinator' || prev.type == 'WhiteSpace') {
                                    cleanSelectorItems.push({type: 'TypeSelector', name: '*'});
                                }
                            } else cleanSelectorItems.push(s);
                        }
                        while(cleanSelectorItems.length && ['WhiteSpace', 'Combinator'].includes(last(cleanSelectorItems).type)) cleanSelectorItems.pop();
                        if(!cleanSelectorItems.length || globalBlock) {  // fully global?
                            assert(origin.length);
                            fullSelector.children = origin;
                            return;
                        }
                        let cleanSelector = selector2str(cleanSelectorItems);

                        let sobj = selectors[cleanSelector];
                        if(!sobj) {
                            let isSimple = false;
                            if(cleanSelectorItems[0].type == 'ClassSelector') {
                                isSimple = true;
                                for(let i=1; i<cleanSelectorItems.length; i++) {
                                    if(cleanSelectorItems[i].type != 'AttributeSelector') {
                                        isSimple = false;
                                        break;
                                    }
                                }
                            }
        
                            selectors[cleanSelector] = sobj = {
                                cleanSelector,
                                isSimple,
                                source: [],
                                fullyGlobal: origin.every(i => i.global)
                            };
                        }

                        if(external) {
                            assert(sobj.isSimple);
                            if(!sobj.external) sobj.external = emptyBlock ? true : genId$1();
                        } else if(!sobj.local) {
                            if(sobj.isSimple) sobj.local = genId$1();
                            else sobj.local = self.id;
                        }

                        let hash = external ? sobj.external : sobj.local;
                        if(emptyBlock) fullSelector.emptyBlock = true;
                        sobj.source.push(fullSelector);

                        let hashed = origin.slice();
                        const insert = (i) => {
                            hashed.splice(i, 0, {type: "ClassSelector", loc: null, name: hash, __hash: true});
                        };

                        for(let i=hashed.length-1;i>=0;i--) {
                            let sel = hashed[i];
                            let left = hashed[i - 1];
                            let right = hashed[i + 1];
                            if(sel.global) continue;
                            if(sel.type == 'PseudoClassSelector' || sel.type == 'PseudoElementSelector') {
                                if(!left || left.type == 'Combinator' || left.type == 'WhiteSpace') insert(i);
                                continue;
                            } else if(sel.type == 'Combinator' || sel.type == 'WhiteSpace') continue;
                            if(!right || ['PseudoClassSelector', 'PseudoElementSelector', 'Combinator', 'WhiteSpace'].includes(right.type)) insert(i + 1);
                        }

                        fullSelector.children = hashed;
                    }            }
            });
        }

        self.isExternalClass = (name) => {
            let sobj = selectors['.' + name];
            return sobj && sobj.external;
        };

        self.markAsExternal = (name) => {
            let sobj = selectors['.' + name];
            if(!sobj) selectors['.' + name] = sobj = {isSimple: true, cleanSelector: '.' + name};
            if(!sobj.external) sobj.external = true;
            active = true;
        };

        self.active = () => active;

        self.containsExternal = () => {
            return Object.values(selectors).some(sel => {
                if(!sel.isSimple) return;
                return sel.external;
            });
        };

        self.getClassMap = () => {
            let classMap = {};
            let metaClass = {};
            Object.values(selectors).forEach(sel => {
                if(!sel.isSimple) return;

                let className = sel.source ? sel.source[0].children[0].name : sel.cleanSelector.substring(1);
                if(sel.external) {
                    metaClass[className] = sel.external;
                }
                if(sel.local) {
                    classMap[className] = sel.local;
                }
            });
            return {classMap, metaClass, main: self.externalMainName};
        };

        self.process = function(data) {
            let dom = makeDom(data);
            const nw = nwsapi({
                document: dom,
                DOMException: function() {}
            });

            Object.values(selectors).forEach(sel => {
                if(sel.fullyGlobal || !sel.local) return;
                let selected;
                try {
                    selected = nw.select([sel.cleanSelector]);
                } catch (_) {
                    let e = new Error(`CSS error: '${selector2str(sel.source[0])}'`);
                    e.details = `selector: '${selector2str(sel.source[0])}'`;
                    throw e;
                }
                selected.forEach(s => {
                    s.node.__node.classes.add(sel.local);
                    s.lvl.forEach(l => l.__node.classes.add(sel.local));
                });
            });
        };

        self.getContent = function() {
            removeBlocks.forEach(node => {
                let i = node.parent.children.indexOf(node);
                if(i>=0) node.parent.children.splice(i, 1);
            });
            return astList.map(ast => csstree.generate(ast)).join('');
        };
    }


    function makeDom(data) {

        function build(parent, list) {
            list.forEach(e => {
                if(e.type == 'each' || e.type == 'fragment' || e.type == 'slot') {
                    if(e.body && e.body.length) build(parent, e.body);
                    return;
                } else if(e.type == 'if') {
                    if(e.bodyMain && e.bodyMain.length) build(parent, e.bodyMain);
                    if(e.body && e.body.length) build(parent, e.body);
                    return;
                } else if(e.type == 'await') {
                    if(e.parts.main && e.parts.main.length) build(parent, e.parts.main);
                    if(e.parts.then && e.parts.then.length) build(parent, e.parts.then);
                    if(e.parts.catch && e.parts.catch.length) build(parent, e.parts.catch);
                    return;
                } else if(e.type != 'node') return;
                //if(e.name[0].match(/[A-Z]/)) return;
                let n = new Node(e.name, {__node: e});
                e.attributes.forEach(a => {
                    if(a.name == 'class') {
                        if(a.value != null) n.className += ' ' + a.value;
                        n.attributes[a.name] = a.value;
                    } else if(a.name == 'id') n.attributes.id = n.id = a.value;
                    else if(a.name.startsWith('class:')) {
                        n.className += ' ' + a.name.substring(6);
                    } else n.attributes[a.name] = a.value;
                });
                n.className = n.className.trim();
                parent.appendChild(n);
                if(e.body && e.body.length) build(n, e.body);
            });
        }
        let body = new Node('body', {
            nodeType: 9,
            contentType: 'text/html',
            compatMode: '',
            _extraNodes: true
        });
        body.documentElement = body;
        build(body, data.body);

        return body;
    }
    function Node(name, data, children) {
        this.nodeName = name;
        this.childNodes = [];
        this.className = '';
        this.attributes = {};

        this.parentElement = null;
        this.firstElementChild = null;
        this.lastElementChild = null;
        this.nextElementSibling = null;
        this.previousElementSibling = null;

        if(data) Object.assign(this, data);
        if(children) children.forEach(c => this.appendChild(c));
    }
    Node.prototype.getAttribute = function(n) {
        if(n == 'class') return this.className;
        if(n == 'id') return this.id;
        return this.attributes[n];
    };

    Node.prototype.hasAttribute = function(n) {
        return n in this.attributes;
    };

    Node.prototype.appendChild = function(n) {
        n.parentElement = this;
        this.childNodes.push(n);
        if(!this.firstElementChild) this.firstElementChild = n;
        if(this.lastElementChild) {
            this.lastElementChild.nextElementSibling = n;
            n.previousElementSibling = this.lastElementChild;
            this.lastElementChild = n;
        } else this.lastElementChild = n;
    };

    Node.prototype.getElementsByTagNameNS = function(ns, name) {
        return this.getElementsByTagName(name);
    };

    Node.prototype.getElementsByTagName = function(name) {
        let result = [];
        this.childNodes.forEach(n => {
            if(name == '*' || n.nodeName == name) result.push(n);
            result.push.apply(result, n.getElementsByTagName(name));
        });
        return result;
    };

    Node.prototype.getElementsByClassName = function(names) {
        names = names.split(/\s+/);
        if(names.length != 1) throw 'Not supported';
        let cls = names[0];

        let result = [];
        this.childNodes.forEach(n => {
            let rx = RegExp('(^|\\s)' + cls + '(\\s|$)', 'i');
            if(rx.test(n.className)) result.push(n);
            result.push.apply(result, n.getElementsByClassName(cls));
        });
        return result;
    };

    function makeComponent(node, element) {
        let propList = node.attributes;
        let forwardAllEvents = false;

        this.require('$context', '$cd');

        let options = [];
        let dynamicComponent;
        let reference = null;
        let propsFn = [], propsSetter = [], $class=[], staticProps = true;

        let componentName = node.name;
        if(componentName == 'component') {
            assert(node.elArg);
            dynamicComponent = node.elArg[0] == '{' ? unwrapExp(node.elArg) : node.elArg;
        } else if(this.config.autoimport) {
            let imported = this.script.autoimport[componentName] || this.script.importedNames.includes(componentName)
                || this.script.rootVariables[componentName] || this.script.rootFunctions[componentName];

            if(!imported) {
                let r = this.config.autoimport(componentName, this.config.path, this);
                if(r) this.script.autoimport[componentName] = r;
            }
        }

        let passOption = {};
        let head = xNode('block');

        head.push(xNode('events', ctx => {
            if(forwardAllEvents) {
                this.require('$events');
                ctx.writeLine('let events = {...$events};');
            } else if(passOption.events) {
                ctx.writeLine('let events = {};');
            }
        }));

        head.push(xNode('slots', ctx => {
            if(passOption.slots) ctx.writeLine('let slots = {};');
        }));

        head.push(xNode('anchor', ctx => {
            if(passOption.anchor) ctx.writeLine('let anchor = {};');
        }));

        let _boundEvents = {};
        const boundEvent = (name) => {
            if(!_boundEvents[name]) _boundEvents[name] = forwardAllEvents ? 1 : 0;
            _boundEvents[name]++;
        };

        if(node.body && node.body.length) {
            let slots = {};
            let anchors = [];
            let defaultSlot = {
                name: 'default',
                type: 'slot'
            };
            defaultSlot.body = trimEmptyNodes(node.body.filter(n => {
                if(n.type == 'node' && n.name[0] == '^') {
                    anchors.push(n);
                    return false;
                }
                if(n.type != 'slot') return true;
                let rx = n.value.match(/^\#slot:(\S+)/);
                if(rx) n.name = rx[1];
                else n.name = 'default';
                assert(!slots[n], 'double slot');
                slots[n.name] = n;
            }));

            if(!slots.default && defaultSlot.body.length) slots.default = defaultSlot;

            Object.values(slots).forEach(slot => {
                if(!slot.body.length) return;
                assert(isSimpleName(slot.name));
                passOption.slots = true;

                let props;
                let rx = slot.value && slot.value.match(/^#slot\S*\s+(.*)$/s);
                if(rx) {
                    props = rx[1].trim().split(/\s*,\s*/);
                    assert(props.length);
                    props.forEach(n => {
                        assert(isSimpleName(n), 'Wrong prop for slot');
                    });
                }

                let contentNodes = trimEmptyNodes(slot.body);
                if(contentNodes.length == 1 && contentNodes[0].type == 'node' && contentNodes[0].name == 'slot') {
                    let parentSlot = contentNodes[0];
                    if(!parentSlot.body || !parentSlot.body.length) {
                        head.push(xNode('empty-slot', {
                            childName: slot.name,
                            parentName: parentSlot.elArg || 'default'
                        }, (ctx, n) => {
                            ctx.writeLine(`slots.${n.childName} = $option.slots?.${n.parentName};`);
                        }));
                        return;
                    }
                }

                if(props) this.require('apply');
                this.require('$cd');

                let block = this.buildBlock(slot, {inline: true});

                const template = xNode('template', {
                    body: block.tpl,
                    svg: block.svg,
                    inline: true
                });

                head.push(xNode('slot', {
                    name: slot.name,
                    template,
                    bind: block.source,
                    componentName,
                    props
                }, (ctx, n) => {
                    if(n.bind) {
                        ctx.write(true, `slots.${n.name} = $runtime.makeSlot($cd, ($cd, $context, $instance_${n.componentName}`);
                        if(n.props) ctx.write(`, props`);
                        ctx.write(`) => {\n`);
                        ctx.goIndent(() => {
                            if(n.bind) {
                                let push = n.props && ctx.inuse.apply;
                                ctx.write(true, `let $parentElement = `);
                                ctx.build(n.template);
                                ctx.write(`;\n`);
                                if(n.props) {
                                    ctx.writeLine(`let {${n.props.join(', ')}} = props;`);
                                    if(push) ctx.writeLine(`let push = () => ({${n.props.join(', ')}} = props, $$apply());`);
                                }
                                ctx.build(n.bind);
                                if(push) ctx.writeLine(`return {push, el: $parentElement};`);
                                else ctx.writeLine(`return $parentElement;`);
                            } else {
                                ctx.write(true, `return `);
                                ctx.build(n.template);
                                ctx.write(`;\n`);
                            }
                        });
                        ctx.writeLine(`});`);
                    } else {
                        ctx.write(true, `slots.${n.name} = $runtime.makeSlotStatic(() => `);
                        ctx.build(n.template);
                        ctx.write(`);\n`);
                    }
                }));
            });

            anchors.forEach(n => {
                passOption.anchor = true;
                let block = this.buildBlock({body: [n]}, {inline: true, oneElement: 'el', bindAttributes: true});
                let name = n.name.slice(1) || 'default';
                assert(isSimpleName(name));
                head.push(xNode('anchor', {
                    name,
                    source: block.source,
                    $cd: block.inuse.$cd
                }, (ctx, n) => {
                    ctx.writeLine(`anchor.${n.name} = (el) => {`);
                    ctx.goIndent(() => {
                        if(n.$cd) {
                            ctx.writeLine(`let $childCD = $cd.new();`);
                            ctx.writeLine(`{`);
                            ctx.goIndent(() => {
                                ctx.writeLine(`let $cd = $childCD;`);
                                ctx.build(n.source);
                            });
                            ctx.writeLine(`}`);
                            ctx.writeLine(`return () => {$childCD.destroy();}`);
                        } else {
                            ctx.build(n.source);
                        }
                    });
                    ctx.writeLine(`}`);
                }));
            });
        }

        propList = propList.filter(prop => {
            let name = prop.name;
            let value = prop.value;
            if(name == '@@') {
                forwardAllEvents = true;
                this.require('$events');
                return false;
            } else if(name == 'this') {
                dynamicComponent = unwrapExp(value);
                return false;
            }
            return true;
        });

        propList.forEach(prop => {
            let name = prop.name;
            let value = prop.value;
            if(name[0] == '#') {
                assert(!value, 'Wrong ref');
                name = name.substring(1);
                assert(isSimpleName(name), name);
                this.checkRootName(name);
                reference = name;
                return;
            } else if(name[0] == ':' || name.startsWith('bind:')) {
                let inner, outer;
                if(name[0] == ':') inner = name.substring(1);
                else inner = name.substring(5);
                if(value) outer = unwrapExp(value);
                else outer = inner;
                assert(isSimpleName(inner), `Wrong property: '${inner}'`);
                assert(detectExpressionType(outer) == 'identifier', 'Wrong bind name: ' + outer);
                this.detectDependency(outer);

                if(this.script.readOnly) this.warning('Conflict: read-only and 2-way binding to component');
                this.require('apply');
                staticProps = false;

                if(inner == outer) propsFn.push(`${inner}`);
                else propsFn.push(`${inner}: ${outer}`);
                propsSetter.push(`${inner}: ${outer} = ${outer}`);

                return;
            } else if(name[0] == '{') {
                value = name;
                name = unwrapExp(name);
                if(name.startsWith('...')) {
                    name = name.substring(3);
                    assert(detectExpressionType(name) == 'identifier', 'Wrong prop');
                    this.detectDependency(name);
                    staticProps = false;
                    propsFn.push(`...${name}`);
                    return;
                }            assert(detectExpressionType(name) == 'identifier', 'Wrong prop');
            } else if(name[0] == '@' || name.startsWith('on:')) {
                if(name.startsWith('@@')) {
                    let event = name.substring(2);
                    assert(!value);
                    passOption.events = true;
                    boundEvent(event);
                    this.require('$events');
                    head.push(xNode('forwardEvent', {
                        event
                    }, (ctx, data) => {
                        if(_boundEvents[data.event] > 1) ctx.writeLine(`$runtime.$$addEventForComponent(events, '${data.event}', $events.${data.event});`);
                        else ctx.writeLine(`events.${data.event} = $events.${data.event};`);
                    }));
                    return;
                }

                let {event, fn} = this.makeEventProp(prop);

                passOption.events = true;
                boundEvent(event);
                head.push(xNode('passEvent', {
                    event,
                    fn
                }, (ctx, n) => {
                    if(_boundEvents[n.event] > 1) {
                        ctx.write(true, `$runtime.$$addEventForComponent(events, '${n.event}', `);
                        ctx.build(n.fn);
                        ctx.write(`);\n`);
                    } else {
                        ctx.write(true, `events.${n.event} = `);
                        ctx.build(n.fn);
                        ctx.write(`;\n`);
                    }
                }));
                return;
            } else if(this.config.passClass && (name == 'class' || name.startsWith('class:'))) {
                let metaClass, args = name.split(':');
                if(args.length == 1) {
                    metaClass = '$$main';
                } else {
                    assert(args.length == 2);
                    metaClass = args[1];
                    assert(metaClass);
                }
                assert(value);

                const parsed = this.parseText(prop.value);
                this.detectDependency(parsed);
                let exp = parsed.result;
                $class.push(`${metaClass}: $$resolveClass(${exp})`);

                this.require('resolveClass');
                return;
            }

            let ip = this.inspectProp(prop);
            if(ip.name == ip.value) propsFn.push(`${ip.name}`);
            else propsFn.push(`${ip.name}: ${ip.value}`);
            if(!ip.static) staticProps = false;
        });


        if(forwardAllEvents || passOption.events) options.push('events');
        if(passOption.slots) options.push('slots');
        if(passOption.anchor) options.push('anchor');

        let result = xNode('component', {
            el: element.bindName(),
            componentName,
            head,
            options,
            $cd: '$cd',
            staticProps,
            props: propsFn,
            propsSetter,
            reference,
            $class
        }, (ctx, n) => {
            const $cd = n.$cd || '$cd';

            let head = ctx.subBuild(n.head);
            if(head) {
                ctx.addBlock(head);
                n.requireScope = true;
            }

            if(n.props.length && n.staticProps) {
                n.options.push(`props: {${n.props.join(', ')}}`);
                n.props = [];
            }

            ctx.write(true);
            if(n.reference) ctx.write(`${n.reference} = `);
            ctx.write(`$runtime.callComponent(${$cd}, $context, ${n.componentName}, ${n.el}, {${n.options.join(', ')}}`);

            let other = '';
            ctx.indent++;
            if(n.props.length) ctx.write(`,\n`, true, `() => ({${n.props.join(', ')}})`);
            else other = ', null';

            if(ctx.inuse.apply && n.props.length) {
                if(other) ctx.write(other);
                other = '';
                ctx.write(`,`);
                if(n.props.length) ctx.write('\n', true);
                if(this.config.immutable) ctx.write(`$runtime.keyComparator`);
                else ctx.write(`$runtime.$$compareDeep`);
            } else other += ', null';

            if(n.propsSetter.length) {
                if(other) ctx.write(other);
                other = '';
                ctx.write(`,\n`, true, `($$_value) => ({${n.propsSetter.join(', ')}} = $$_value)`);
            } else other += ', null';

            if(n.$class.length) {
                if(other) ctx.write(other);
                other = '';
                ctx.write(`,\n`, true, `() => ({${n.$class.join(', ')}})`);
            } else other += ', null';

            ctx.indent--;
            ctx.write(`);\n`);
        });

        if(!dynamicComponent) {
            return {bind: xNode('component-scope', {
                component: result
            }, (ctx, n) => {
                let r = ctx.subBuild(n.component);
                
                if(n.component.requireScope) {
                    ctx.writeLine('{');
                    ctx.goIndent(() => {
                        ctx.addBlock(r);
                    });
                    ctx.writeLine('}');
                } else ctx.addBlock(r);
            })};
        } else {
            this.detectDependency(dynamicComponent);

            result.componentName = '$ComponentConstructor';
            result.$cd = 'childCD';
            return {bind: xNode('dyn-component', {
                el: element.bindName(),
                exp: dynamicComponent,
                component: result
            }, (ctx, n) => {
                ctx.writeLine('{');
                ctx.goIndent(() => {
                    if(ctx.inuse.apply) {
                        ctx.writeLine(`let childCD, finalLabel = $runtime.getFinalLabel(${n.el});`);
                        ctx.writeLine(`$watch($cd, () => (${n.exp}), ($ComponentConstructor) => {`);
                        ctx.goIndent(() => {
                            ctx.writeLine(`if(childCD) {`);
                            ctx.goIndent(() => {
                                ctx.writeLine(`childCD.destroy();`);
                                ctx.writeLine(`$runtime.removeElementsBetween(${n.el}, finalLabel);`);
                            });
                            ctx.writeLine(`}`);
                            ctx.writeLine(`childCD = null;`);
                            ctx.writeLine(`if($ComponentConstructor) {`);
                            ctx.goIndent(() => {
                                ctx.writeLine(`childCD = $cd.new();`);
                                ctx.build(n.component);
                            });
                            ctx.writeLine(`}`);
                        });
                        ctx.writeLine(`});`);
                    } else {
                        ctx.writeLine(`let $ComponentConstructor = ${n.exp};`);
                        ctx.writeLine(`if($ComponentConstructor) {`);
                        ctx.goIndent(() => {
                            ctx.writeLine(`let childCD = $cd;`);
                            ctx.build(n.component);
                        });
                        ctx.writeLine(`}`);
                    }
                });
                ctx.writeLine('}');
            })};
        }
    }

    function bindProp(prop, node, element) {
        let name, arg;
        if(prop.name[0] == '@' || prop.name.startsWith('on:')) name = 'event';
        if(!name && prop.name[0] == ':') {
            name = 'bind';
            arg = prop.name.substring(1);
        }
        if(!name && prop.name[0] == '*') {
            let rx = prop.name.match(/^\*\{.*\}$/);
            if(rx) {
                assert(prop.value == null, 'wrong binding: ' + prop.content);
                name = 'use';
                prop.value = prop.name.substring(1);
            } else {
                name = 'use';
                arg = prop.name.substring(1);
            }
        }
        if(prop.content.startsWith('{*')) {
            const pe = this.parseText(prop.content);
            assert(pe.parts[0].type == 'js');
            let exp = pe.parts[0].value;
            if(!exp.endsWith(';')) exp += ';';
            return {bind: xNode('block', {body: [
                replaceElementKeyword(exp, () => element.bindName())
            ]})};
        }
        if(!name && prop.value == null) {
            let rx = prop.name.match(/^\{(.*)\}$/);
            if(rx) {
                name = rx[1];
                if(name.startsWith('...')) {
                    // spread operator
                    name = name.substring(3);
                    assert(detectExpressionType(name) == 'identifier');
                    this.detectDependency(name);
                    return node.spreading.push(`...${name}`);
                } else {
                    prop.value = prop.name;
                }
            }
        }
        if(!name) {
            let r = prop.name.match(/^(\w+)\:(.*)$/);
            if(r) {
                name = r[1];
                arg = r[2];
            } else name = prop.name;
        }

        const isExpression = s => s[0] == '{' && last(s) == '}';

        const getExpression = () => {
            let exp = prop.value.match(/^\{(.*)\}$/)[1];
            assert(exp, prop.content);
            return exp;
        };

        if(name[0] == '#') {
            let target = name.substring(1);
            assert(isSimpleName(target), target);
            this.checkRootName(target);
            return {bind: `${target}=${element.bindName()};`};
        } else if(name == 'event') {
            if(prop.name.startsWith('@@')) {
                assert(!prop.value);
                this.require('$cd', '$events');
                if(prop.name == '@@') {
                    return {bind: xNode('forwardAllEvents', {
                        el: element.bindName()
                    }, (ctx, data) => {
                        ctx.writeLine(`for(let event in $events)`);
                        ctx.goIndent(() => {
                            ctx.writeLine(`$runtime.addEvent($cd, ${data.el}, event, $events[event]);`);
                        });
                    })};
                }

                return {bind: xNode('forwardEvent', {
                    event: prop.name.substring(2),
                    el: element.bindName()
                }, (ctx, n) => {
                    ctx.writeLine(`$events.${n.event} && $runtime.addEvent($cd, ${n.el}, '${n.event}', $events.${n.event});`);
                })};
            }

            let {event, fn} = this.makeEventProp(prop, () => element.bindName());

            this.require('$cd');

            return {bind: xNode('bindEvent', {
                event,
                fn,
                el: element.bindName()
            }, (ctx, n) => {
                ctx.write(true, `$runtime.addEvent($cd, ${n.el}, '${n.event}', `);
                ctx.build(n.fn);
                ctx.write(`);\n`);
            })};
        } else if(name == 'bind') {
            if(this.script.readOnly) {
                this.warning('script read-only conflicts with bind: ' + node.openTag);
                return;
            }

            this.require('apply', '$cd');
            let exp;
            arg = arg.split(/[\:\|]/);
            let attr = arg.shift();
            assert(attr, prop.content);

            if(prop.value) exp = getExpression();
            else {
                if(arg.length) exp = arg.pop();
                else exp = attr;
            }
            let inputType = null;
            if(node.name == 'input') {
                node.attributes.some(a => {
                    if(a.name == 'type') {
                        inputType = a.value;
                        return true;
                    }
                });
            }

            assert(['value', 'checked', 'valueAsNumber', 'valueAsDate', 'selectedIndex'].includes(attr), 'Not supported: ' + prop.content);
            assert(arg.length == 0);
            assert(detectExpressionType(exp) == 'identifier', 'Wrong bind name: ' + prop.content);
            if(attr == 'value' && ['number', 'range'].includes(inputType)) attr = 'valueAsNumber';
            this.detectDependency(exp);

            let argName = 'a' + (this.uniqIndex++);

            return {bind: xNode('bindInput', {
                el: element.bindName()
            }, (ctx, n) => {
                ctx.writeLine(`$runtime.bindInput($cd, ${n.el}, '${attr}', () => ${exp}, ${argName} => {${exp} = ${argName}; $$apply();});`);
            })};
        } else if(name == 'style' && arg) {
            let styleName = toCamelCase(arg);
            let exp;
            if(prop.value) {
                if(isExpression(prop.value)) {
                    exp = getExpression();
                    this.detectDependency(exp);
                } else {
                    if(prop.value.includes('{')) {
                        const parsed = this.parseText(prop.value);
                        this.detectDependency(parsed);
                        exp = parsed.result;
                    } else {
                        return {bind: xNode('staticStyle', {
                            el: element.bindName(),
                            name: styleName,
                            value: prop.value
                        }, (ctx, n) => {
                            ctx.writeLine(`${n.el}.style.${n.name} = \`${this.Q(n.value)}\`;`);
                        })};
                    }
                }
            } else {
                exp = styleName;
            }

            let hasElement = exp.includes('$element');
            return {bind: xNode('block', {
                scope: hasElement,
                body: [xNode('bindStyle', {
                    el: element.bindName(),
                    styleName,
                    exp,
                    hasElement
                }, (ctx, n) => {
                    if(n.hasElement) ctx.writeLine(`let $element=${n.el};`);
                    if(ctx.inuse.apply) {
                        ctx.writeLine(`$runtime.bindStyle($cd, ${n.el}, '${n.styleName}', () => (${n.exp}));`);
                    } else {
                        ctx.writeLine(`${n.el}.style.${n.styleName} = ${n.exp};`);
                    }
                })]
            })};
        } else if(name == 'use') {
            if(arg) {
                this.require('$cd');
                assert(isSimpleName(arg), 'Wrong name: ' + arg);
                this.checkRootName(arg);
                let args = prop.value ? `, () => [${getExpression()}]` : '';
                this.detectDependency(args);
                return {bind: xNode('action', {
                    name: arg,
                    args,
                    el: element.bindName()
                }, (ctx, n) => {
                    if(ctx.inuse.apply && n.args) {
                        ctx.writeLine(`$runtime.bindAction($cd, ${n.el}, ${n.name}${n.args}, $runtime.__bindActionSubscribe);`);
                    } else {
                        ctx.writeLine(`$runtime.bindAction($cd, ${n.el}, ${n.name}${n.args});`);
                    }
                })}
            }
            let exp = getExpression();
            this.detectDependency(exp);
            let hasElement = exp.includes('$element');
            return {bind: xNode('inline-action', {
                exp,
                el: hasElement && element.bindName(),
                element,
                hasElement
            }, (ctx, n) => {
                ctx.writeLine(`$tick(() => {`);
                ctx.goIndent(() => {
                    if(n.hasElement) ctx.writeLine(`let $element=${n.el};`);
                    ctx.writeLine(n.exp);
                    if(ctx.inuse.apply) ctx.writeLine('$$apply();');
                });
                ctx.writeLine(`});`);
            })}
        } else if(name == 'class') {
            if(node.__skipClass) return {};
            node.__skipClass = true;

            let props = node.attributes.filter(a => a.name == 'class' || a.name.startsWith('class:'));

            let compound = false;
            props.forEach(prop => {
                let classes = [];
                if(prop.name == 'class') {
                    if(!prop.value) return;
                    let parsed = this.parseText(prop.value);
                    for(let p of parsed.parts) {
                        if(p.type == 'text') {
                            classes = classes.concat(p.value.trim().split(/\s+/));
                        } else if(p.type == 'exp') compound = true;
                    }
                } else {
                    classes = [prop.name.slice(6)];
                }
                return this.config.passClass && classes.some(name => {
                    if(this.css.isExternalClass(name)) compound=true;
                    else if(name[0] == '$') {
                        this.css.markAsExternal(name.substring(1));
                        compound = true;
                    }
                });
            });

            if(compound) {
                let defaultHash = '';
                if(node.classes.has(this.css.id)) defaultHash = this.css.id;
                node.classes.clear();
                if(this.config.passClass) this.require('resolveClass');
                let exp = props.map(prop => {
                    if(prop.name == 'class') {
                        return this.parseText(prop.value).result;
                    } else {
                        let className = prop.name.slice(6);
                        assert(className);
                        let exp = prop.value ? unwrapExp(prop.value) : className;
                        this.detectDependency(exp);
                        return `(${exp}) ? \`${this.Q(className)}\` : ''`;
                    }
                }).join(') + \' \' + (');
                const bind = xNode('compound-class', {
                    el: element.bindName(),
                    exp,
                    defaultHash
                }, (ctx, n) => {
                    if(ctx.inuse.resolveClass) {
                        let base = n.defaultHash ? `,'${n.defaultHash}'` : '';
                        if(ctx.inuse.apply) {
                            ctx.writeLine(`$watchReadOnly($cd, () => $$resolveClass((${n.exp})${base}), value => $runtime.setClassToElement(${n.el}, value));`);
                        } else {
                            ctx.writeLine(`$runtime.setClassToElement(${n.el}, $$resolveClass((${n.exp})${base}));`);
                        }
                    } else {
                        let base = n.defaultHash ? ` + ' ${n.defaultHash}'` : '';
                        if(ctx.inuse.apply) {
                            ctx.writeLine(`$watchReadOnly($cd, () => ${n.exp}${base}, value => $runtime.setClassToElement(${n.el}, value));`);
                        } else {
                            ctx.writeLine(`$runtime.setClassToElement(${n.el}, ${n.exp}${base});`);
                        }
                    }
                });
                return {bind};
            } else {
                let bind = xNode('block');
                props.forEach(prop => {
                    if(prop.name == 'class') {
                        prop.value && prop.value.trim().split(/\s+/).forEach(name => {
                            node.classes.add(name);
                        });
                    } else {
                        let className = prop.name.slice(6);
                        assert(className);
                        let exp = prop.value ? unwrapExp(prop.value) : className;
                        this.detectDependency(exp);
                        bind.push(xNode('bindClass', {
                            el: element.bindName(),
                            className,
                            exp,
                            $element: exp.includes('$element')
                        }, (ctx, n) => {
                            if(n.$element) {
                                ctx.writeLine(`{`);
                                ctx.indent++;
                                ctx.writeLine(`let $element = ${n.el};`);
                            }
                            if(ctx.inuse.apply) {
                                ctx.writeLine(`$runtime.bindClass($cd, ${n.el}, () => !!(${n.exp}), '${n.className}');`);
                            } else {
                                ctx.writeLine(`(${n.exp}) && $runtime.addClass(${n.el}, '${n.className}');`);
                            }
                            if(n.$element) {
                                ctx.indent--;
                                ctx.writeLine(`}`);
                            }
                        }));
                    }
                });
                return {bind: bind.body.length ? bind : null};
            }
        } else if(name[0] == '^') {
            this.require('$cd');
            return {bindTail: xNode('bindAnchor', {
                name: name.slice(1) || 'default',
                el: element.bindName()
            }, (ctx, n) => {
                ctx.writeLine(`$runtime.attachAnchor($option, $cd, '${n.name}', ${n.el});`);
            })};
        } else {
            if(prop.value && prop.value.indexOf('{') >= 0) {
                const parsed = this.parseText(prop.value);
                this.detectDependency(parsed);
                let exp = parsed.result;
                let hasElement = prop.value.includes('$element');

                if(node.spreading) return node.spreading.push(`${name}: ${exp}`);

                const propList = {
                    hidden: true,
                    checked: true,
                    value: true,
                    disabled: true,
                    selected: true,
                    innerHTML: true,
                    innerText: true,
                    src: true,
                    readonly: 'readOnly'
                };

                return {bind: xNode('block', {
                    scope: hasElement,
                    body: [
                        xNode('bindAttribute', {
                            name,
                            exp,
                            hasElement,
                            el: element.bindName()
                        }, (ctx, data) => {
                            if(data.hasElement) ctx.writeLine(`let $element=${data.el};`);
                            if(propList[name]) {
                                let propName = propList[name] === true ? name : propList[name];
                                if(ctx.inuse.apply) {
                                    ctx.writeLine(`$watchReadOnly($cd, () => (${data.exp}), (value) => {${data.el}.${propName} = value;});`);
                                } else {
                                    ctx.writeLine(`${data.el}.${propName} = ${data.exp};`);
                                }
                            } else {
                                if(ctx.inuse.apply) {
                                    ctx.writeLine(`$runtime.bindAttribute($cd, ${data.el}, '${data.name}', () => (${data.exp}));`);
                                } else {
                                    ctx.writeLine(`$runtime.bindAttributeBase(${data.el}, '${data.name}', ${data.exp});`);
                                }
                            }
                        })
                    ]
                })};
            }

            if(node.spreading) return node.spreading.push(`${name}: \`${this.Q(prop.value)}\``);

            element.attributes.push({
                name: prop.name,
                value: prop.value
            });
        }
    }

    function makeifBlock(data, element) {
        let r = data.value.match(/^#if (.*)$/s);
        let exp = r[1];
        assert(exp, 'Wrong binding: ' + data.value);
        this.detectDependency(exp);
        this.require('$cd');

        let mainBlock, elseBlock, mainTpl, elseTpl;

        if(data.bodyMain) {
            mainBlock = this.buildBlock({body: data.bodyMain}, {protectLastTag: true, inline: true});
            elseBlock = this.buildBlock(data, {protectLastTag: true, inline: true});

            elseTpl = xNode('template', {
                inline: true,
                body: elseBlock.tpl,
                svg: elseBlock.svg
            });
        } else {
            mainBlock = this.buildBlock(data, {protectLastTag: true, inline: true});
        }

        mainTpl = xNode('template', {
            inline: true,
            body: mainBlock.tpl,
            svg: mainBlock.svg
        });

        const source = xNode('if:bind', {
            el: element.bindName(),
            exp,
            mainTpl,
            mainBlock: mainBlock.source,
            elseTpl,
            elseBlock: elseBlock && elseBlock.source
        },
        (ctx, data) => {
            ctx.writeLine(`$runtime.$$ifBlock($cd, ${data.el}, () => !!(${data.exp}),`);
            ctx.indent++;
            ctx.writeIndent();
            ctx.build(data.mainTpl);
            ctx.write(',\n');
            ctx.writeIndent();
            if(data.mainBlock) {
                ctx.build(xNode('function', {
                    inline: true,
                    arrow: true,
                    args: ['$cd', '$parentElement'],
                    body: [data.mainBlock]
                }));
            } else ctx.write('$runtime.noop');
            if(data.elseTpl) {
                ctx.write(',\n');
                ctx.writeIndent();
                ctx.build(data.elseTpl);
                ctx.write(',\n');
                ctx.writeIndent();
                if(data.elseBlock) {
                    ctx.build(xNode('function', {
                        inline: true,
                        arrow: true,
                        args: ['$cd', '$parentElement'],
                        body: [data.elseBlock]
                    }));
                } else ctx.write('$runtime.noop');
            }
            ctx.indent--;
            ctx.write(');\n');
        });

        return {source};
    }

    function makeEachBlock(data, option) {

        let nodeItems = trimEmptyNodes(data.body);
        if(!nodeItems.length) nodeItems = [data.body[0]];

        let itemData = this.buildBlock({body: nodeItems}, {protectLastTag: true, inline: true});

        // #each items as item, index (key)
        let rx = data.value.match(/^#each\s+(.+)\s+as\s+(.+)$/s);
        assert(rx, `Wrong #each expression '${data.value}'`);
        let arrayName = rx[1];
        let right = rx[2];
        let keyName;

        // get keyName
        rx = right.match(/^(.*)\s*\(\s*([^\(\)]+)\s*\)\s*$/s);
        if(rx) {
            right = rx[1];
            keyName = rx[2];
        }
        right = right.trim();

        let itemName, indexName, bind0 = null;
        if(right[0] == '{') {
            rx = right.match(/^(\{[^}]+\})(.*)$/s);
            assert(rx, `Wrong #each expression '${data.value}'`);
            let exp = rx[1], keywords;

            try {
                keywords = acorn.parse(`(${exp} = $$item)`, {sourceType: 'module', ecmaVersion: 12}).body[0].expression.left.properties.map(p => p.key.name);
            } catch (e) {
                throw new Error('Wrong destructuring in each: ' + data.value);
            }

            itemName = '$$item';
            indexName = rx[2].trim();
            if(indexName[0] == ',') indexName = indexName.substring(1).trim();
            indexName = indexName || '$index';

            bind0 = xNode('each:unwrap', {
                exp,
                keywords
            }, (ctx, n) => {
                ctx.writeLine(`let ${n.keywords.join(', ')};`);
                ctx.writeLine(`$runtime.prefixPush($ctx.cd, () => (${n.exp} = $$item));`);
            });
        } else {
            rx = right.trim().split(/\s*\,\s*/);
            assert(rx.length <= 2, `Wrong #each expression '${data.value}'`);
            itemName = rx[0];
            indexName = rx[1] || '$index';
        }
        assert(isSimpleName(itemName), `Wrong name '${itemName}'`);
        assert(isSimpleName(indexName), `Wrong name '${indexName}'`);

        let keyFunction = null;
        if(keyName == itemName) {
            keyName = null;
            keyFunction = 'noop';
        }
        if(keyName) assert(detectExpressionType(keyName) == 'identifier', `Wrong key '${keyName}'`);

        if(keyName) {
            this.detectDependency(keyName);
            keyFunction = xNode('function', {
                inline: true,
                arrow: true,
                args: [itemName, 'i'],
                body: [xNode('block', {
                    index: indexName,
                    key: keyName
                }, (ctx, data) => {
                    if(data.key == data.index) ctx.writeLine('return i;');
                    else ctx.writeLine(`return ${data.key};`);
                })]
            });
        }
        let bind;
        if(itemData.source) {
            bind = xNode('function', {
                inline: true,
                arrow: true,
                args: ['$ctx', '$parentElement', itemName, indexName],
                body: [
                    `let $cd = $ctx.cd;`,
                    bind0,
                    itemData.source,
                    xNode(ctx => {
                        ctx.writeLine(`$ctx.rebind = function(_${indexName}, _${itemName}) {`);
                        ctx.indent++;
                        ctx.writeLine(`${indexName} = _${indexName};`);
                        ctx.writeLine(`${itemName} = _${itemName};`);
                        ctx.indent--;
                        ctx.writeLine(`};`);
                    })
                ]
            });
        } else {
            bind = xNode('function', {
                inline: true,
                arrow: true,
                args: ['$ctx'],
                body: [`$ctx.rebind = $runtime.noop;`]
            });
        }

        const template = xNode('template', {
            inline: true,
            body: itemData.tpl,
            svg: itemData.svg
        });

        this.require('$cd');
        const source = xNode('each', {
            keyFunction,
            template,
            bind
        }, (ctx, data) => {
            ctx.writeLine(`$runtime.$$eachBlock($cd, ${option.elName}, ${option.onlyChild?1:0}, () => (${arrayName}),`);
            ctx.indent++;
            ctx.writeIndent();
            if(data.keyFunction === 'noop') ctx.write('$runtime.noop');
            else if(data.keyFunction) ctx.build(data.keyFunction);
            else ctx.write('$runtime.eachDefaultKey');
            ctx.write(`,\n`);
            ctx.writeIndent();
            ctx.build(data.template);
            ctx.write(`,\n`);
            ctx.writeIndent();
            ctx.build(data.bind);
            ctx.write(`);\n`);
            ctx.indent--;
        });
        this.detectDependency(arrayName);

        return {source};
    }

    function makeHtmlBlock(exp, label) {
        this.detectDependency(exp);
        this.require('$cd');
        return xNode('block', {
            el: label.bindName(),
            exp
        }, (ctx, n) => {
            ctx.writeLine(`$runtime.$$htmlBlock($cd, ${n.el}, () => (${n.exp}));\n`);
        });
    }

    function makeAwaitBlock(node, element) {
        let valueForThen, exp;

        let rx = node.value.match(/^#await\s+(.+)\s+then\s+(\S+)\s*$/s);
        if(rx) {
            assert(!node.parts.then);
            node.parts.then = node.parts.main;
            node.parts.main = null;
            exp = rx[1];
            valueForThen = rx[2];
        } else {
            rx = node.value.match(/^#await\s+(.+)\s*$/s);
            assert(rx);
            exp = rx[1].trim();
        }

        let keywords = extractKeywords(exp);

        let parts = [null, null, null];
        if(node.parts.main && node.parts.main.length) {
            parts[0] = this.buildBlock({body: node.parts.main}, {protectLastTag: true, inlineFunction: true});
        }
        if(node.parts.then && node.parts.then.length) {
            let args = [];
            if(valueForThen) {
                assert(isSimpleName(valueForThen));
                args.push(valueForThen);
            } else {
                let rx = node.parts.thenValue.match(/^[^ ]+\s+(.*)$/s);
                if(rx) {
                    assert(isSimpleName(rx[1]));
                    args.push(rx[1]);
                }
            }
            parts[1] = this.buildBlock({body: node.parts.then}, {protectLastTag: true, inlineFunction: true, args});
        }
        if(node.parts.catch && node.parts.catch.length) {
            let args = [];
            let rx = node.parts.catchValue.match(/^[^ ]+\s+(.*)$/s);
            if(rx) {
                assert(isSimpleName(rx[1]));
                args.push(rx[1]);
            }
            parts[2] = this.buildBlock({body: node.parts.catch}, {protectLastTag: true, inlineFunction: true, args});
        }

        this.detectDependency(exp);
        if(this.script.readOnly) this.warning('script read-only conflicts with await');
        this.require('apply', '$cd');

        return xNode('await', {
            el: element.bindName(),
            exp,
            parts,
            keywords
        }, (ctx, n) => {
            ctx.writeIndent();
            ctx.write(`$runtime.$$awaitBlock($cd, ${n.el}, () => [${n.keywords.join(', ')}], () => ${n.exp}, $$apply,\n`);
            ctx.goIndent(() => {
                n.parts.forEach((part, index) => {
                    if(part) {
                        let {source, tpl, svg} = part;
                        ctx.writeIndent();
                        if(source) {
                            ctx.build(source);
                            ctx.write(',\n');
                            ctx.writeIndent();
                        } else ctx.write(`$runtime.noop, `);
                        ctx.build(xNode('template', {body: tpl, svg, inline: true}));
                        ctx.write(index == 2 ? '\n' : ',\n');
                    } else {
                        ctx.writeLine(`null, null` + (index == 2 ? '' : ','));
                    }            });
            });
            ctx.writeLine(');');
        });
    }

    function attachSlot(slotName, label, node) {
        let props = [];
        if(node.attributes && node.attributes.length) {
            node.attributes.forEach(prop => {
                let name = prop.name;
                let value = prop.value;
                if(name[0] == '{') {
                    assert(value == null);
                    value = name;
                    name = unwrapExp(name);
                }            assert(value != null);
                assert(isSimpleName(name));
                if(value[0] == '{') {
                    value = unwrapExp(value);
                    this.detectDependency(value);

                    props.push(xNode('prop', {
                        name,
                        value,
                        dyn: true
                    }, (ctx, n) => {
                        if(this.inuse.apply) ctx.write(`${n.name}: () => (${n.value})`);
                        else ctx.write(`${n.name}: (${n.value})`);
                    }));
                } else {
                    props.push(xNode('static-prop', {
                        name,
                        value
                    }, (ctx, n) => {
                        ctx.write(`${n.name}: \`${this.Q(n.value)}\``);
                    }));
                }
            });
        }
        let placeholder;
        if(node.body && node.body.length) {
            let block = this.buildBlock(node, {inline: true});

            const tpl = xNode('template', {
                name: '$parentElement',
                body: block.tpl,
                svg: block.svg
            });

            placeholder = xNode('placeholder', {
                el: label.bindName(),
                body: block.source,
                tpl
            }, (ctx, n) => {
                ctx.build(n.tpl);
                ctx.build(n.body);
                ctx.writeLine(`$runtime.insertAfter(${n.el}, $parentElement);`);
            });
        }

        this.require('$component', '$cd', '$context');

        return xNode('slot', {
            name: slotName,
            el: label.bindName(),
            props,
            placeholder
        }, (ctx, n) => {
            let hasDynProps = n.props.some(p => p.dyn);
            let base = 'Base';
            if(hasDynProps && ctx.inuse.apply) {
                assert(!ctx._ctx.script.readOnly);
                base = '';
            }
            ctx.write(true, `$runtime.attachSlot${base}($context, $cd, '${n.name}', ${n.el}, `);
            if(n.props.length) {
                ctx.write(`{\n`);
                ctx.goIndent(() => {
                    for(let i=0; i < n.props.length; i++) {
                        let prop = n.props[i];
                        ctx.writeIndent();
                        ctx.build(prop);
                        if(i + 1 < n.props.length) ctx.write(',');
                        ctx.write('\n');
                    }
                });
                ctx.write(true, `}`);
            } else {
                ctx.write(`null`);
            }
            if(n.placeholder) {
                ctx.write(', () => {\n');
                ctx.goIndent(() => {
                    ctx.build(n.placeholder);
                });
                ctx.write(true, '}');
            } else if(hasDynProps && !this.config.immutable) ctx.write(`, 0`);
            if(hasDynProps && !this.config.immutable) ctx.write(`, $runtime.$$compareDeep`);
            ctx.write(');\n');
        });
    }

    function makeFragment(node) {
        let rx = node.value.match(/#fragment\:(\S+)(.*)$/s);
        assert(rx);
        let name = rx[1], external = false;
        assert(isSimpleName(name));
        let props = rx[2] ? rx[2].trim() : null;
        if(props) {
            props = props.split(/[\s,]+/).filter(p => {
                if(p == 'export') {
                    external = true;
                    return false;
                }
                return true;
            });
        }

        let block;
        if(node.body && node.body.length) block = this.buildBlock({body: trimEmptyNodes(node.body)}, {inline: true, context: 'fragment'});
        else {
            this.warning(`Empty fragment: '${node.value}'`);
            return xNode('empty-fragment', {name}, (ctx, n) => {
                ctx.writeLine(`function $fragment_${n.name}() {};`);
            });
        }

        return xNode('fragment', {
            name,
            props,
            external,
            source: block.source,
            template: xNode('template', {
                name: '$parentElement',
                body: block.tpl,
                svg: block.svg
            })
        }, (ctx, n) => {
            ctx.write(true, `function $fragment_${n.name}($cd, $$label, $props, $events, $$fragmentSlot) {\n`);
            ctx.indent++;

            if(n.props?.length) {
                if(ctx.inuse.apply) {
                    ctx.writeLine('let ' + n.props.join(', ') + ';');
                    ctx.writeLine(`$runtime.unwrapProps($cd, $props, ($$) => ({${n.props.join(', ')}} = $$));`);
                } else {
                    ctx.writeLine('let ' + n.props.join(', ') + ';');
                    ctx.writeLine(`$props && ({${n.props.join(', ')}} = ($runtime.isFunction($props) ? $props() : $props));`);
                }
            }

            ctx.build(n.template);
            ctx.build(n.source);
            ctx.writeLine(`$runtime.insertAfter($$label, $parentElement);`);

            ctx.indent--;
            ctx.writeLine('}');
            if(n.external) ctx.writeLine(`$runtime.exportFragment($component, '${n.name}', $fragment_${n.name});`);
        });
    }


    function parseAttibutes(attributes) {
        let props = [];
        let events = [];
        let forwardAllEvents;
        let staticProps = true;

        attributes.forEach(prop => {
            let name = prop.name;

            if(name[0] == '@' || name.startsWith('on:')) {
                if(name.startsWith('@@')) {
                    this.require('$events');
                    if(name == '@@') forwardAllEvents = true;
                    else {
                        name = name.substring(2);
                        events.push({
                            name,
                            callback: `$events?.${name}`
                        });
                    }
                    return;
                }

                let {event, fn} = this.makeEventProp(prop);
                events.push({name: event, fn});
            } else {
                let ip = this.inspectProp(prop);
                props.push(ip);
                if(!ip.static) staticProps = false;
            }
        });

        return {props, events, forwardAllEvents, staticProps};
    }


    function attachFragment(node, element) {
        let name = node.elArg;
        assert(isSimpleName(name));

        let slotBlock = null;

        if(node.body?.length) slotBlock = this.buildBlock({body: trimEmptyNodes(node.body)}, {inline: true});

        let {props, events, forwardAllEvents, staticProps} = parseAttibutes.call(this, node.attributes);
        this.require('$cd');

        let slot = null;
        if(slotBlock) {
            let template = xNode('template', {
                name: '$parentElement',
                body: slotBlock.tpl,
                svg: slotBlock.svg,
                inline: !slotBlock.source
            });

            slot = {
                source: slotBlock.source,
                template
            };
        }

        return xNode('call-fragment', {
            forwardAllEvents,
            el: element.bindName(),
            name,
            events,
            props,
            slot,
            staticProps
        }, (ctx, n) => {
            ctx.write(true, `$fragment_${n.name}($cd, ${n.el}`);
            let missed = '';
            ctx.indent++;

            if(n.props.length) {
                ctx.write(',\n', true);

                const writeProps = () => ctx.write('{' + n.props.map(p => p.name == p.value ? p.name : `${p.name}: ${p.value}`).join(', ') + '}');

                if(n.staticProps) writeProps();
                else {
                    ctx.write(`() => (`);
                    writeProps();
                    ctx.write(`)`);
                }
            } else missed = ', 0';

            if(n.forwardAllEvents) {
                if(n.events.length) this.warning(`Fragment: mixing binding and forwarding is not supported: '${node.openTag}'`);
                ctx.write(missed, ', $events');
                missed = '';
            } else if(n.events.length) {
                ctx.write(missed, ',\n', true, '{');
                missed = '';

                n.events.forEach((e, i) => {
                    if(i) ctx.write(', ');
                    if(e.callback) {
                        if(e.name == e.callback) ctx.write(e.name);
                        ctx.write(`${e.name}: ${e.callback}`);
                    } else {
                        assert(e.fn);
                        ctx.write(`${e.name}: `);
                        ctx.build(e.fn);
                    }
                });
                ctx.write('}');
            } else missed += ', 0';

            if(n.slot) {
                ctx.write(missed, ',\n');
                missed = '';
                if(n.slot.source) {
                    ctx.writeLine(`($cd, $$label) => {`);
                    ctx.goIndent(() => {
                        ctx.build(n.slot.template);
                        ctx.build(n.slot.source);
                        ctx.writeLine(`$runtime.insertAfter($$label, $parentElement);`);
                    });
                    ctx.write(true, `}`);
                } else {
                    ctx.write(true, `($cd, $$label) => $runtime.insertAfter($$label, `);
                    ctx.build(n.slot.template);
                    ctx.write(`)\n`);
                }
            }

            ctx.indent--;
            if(n.props.length || n.events.length || n.slot) ctx.write(true, ');\n');
            else ctx.write(');\n');

        });
    }

    function attachFragmentSlot(label) {
        this.require('$cd');

        return xNode('fragment-slot', {
            el: label.bindName()
        }, (ctx, n) => {
            ctx.writeLine(`$$fragmentSlot?.($cd, ${n.el});`);
        });
    }

    function attchExportedFragment(node, label, componentName) {
        this.require('$cd');

        let data = {
            name: node.elArg,
            componentName,
            label: label.bindName(),
        };

        let body = trimEmptyNodes(node.body || []);
        if(body.length) {
            let block = this.buildBlock({body}, {inline: true});
            assert(!block.svg, 'SVG is not supported for exported fragment');
            data.source = block.source;
            data.template = xNode('template', {
                raw: true,
                body: block.tpl
            });
        }

        let pa = parseAttibutes.call(this, node.attributes);
        data.props = pa.props;
        data.events = pa.events;
        data.forwardAllEvents = pa.forwardAllEvents;
        data.staticProps = pa.staticProps;

        return xNode('attach-exported-fragment', data, (ctx, n) => {
            ctx.write(true, `$runtime.attchExportedFragment($cd, $instance_${n.componentName}, '${n.name}', ${n.label}`);
            let missed = '';
            ctx.indent++;

            if(n.props.length) {
                ctx.write(',\n', true);

                const writeProps = () => ctx.write('{' + n.props.map(p => p.name == p.value ? p.name : `${p.name}: ${p.value}`).join(', ') + '}');

                if(n.staticProps) writeProps();
                else {
                    ctx.write(`$runtime.observeProps(`);
                    if(this.config.immutable) ctx.write(`$runtime.keyComparator`);
                    else ctx.write(`$runtime.$$compareDeep`);
                    ctx.write(', () => (');
                    writeProps();
                    ctx.write('))');
                }
            } else missed = ', 0';

            if(n.forwardAllEvents) {
                if(n.events.length) this.warning(`Fragment: mixing binding and forwarding is not supported: '${node.openTag}'`);
                ctx.write(missed, ', $events');
                missed = '';
            } else if(n.events.length) {
                ctx.write(missed, ',\n', true, '{');
                missed = '';

                n.events.forEach((e, i) => {
                    if(i) ctx.write(', ');
                    if(e.callback) {
                        if(e.name == e.callback) ctx.write(e.name);
                        ctx.write(`${e.name}: ${e.callback}`);
                    } else {
                        assert(e.fn);
                        ctx.write(`${e.name}: `);
                        ctx.build(e.fn);
                    }
                });
                ctx.write('}');
            } else missed += ', 0';

            if(n.template) {
                if(missed) ctx.write(missed, `, \``);
                else ctx.write(`,\n`, true, `\``);
                ctx.build(n.template);
                if(n.source) {
                    ctx.write(`\`, ($cd, $parentElement) => {\n`);
                    ctx.indent++;
                    ctx.build(n.source);
                    ctx.indent--;
                    ctx.writeLine(`});`);
                } else {
                    ctx.write(`\`);\n`);
                }
            } else ctx.write(');\n');
            ctx.indent--;
        });
    }

    function attachHead(n) {
        if(n.elArg == 'window' || n.elArg == 'body') {
            let name = 'el' + (this.uniqIndex++);
            let block = this.buildBlock({body: [n]}, {malinaElement: true, inline: true, oneElement: name, bindAttributes: true});
            if(block.source) {
                return xNode('block', {
                    name,
                    target: n.elArg,
                    source: block.source
                }, (ctx, n) => {
                    if(n.target == 'window') ctx.writeLine(`let ${n.name} = window;`);
                    else ctx.writeLine(`let ${n.name} = document.body;`);
                    ctx.build(n.source);
                });
            }
        } else if(n.elArg == 'head') {
            let title;
            let body = (n.body || []).filter(n => {
                if(n.type == 'text') return false;
                if(n.name == 'title') {
                    title = n;
                    return false;
                }
                return true;
            });

            let d = {};
            if(title?.body?.[0]) {
                assert(title.body[0].type == 'text');
                let r = this.parseText(title.body[0].value);
                if(r.parts.some(i => i.type == 'exp')) {
                    d.dynTitle = r.result;
                } else {
                    d.title = r.result;
                }
            }
            if(body.length) {
                let block = this.buildBlock({body}, {inline: true});
                d.source = block.source;
                d.template = xNode('template', {
                    name: '$parentElement',
                    body: block.tpl
                });
                this.require('$onDestroy');
            }

            return xNode('malina:head', d, (ctx, n) => {
                if(n.title != null) ctx.writeLine(`document.title = ${n.title};`);
                if(n.dynTitle) {
                    if(ctx.inuse.apply) ctx.writeLine(`$watchReadOnly($cd, () => (${n.dynTitle}), (value) => {document.title = value;});`);
                    else ctx.writeLine(`document.title = ${n.dynTitle};`);
                }

                if(n.template) {
                    ctx.writeLine(`{`);
                    ctx.indent++;
                    ctx.build(n.template);
                    ctx.build(n.source);
                    ctx.writeLine(`let a=$parentElement.firstChild, b=$parentElement.lastChild;`);
                    ctx.writeLine(`$onDestroy(() => {$runtime.$$removeElements(a, b)});`);
                    ctx.writeLine(`document.head.appendChild($parentElement);`);
                    ctx.indent--;
                    ctx.writeLine(`}`);
                }
            });
        } else throw 'Wrong tag';
    }

    function inspectProp(prop) {
        let {name, value} = prop;
        if(name[0] == '{') {
            assert(!prop.value);
            value = name;
            name = unwrapExp(name);
        }

        assert(name.match(/^([\w\$_][\w\d\$_\.\-]*)$/), `Wrong property: '${name}'`);
        name = toCamelCase(name);
        if(name == 'class') name = '_class';

        let rawValue, statical = false;

        if(value && value.includes('{')) {
            const pe = this.parseText(value);
            this.detectDependency(pe);

            if(pe.parts.length == 1 && pe.parts[0].type == 'exp') {
                let v = pe.parts[0].value;

                if(isNumber(v)) {
                    value = v;
                    rawValue = Number(v);
                    statical = true;
                } else if(v == 'true' || v == 'false') {
                    value = v;
                    rawValue = v == 'true';
                    statical = true;
                } else if(v == 'null') {
                    value = 'null';
                    rawValue = null;
                    statical = true;
                }
            }

            if(!statical) value = pe.result;
        } else if(value) {
            rawValue = value;
            value = '`' + this.Q(value) + '`';
            statical = true;
        } else {
            rawValue = true;
            value = 'true';
            statical = true;
        }

        return {name, value, rawValue, static: statical};
    }

    function attachPortal(node) {
        let body = trimEmptyNodes(node.body || []);
        if(!body.length) return;
        let block = this.buildBlock({body}, {inline: true});

        let mount = node.attributes.find(a => a.name == 'mount')?.value;
        if(mount) mount = unwrapExp(mount);

        this.require('$cd');

        return xNode('portal', {
            mount,
            source: block.source,
            template: xNode('template', {
                name: '$parentElement',
                body: block.tpl,
                svg: block.svg
            })
        }, (ctx, n) => {
            let label = n.mount || 'document.body';
            ctx.writeLine('{');
            ctx.indent++;
            ctx.build(n.template);
            ctx.build(n.source);
            ctx.writeLine(`let $$first = $parentElement[$runtime.firstChild];`);
            ctx.writeLine(`let $$last = $parentElement.lastChild;`);
            ctx.writeLine(`$runtime.cd_onDestroy($cd, () => $runtime.$$removeElements($$first, $$last));`);
            ctx.writeLine(`$tick(() => ${label}.appendChild($parentElement));`);
            ctx.indent--;
            ctx.writeLine('}');
        });
    }

    function makeEventProp(prop, requireElement) {
        const assert$1 = x => {
            assert(x, `Wrong event prop: ${prop.content}`);
        };

        let name = prop.name;
        if(name.startsWith('@@')) {
            assert$1(!prop.value);
            return {forward: true, name};
        }
        if(name.startsWith('on:')) name = name.substring(3);
        else {
            assert$1(name[0] == '@');
            name = name.substring(1);
        }

        let event = '';
        let modList = [], _mod = '';
        let handler = '', exp, func;
        let step = 0;
        for(let a of name) {
            if(a == '|') {
                assert$1(step <= 1);
                step = 1;
                if(_mod) modList.push(_mod);
                _mod = '';
                continue;
            }
            if(a == ':') {
                assert$1(step < 2);
                step = 2;
                continue;
            }
            if(step == 0) event += a;
            else if(step == 1) _mod += a;
            else if(step == 2) handler += a;
        }
        if(_mod) modList.push(_mod);

        if(prop.value) {
            assert$1(!handler);
            exp = unwrapExp(prop.value);
            exp = replaceElementKeyword(exp, requireElement);
        } else if(!handler) handler = event;

        this.detectDependency(exp || handler);

        if(exp) {
            let type = detectExpressionType(exp);
            if(type == 'identifier') {
                handler = exp;
                exp = null;
            } else if(type == 'function') {
                func = exp;
                exp = null;
            }    }

        // modifiers

        let keyEvent = ['keydown', 'keypress', 'keyup'].includes(event);
        let keyCodes = {
            enter: 'Enter',
            tab: 'Tab',
            esc: 'Escape',
            escape: 'Escape',
            space: ' ',
            up: 'ArrowUp',
            down: 'ArrowDown',
            left: 'ArrowLeft',
            right: 'ArrowRight'
        };

        let mods = [];
        let preventInserted;
        modList.forEach(opt => {
            if(opt == 'preventDefault' || opt == 'prevent') {
                if(preventInserted) return;
                mods.push('$event.preventDefault();');
                preventInserted = true;
                return;
            } else if(opt == 'stopPropagation' || opt == 'stop') {
                mods.push('$event.stopPropagation();');
                return;
            }
            if(keyEvent) {
                if(opt === 'delete') {
                    mods.push(`if($event.key != 'Backspace' && $event.key != 'Delete') return;`);
                    return;
                }
                let keyCode = keyCodes[opt];
                if(keyCode) {
                    mods.push(`if($event.key != '${keyCode}') return;`);
                    return;
                }
            }

            if(opt == 'ctrl') {mods.push(`if(!$event.ctrlKey) return;`); return;}
            if(opt == 'alt') {mods.push(`if(!$event.altKey) return;`); return;}
            if(opt == 'shift') {mods.push(`if(!$event.shiftKey) return;`); return;}
            if(opt == 'meta') {mods.push(`if(!$event.metaKey) return;`); return;}

            throw 'Wrong modificator: ' + opt;
        });
        mods = mods.join(' ');

        if(!this.script.readOnly) this.require('apply');

        // this.checkRootName(handler);

        let fn = xNode('event-callback', {
            exp,
            handlerName: handler,
            func,
            mods
        }, (ctx, n) => {
            if(n.handlerName && !ctx.inuse.apply && !n.mods) return ctx.write(n.handlerName);
            ctx.write(`($event) => { `);
            if(n.mods) ctx.write(n.mods, ' ');
            if(n.handlerName) ctx.write(`${n.handlerName}($event);`);
            else if(n.exp) {
                if(last(n.exp) != ';') n.exp += ';';
                ctx.write(`${n.exp}`);
            } else if(n.func) ctx.write(`(${n.func})($event);`);
            if(ctx.inuse.apply) ctx.write(` $$apply();`);
            ctx.write(`}`);
        });

        return {event, fn};
    }

    const version = '0.6.51';


    async function compile(source, config = {}) {
        if(config.localConfig !== false && config.path) config = loadConfig(config.path, config);

        config = Object.assign({
            name: 'widget',
            exportDefault: true,
            inlineTemplate: false,
            hideLabel: false,
            compact: true,
            autoSubscribe: true,
            cssGenId: null,
            plugins: [],
            debug: true,
            css: true,
            passClass: true,
            immutable: false
        }, config);

        const ctx = {
            source,
            config,
            uniqIndex: 0,
            warning: config.warning || (w => console.warn('!', w.message || w)),
            
            Q: config.inlineTemplate ? Q2 : Q,
            buildBlock,
            bindProp,
            makeEachBlock,
            makeifBlock,
            makeComponent,
            makeHtmlBlock,
            parseText,
            makeAwaitBlock,
            attachSlot,
            makeFragment,
            attachFragmentSlot,
            attachFragment,
            attchExportedFragment,
            attachHead,
            inspectProp,
            attachPortal,
            makeEventProp,
            checkRootName: checkRootName,

            inuse: {},
            require: function() {
                for(let name of arguments) {
                    let deps = true;
                    if(name == '$props:no-deps') {name = '$props'; deps = false;}                if(name == 'apply' && ctx.script.readOnly) name = 'blankApply';
                    if(ctx.inuse[name] == null) ctx.inuse[name] = 0;
                    ctx.inuse[name]++;
                    if(!deps) continue;
                    if(name == '$attributes') ctx.require('$props');
                    if(name == '$props' && !ctx.script.readOnly) ctx.require('apply', '$cd');
                    if(name == 'apply' && !ctx.script.readOnly) ctx.require('$cd');
                    if(name == '$cd') ctx.require('$component');
                    if(name == '$onDestroy') ctx.require('$component');
                    if(name == '$onMount') ctx.require('$component');
                }
            },
            detectDependency,

            DOM: null,
            parseHTML: parse,
            compactDOM,

            script: null,
            scriptNodes: null,
            js_parse: parse$1,
            js_transform: transform,
            js_build: build,

            styleNodes: null,
            css: null,
            processCSS,

            runtime: {},
            result: null,
            buildRuntime,

            module: {
                top: xNode('block'),
                head: xNode('block'),
                code: xNode('block'),
                body: xNode('block')
            },

            xBuild: node => {
                let w = new xWriter(ctx);
                w.build(node);
                return w.toString();
            }
        };

        await hook(ctx, 'dom:before');
        ctx.parseHTML();
        await hook(ctx, 'dom');
        ctx.scriptNodes = [];
        ctx.styleNodes = [];
        ctx.DOM.body = ctx.DOM.body.filter(n => {
            if(n.type == 'script') {
                ctx.scriptNodes.push(n);
                return false;
            }
            if(n.type == 'style') {
                ctx.styleNodes.push(n);
                return false;
            }
            return true;
        });
        await hook(ctx, 'dom:check');
        assert(ctx.scriptNodes.length <= 1, 'Only one script section');
        await hook(ctx, 'dom:compact');
        if(config.compact) ctx.compactDOM();
        await hook(ctx, 'dom:after');

        await hook(ctx, 'js:before');
        ctx.js_parse();
        await hook(ctx, 'js');
        ctx.js_transform();
        await hook(ctx, 'js:after');

        await hook(ctx, 'css:before');
        ctx.processCSS();
        if(ctx.css.active()) ctx.css.process(ctx.DOM);
        await hook(ctx, 'css');

        await hook(ctx, 'runtime:before');
        ctx.buildRuntime();
        await hook(ctx, 'runtime');


        await hook(ctx, 'build:before');
        const result = ctx.result = xNode('block');
        result.push(`import * as $runtime from 'malinajs/runtime.js';`);
        result.push(`import { $watch, $watchReadOnly, $tick } from 'malinajs/runtime.js';`);
        if(config.hideLabel) {
            result.push(`import { $$htmlToFragmentClean as $$htmlToFragment } from 'malinajs/runtime.js';`);
        } else {
            result.push(`import { $$htmlToFragment } from 'malinajs/runtime.js';`);
        }
        result.push(ctx.module.top);

        result.push(xNode('block', {
            name: config.name,
            body: [ctx.module.head, ctx.module.code, ctx.module.body]
        }, (ctx, n) => {
            ctx.writeIndent();
            if(config.exportDefault) ctx.write('export default ');
            else ctx.write(`const ${n.name} = `);

            let component = xNode('function', {
                args: ['$option'],
                inline: true,
                arrow: true,
                body: n.body
            });

            if(ctx.inuse.apply) {
                ctx.write('$runtime.makeComponent(');
                component.args.push('$$apply');
                ctx.build(component);
                ctx.write(', $runtime.$base);\n');
            } else if(ctx.inuse.$cd || ctx.inuse.$component || ctx.inuse.$context || ctx.inuse.blankApply) {
                if(ctx.inuse.blankApply) {
                    component.body[0].body.unshift(xNode('block', (ctx) => {
                        ctx.writeLine('let $$apply = $runtime.noop;');
                    }));
                }

                ctx.write('$runtime.makeComponent(');
                ctx.build(component);
                ctx.write(', $runtime.$readOnlyBase);\n');
            } else {
                ctx.write('($element, $option={}) => {\n');
                ctx.goIndent(() => {
                    ctx.inuse.$insertElementByOption = true;
                    ctx.build(xNode('block', {body: n.body}));
                });
                ctx.write('}');
            }
        }));

        ctx.result = ctx.xBuild(result);

        await hook(ctx, 'build');
        return ctx;
    }

    async function hook(ctx, name) {
        for(let i=0; i<ctx.config.plugins.length; i++) {
            const fn = ctx.config.plugins[i][name];
            if(fn) await fn(ctx);
        }
    }

    function detectDependency(data) {
        const check = name => {
            for(let k of ['$props', '$attributes', '$emit', '$context']) {
                if(name.includes(k)) this.require(k);
            }
        };

        if(typeof data == 'string') {
            check(data);
        } else {
            assert(data.parts);

            for(let p of data.parts) {
                if(p.type == 'exp' || p.type == 'js') check(p.value);
            }
        }
    }


    function loadConfig(filename, option) {
        const fs = require('fs');
        let result = Object.assign({}, option);
        if(result.plugins) result.plugins = result.plugins.slice();

        let localConfig;
        let parts = filename.split(/[\/\\]/);
        for(let i=parts.length-1;i>1;i--) {
            let local = parts.slice(0, i).join('/') + '/malina.config.js';
            if(fs.existsSync(local)) {
                localConfig = local;
                break;
            }
        }

        if(localConfig) {
            const confFn = require(localConfig);
            if(typeof(confFn) == 'function') result = confFn(result, filename);
            else result = confFn;
        }
        if(!result.path) result.path = filename;
        if(!result.name) result.name = filename.match(/([^/\\]+)\.\w+$/)[1];

        return result;
    }

    exports.compile = compile;
    exports.version = version;

    Object.defineProperty(exports, '__esModule', { value: true });

})));
//# sourceMappingURL=malina.js.map
