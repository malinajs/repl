(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('acorn'), require('astring'), require('css-tree')) :
    typeof define === 'function' && define.amd ? define(['exports', 'acorn', 'astring', 'css-tree'], factory) :
    (global = global || self, factory(global.malina = {}, global.acorn, global.astring, global['css-tree']));
}(this, (function (exports, acorn, astring, csstree) { 'use strict';

    acorn = acorn && Object.prototype.hasOwnProperty.call(acorn, 'default') ? acorn['default'] : acorn;
    astring = astring && Object.prototype.hasOwnProperty.call(astring, 'default') ? astring['default'] : astring;
    csstree = csstree && Object.prototype.hasOwnProperty.call(csstree, 'default') ? csstree['default'] : csstree;

    function assert(x, info) {
        if(!x) throw info;
    }

    function Q(s) {
        return s.replace(/`/g, '\\`');
    }

    function parse(source) {
        let index = 0;

        const readNext = () => {
            assert(index < source.length, 'EOF');
            return source[index++];
        };

        const readTag = () => {
            let start = index;
            let a = readNext();
            assert(a === '<', 'Tag error');
            let q = null;
            let begin = true;
            let name = '';
            while(true) {
                a = readNext();
                if(q) {
                    if(a != q) continue;
                    q = null;
                    continue
                }
                if(a === '"') {
                    q = '"';
                    continue;
                }
                if(a === '\'') {
                    q = '\'';
                    continue;
                }
                if(a === '<') {
                    let e = new Error('Wrong tag');
                    e.details = source.substring(start, index);
                    throw e;
                }
                if(a === '>') {
                    const voidTags = ['area', 'base', 'br', 'col', 'embed', 'hr', 'img', 'input', 'link', 'meta', 'param', 'source', 'track', 'wbr'];
                    // source[index-2] == '/'
                    let closedTag = voidTags.indexOf(name) >= 0;
                    return {
                        type: 'node',
                        name: name,
                        openTag: source.substring(start, index),
                        start: start,
                        end: index,
                        closedTag: closedTag
                    }
                }
                if(begin) {
                    if(a.match(/[\da-zA-Z]/)) {
                        name += a;
                        continue;
                    } else begin = false;
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
            let q;
            while(true) {
                let a = readNext();

                if(q) {
                    if(a != q) continue;
                    q = null;
                    continue
                }
                if(a == '"' || a == '\'' || a == '`') {
                    q = a;
                    continue;
                }

                if(a == '{') throw 'Error binding: ' + source.substring(start, index);
                if(a != '}') continue;

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
                        assert(name === parent.name, 'Wrong close-tag: ' + parent.name + ' - ' + name);
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
                    }                tag.attributes = parseElement(tag.openTag);

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


        return root;
    }

    function parseElement(source) {
        // TODO: parse '/>' at the end
        let len = source.length - 1;
        assert(source[0] === '<');
        assert(source[len] === '>');
        if(source[len - 1] == '/') len--;

        let index = 1;
        let start = 1;
        let eq;
        let result = [];
        let first = true;

        const next = () => {
            assert(index < source.length, 'EOF');
            return source[index++];
        };
        const flush = (shift) => {
            if(start >= index + shift) return;
            if(first) {
                first = false;
                return;
            }
            let prop = {
                content: source.substring(start, index + shift)
            };
            if(eq) {
                prop.name = source.substring(start, eq - 1);
                prop.value = source.substring(eq, index + shift).match(/^['"]?([\s\S]*?)['"]?$/)[1];
                eq = null;
            } else prop.name = prop.content;
            result.push(prop);
        };

        let bind = false;

        while(index < len) {
            let a = next();

            if(a === '"' || a === "'") {
                while(a != next());
                continue;
            }

            if(bind) {
                bind = a != '}';
                continue;
            }

            if(a == '{') {
                bind = true;
                continue;
            }

            if(a.match(/^\s$/)) {
                flush(-1);
                start = index;
                continue;
            }
            if(a == '=' && !eq) {
                eq = index;
            }
        }
        flush(0);
        return result;
    }

    function parseText(source) {
        let i = 0;
        let step = 0;
        let text = '';
        let exp = '';
        let result = [];
        let q;
        let len = source.length;
        while(i < len) {
            let a = source[i++];
            if(step == 1) {
                if(q) {
                    if(a === q) q = null;
                    exp += a;
                    continue;
                }
                if(a === '"' || a === "'") {
                    q = a;
                    exp += a;
                    continue;
                }
                if(a === '}') {
                    step = 0;
                    exp = exp.trim();
                    if(!exp) throw 'Wrong expression';
                    result.push('(' + exp + ')');
                    exp = '';
                    continue;
                }
                exp += a;
                continue;
            }
            if(a === '{') {
                if(text) {
                    result.push('`' + Q(text) + '`');
                    text = '';
                }
                step = 1;
                continue;
            }
            text += a;
        }
        if(text) result.push('`' + Q(text) + '`');
        assert(step == 0, 'Wrong expression: ' + source);
        return result.join('+');
    }

    function transformJS(code, option={}) {
        let result = {
            watchers: [],
            imports: [],
            props: []
        };
        var ast;
        if(code) {
            ast = acorn.parse(code, {sourceType: 'module'});
        } else {
            ast = {
                body: [],
                sourceType: "module",
                type: "Program"
            };
        }

        const funcTypes = {
            FunctionDeclaration: 1,
            FunctionExpression: 1,
            ArrowFunctionExpression: 1
        };

        const fix = (node) => {
            if(funcTypes[node.type] && node.body.body && node.body.body.length) {
                node.body.body.unshift({
                    type: 'ExpressionStatement',
                    expression: {
                        callee: {
                            type: 'Identifier',
                            name: '$$apply'
                        },
                        type: 'CallExpression'
                    }
                });
            } else if(node.type === 'ArrowFunctionExpression') {
                if(node.body.type !== 'BlockStatement') {
                    node.body = {
                        type: 'BlockStatement',
                        body: [{
                            type: 'ReturnStatement',
                            argument: node.body
                        }]
                    };
                    fix(node);
                }
            }
        };

        const transform = function(node, skipTop) {
            if(node.type === 'CallExpression' && node.callee && node.callee.property && ['map', 'forEach', 'filter'].indexOf(node.callee.property.name) >=0) {
                node.arguments.forEach(n => {
                    transform(n, true);
                });
            } else {
                for(let key in node) {
                    let value = node[key];
                    if(typeof value === 'object') {
                        if(Array.isArray(value)) {
                            value.forEach(n => transform(n));
                        } else if(value && value.type) {
                            transform(value);
                        }
                    }
                }
            }
            if(!skipTop) fix(node);
        };
        
        transform(ast.body);


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

        function makeWatch(n) {
            function assertExpression(n) {
                if(n.type == 'Identifier') return;
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
                    target = code.substring(ex.left.start, ex.left.end);
                } else throw 'Error';
                assertExpression(ex.right);
                const exp = code.substring(ex.right.start, ex.right.end);
                result.watchers.push(`$watch($cd, () => (${exp}), ($value) => {${target}=$value;}, {cmp: $$compareArray});`);
            } else if(n.body.expression.type == 'SequenceExpression') {
                const ex = n.body.expression.expressions;
                const handler = ex[ex.length - 1];
                if(['ArrowFunctionExpression', "FunctionExpression"].indexOf(handler.type) < 0) throw 'Error function';
                let callback = code.substring(handler.start, handler.end);

                if(ex.length == 2) {
                    assertExpression(ex[0]);
                    let exp = code.substring(ex[0].start, ex[0].end);
                    result.watchers.push(`$watch($cd, () => (${exp}), ${callback});`);
                } else if(ex.length > 2) {
                    for(let i = 0;i<ex.length-1;i++) assertExpression(ex[i]);
                    let exp = code.substring(ex[0].start, ex[ex.length-2].end);
                    result.watchers.push(`$watch($cd, () => [${exp}], ($args) => { (${callback}).apply(null, $args); }, {cmp: $$compareArray});`);
                } else throw 'Error';
            } else throw 'Error';
        }

        let imports = [];
        let resultBody = [];
        let rootVariables = {};
        ast.body.forEach(n => {
            if(n.type !== 'VariableDeclaration') return;
            n.declarations.forEach(i => rootVariables[i.id.name] = true);
        });

        ast.body.forEach(n => {
            if(n.type == 'ImportDeclaration') {
                imports.push(n);
                n.specifiers.forEach(s => {
                    if(s.type != 'ImportDefaultSpecifier') return;
                    if(s.local.type != 'Identifier') return;
                    result.imports.push(s.local.name);
                });
                return;
            } else if(n.type == 'ExportNamedDeclaration') {
                assert(n.declaration.type == 'VariableDeclaration', 'Wrong export');
                n.declaration.declarations.forEach(d => {
                    assert(d.type == 'VariableDeclarator', 'Wrong export');
                    result.props.push(d.id.name);
                });
                resultBody.push(n.declaration);
                return;
            }

            if(n.type == 'FunctionDeclaration' && n.id.name == 'onMount') result.onMount = true;
            if(n.type == 'FunctionDeclaration' && n.id.name == 'onDestroy') result.onDestroy = true;
            if(n.type == 'LabeledStatement' && n.label.name == '$') {
                try {
                    makeWatch(n);
                    return;
                } catch (e) {
                    throw new Error(e + ': ' + code.substring(n.start, n.end));
                }
            }
            resultBody.push(n);
        });

        resultBody.push({
            type: 'ExpressionStatement',
            expression: {
                callee: {
                    type: 'Identifier',
                    name: '$$runtime'
                },
                type: 'CallExpression'
            }
        });

        resultBody.unshift({
            type: 'IfStatement',
            test: {
                type: 'BinaryExpression',
                left: {type: 'Identifier', name: '$option'},
                operator: '==',
                right: {type: 'Literal', value: null}
            },
            consequent: {
                type: 'ExpressionStatement',
                expression: {
                    type: 'AssignmentExpression',
                    operator: '=',
                    left: {type: 'Identifier', name: '$option'},
                    right: {type: 'ObjectExpression', properties: []}
                }
            }
        });
        let widgetFunc = {
            body: {
                type: 'BlockStatement',
                body: resultBody
            },
            id: {
                type: 'Identifier"',
                name: option.name
            },
            params: [{
                type: 'Identifier',
                name: '$element'
            }, {
                type: 'Identifier',
                name: '$option'
            }],
            type: 'FunctionDeclaration'
        };

        if(option.exportDefault) {
            widgetFunc = {
                type: 'ExportDefaultDeclaration',
                declaration: widgetFunc
            };
        }
        ast.body = [widgetFunc];
        ast.body.unshift.apply(ast.body, imports);

        result.code = astring.generate(ast);
        return result;
    }

    function makeComponent(node, makeEl) {
        let props = parseElement(node.openTag);
        let binds = [];
        props.forEach(prop => {
            assert(prop.value, 'Empty property');
            if(prop.value.indexOf('{') >= 0) {
                let exp = parseText(prop.value);
                binds.push(`
                if('${prop.name}' in $component) {
                    $watch($cd, () => (${exp}), (value) => {$component.${prop.name} = value}, {cmp: $$compareDeep, ro: true});
                } else console.error("Component ${node.name} doesn't have prop ${prop.name}");
            `);
            } else {
                let value = prop.value.match(/^['"]?(.*?)['"]?$/)[1];
                binds.push(`
                if('${prop.name}' in $component) {
                    $component.${prop.name} = \`${Q(value)}\`;
                } else console.error("Component ${node.name} doesn't have prop ${prop.name}");
            `);
            }
        });

        return {bind:`{
        let $component = ${node.name}(${makeEl()}, {afterElement: true, noMount: true});
        if($component) {
            if($component.destroy) $cd.d($component.destroy);
            ${binds.join('\n')};
            if($component.onMount) $cd.once($component.onMount);
        }
    }`};
    }

    function bindProp(prop, makeEl, node) {
        let arg, name;
        if(prop.name[0] == '@') {
            arg = prop.name.substring(1);
            name = 'on';
        } else {
            let r = prop.name.match(/^(\w+)\:(.*)$/);
            if(r) {
                name = r[1];
                arg = r[2];
            } else name = prop.name;
        }

        function getExpression() {
            let exp = prop.value.match(/^\{(.*)\}$/)[1];
            assert(exp, prop.content);
            return exp;
        }

        if(name == 'on') {
            let exp = getExpression();
            let mod = '', opt = arg.split('|');
            let event = opt[0];
            opt.slice(1).forEach(opt => {
                if(opt == 'preventDefault') mod += `$event.preventDefault();`;
                else if(opt == 'enter') mod += `if($event.keyCode != 13) return; $event.preventDefault();`;
                else if(opt == 'escape') mod += `if($event.keyCode != 27) return; $event.preventDefault();`;
                else throw 'Wrong modificator: ' + opt;
            });
            assert(event, prop.content);
            return {bind:`{
            let $element=${makeEl()};
            $cd.ev($element, "${event}", ($event) => { ${mod} $$apply(); ${Q(exp)}});
            }`};
        } else if(name == 'bind') {
            let exp = getExpression();
            let attr = arg;
            assert(attr, prop.content);
            if(attr === 'value') {
                return {bind: `{
                    let $element=${makeEl()};
                    $cd.ev($element, 'input', () => { ${exp}=$element.value; $$apply(); });
                    $watchReadOnly($cd, () => (${exp}), (value) => { if(value != $element.value) $element.value = value; });
                }`};
            } else if(attr == 'checked') {
                return {bind: `{
                    let $element=${makeEl()};
                    $cd.ev($element, 'input', () => { ${exp}=$element.checked; $$apply(); });
                    $watchReadOnly($cd, () => !!(${exp}), (value) => { if(value != $element.checked) $element.checked = value; });
                }`};
            } else throw 'Not supported: ' + prop.content;
        } else if(name == 'class' && arg) {
            let exp = getExpression();
            let className = arg;
            assert(className, prop.content);
            return {bind: `{
                let $element = ${makeEl()};
                $watchReadOnly($cd, () => !!(${exp}), (value) => { if(value) $element.classList.add("${className}"); else $element.classList.remove("${className}"); });
            }`};
        } else if(name == 'use') {
            if(arg) {
                let args = prop.value?getExpression():'';
                let code = `$cd.once(() => {
                let useObject = ${arg}(${makeEl()}${args?', '+args:''});\n if(useObject) {`;
                if(args) code += `
                if(useObject.update) {
                    let w = $watch($cd, () => [${args}], (args) => {useObject.update.apply(useObject, args);}, {cmp: $$compareArray});
                    w.value = w.fn();
                }`;
                code += `if(useObject.destroy) $cd.d(useObject.destroy);}});`;
                return {bind: code};
            }
            let exp = getExpression();
            return {bind: `{
            let $element=${makeEl()};
            $cd.once(() => { $$apply(); ${exp}; });}`};
        } else {
            if(prop.value && prop.value.indexOf('{') >= 0) {
                let exp = parseText(prop.value);
                if(['hidden','checked','value','disabled','selected'].indexOf(name) >= 0) {
                    return {bind: `{
                    let $element=${makeEl()};
                    $watchReadOnly($cd, () => (${exp}), (value) => {$element.${name} = value;});
                }`};
                } else {
                    let suffix = this.css?`+' ${this.css.id}'`:'';
                    return {bind: `{
                    let $element=${makeEl()};
                    $watchReadOnly($cd, () => (${exp})${suffix}, (value) => {
                        if(value) $element.setAttribute('${name}', value);
                        else $element.removeAttribute('${name}');
                    });
                }`};
                }
            }
            if(name == 'class' && node.scopedClass) {
                let classList = prop.value.trim();
                if(classList) classList += ' ';
                classList += this.css.id;

                return {
                    prop: `class="${classList}"`
                }
            }
            return {
                prop: prop.content
            }
        }
    }

    function $ChangeDetector(parent) {
        if(parent) this.root = parent.root;
        else {
            this.root = this;
            this.onceList = [];
        }
        this.children = [];
        this.watchers = [];
        this.destroyList = [];
    }
    Object.assign($ChangeDetector.prototype, {
        new: function() {
            var cd = new $ChangeDetector(this);
            this.children.push(cd);
            return cd;
        },
        ev: function(el, event, callback) {
            el.addEventListener(event, callback);
            this.d(() => {
                el.removeEventListener(event, callback);
            });
        },
        d: function(fn) {
            this.destroyList.push(fn);
        },
        destroy: function() {
            this.watchers.length = 0;
            this.destroyList.forEach(fn => {
                try {
                    fn();
                } catch (e) {
                    console.error(e);
                }
            });
            this.destroyList.length = 0;
            this.children.forEach(cd => {
                cd.destroy();
            });
            this.children.length = 0;
        },
        once: function(fn) {
            this.root.onceList.push(fn);
        }
    });

    let uniqIndex = 0;


    function makeifBlock(data, topElementName) {
        let source = [];

        let r = data.value.match(/^#if (.*)$/);
        let exp = r[1];
        assert(exp, 'Wrong binding: ' + data.value);

        let ifBlockName = 'ifBlock' + (uniqIndex++);
        source.push(`function ${ifBlockName}($cd, $parentElement) {`);
        let mainBlock, elseBlock;
        if(data.bodyMain) {
            mainBlock = this.buildBlock({body: data.bodyMain});
            elseBlock = this.buildBlock(data);
            source.push(`
            let elsefr = $$htmlToFragment(\`${Q(elseBlock.tpl)}\`, true);
            ${elseBlock.source}
        `);
        } else {
            mainBlock = this.buildBlock(data);
        }
        source.push(`
        let mainfr = $$htmlToFragment(\`${Q(mainBlock.tpl)}\`, true);
        ${mainBlock.source}
    `);

        if(elseBlock) {
            source.push(`
            $$ifBlock($cd, $parentElement, () => !!(${exp}), mainfr, ${mainBlock.name}, elsefr, ${elseBlock.name});
        `);
        } else {
            source.push(`
            $$ifBlock($cd, $parentElement, () => !!(${exp}), mainfr, ${mainBlock.name});
        `);
        }
        source.push(`};\n ${ifBlockName}($cd, ${topElementName});`);
        
        return {
            source: source.join('\n')
        }
    }

    let uniqIndex$1 = 0;


    function makeEachBlock(data, topElementName) {
        let source = [];

        let nodeItems = data.body;
        while(nodeItems.length) {
            let n = nodeItems[0];
            if(n.type == 'text' && !n.value.trim()) nodeItems.shift();
            else break;
        }
        while(nodeItems.length) {
            let n = nodeItems[nodeItems.length - 1];
            if(n.type == 'text' && !n.value.trim()) nodeItems.pop();
            else break;
        }
        if(!nodeItems.length) nodeItems = [data.body[0]];

        let itemData = this.buildBlock({body: nodeItems});

        let rx = data.value.match(/^#each\s+(\S+)\s+as\s+(\w+)\s*$/);
        assert(rx, 'Wrong #each expression');
        let arrayName = rx[1];
        let itemName = rx[2];

        let eachBlockName = 'eachBlock' + (uniqIndex$1++);
        source.push(`
        function ${eachBlockName} ($cd, top) {

            function bind($ctx, $template, ${itemName}, $index) {
                ${itemData.source};
                ${itemData.name}($ctx.cd, $template);
                $ctx.reindex = function(i) { $index = i; };
            };

            let parentNode = top.parentNode;
            let itemTemplate = $$htmlToFragment(\`${Q(itemData.tpl)}\`);

            let mapping = new Map();
            $watch($cd, () => (${arrayName}), (array) => {
                if(!array || !Array.isArray(array)) array = [];
                let prevNode = top;
                let newMapping = new Map();

                if(mapping.size) {
                    let arrayAsSet = new Set();
                    for(let i=0;i<array.length;i++) {
                        arrayAsSet.add(array[i]);
                    }
                    mapping.forEach((ctx, item) => {
                        if(arrayAsSet.has(item)) return;
                        $$removeElements(ctx.first, ctx.last);
                        ctx.cd.destroy();
                        $$removeItem($cd.children, ctx.cd);
                    });
                    arrayAsSet.clear();
                }

                let i, item, next_ctx, el, ctx;
                for(i=0;i<array.length;i++) {
                    item = array[i];
                    if(next_ctx) {
                        ctx = next_ctx;
                        next_ctx = null;
                    } else ctx = mapping.get(item);
                    if(ctx) {
                        if(prevNode.nextSibling != ctx.first) {
                            let insert = true;

                ` + (nodeItems.length==1?`
                            if(i + 1 < array.length && prevNode.nextSibling) {
                                next_ctx = mapping.get(array[i + 1]);
                                if(prevNode.nextSibling.nextSibling === next_ctx.first) {
                                    parentNode.replaceChild(ctx.first, prevNode.nextSibling);
                                    insert = false;
                                }
                            }
                `:``) + `
                            if(insert) {
                                let insertBefore = prevNode.nextSibling;
                                let next, el = ctx.first;
                                while(el) {
                                    next = el.nextSibling;
                                    parentNode.insertBefore(el, insertBefore);
                                    if(el == ctx.last) break;
                                    el = next;
                                }
                            }
                        }
                        ctx.reindex(i);
                    } else {
                        let tpl = itemTemplate.cloneNode(true);
                        let childCD = $cd.new();
                        ctx = {cd: childCD};
                        bind(ctx, tpl, item, i);
                        ctx.first = tpl.firstChild;
                        ctx.last = tpl.lastChild;
                        parentNode.insertBefore(tpl, prevNode.nextSibling);
                    }
                    prevNode = ctx.last;
                    newMapping.set(item, ctx);
                };
                mapping.clear();
                mapping = newMapping;
            }, {cmp: $$compareArray});
        }
        ${eachBlockName}($cd, ${topElementName});
    `);

        return {
            source: source.join('\n')
        }
    }

    function makeHtmlBlock(exp, topElementName) {
        return `$$htmlBlock($cd, ${topElementName}, () => (${exp}));\n`;
    }

    let uniqIndex$2 = 0;


    function buildRuntime(data, script, css, config) {
        let runtime = [`
        function $$apply() {
            if($$apply._p) return;
            if($$apply.planned) return;
            $$apply.planned = true;
            setTimeout(() => {
                $$apply.planned = false;
                $$apply.go();
            }, 1);
        };
        return (function() {
            let $cd = new $ChangeDetector();

            let $component = {};
            $component.destroy = () => {
                $cd.destroy();
            };

            $$apply.go = () => {
                $$apply._p = true;
                try {
                    $digest($cd, () => $$apply._p = false);
                } finally {
                    $$apply._p = false;
                }
            };
    `];

        const ctx = {
            config,
            script,
            css,
            buildBlock,
            bindProp,
            makeEachBlock,
            makeifBlock,
            makeComponent,
            makeHtmlBlock
        };

        if(css) css.process(data);

        let bb = ctx.buildBlock(data);

        let rootTemplate = bb.tpl;
        runtime.push(bb.source);
        runtime.push(`
        const rootTemplate = \`${Q(rootTemplate)}\`;
        if($option.afterElement) {
            let tag = $element;
            $element = $$htmlToFragment(rootTemplate);
            ${bb.name}($cd, $element);
            tag.parentNode.insertBefore($element, tag.nextSibling);
        } else {
            $element.innerHTML = rootTemplate;
            ${bb.name}($cd, $element);
        }
    `);
        if(script.onMount) runtime.push(`
        if($option.noMount) $component.onMount = onMount;
        else $cd.once(onMount);
    `);
        if(script.onDestroy) runtime.push(`$cd.d(onDestroy);`);
        if(script.watchers.length) {
            runtime.push('$cd.once(() => {\n' + script.watchers.join('\n') + '\n$$apply();\n});');
        }
        if(script.props.length) {
            script.props.forEach(prop => {
                let valueName = prop=='value'?'_value':'value';
                runtime.push(`
                Object.defineProperty($component, '${prop}', {
                    get: function() { return ${prop}; },
                    set: function(${valueName}) {
                        if(${prop} === ${valueName}) return;
                        ${prop} = ${valueName};
                        $$apply();
                    }
                });
            `);
            });
        }
        if(css) runtime.push(`
        if(!document.head.querySelector('style#${css.id}')) {
            let style = document.createElement('style');
            style.id = '${css.id}';
            style.innerHTML = \`${Q(css.getContent())}\`;
            document.head.appendChild(style);
        }
    `);

        runtime.push(`
            $$apply();
            return $component;
        })();`);
        return runtime.join('');
    }


    function buildBlock(data, option = {}) {
        let tpl = [];
        let lvl = [];
        let binds = [];
        let targets = [];
        let targetMap = {};

        const go = (level, data) => {
            let index = 0;
            const setLvl = () => {lvl[level] = index++;};

            const getElementName = () => {
                let l = lvl;
                if(option.top0) l = l.slice(1);
                let name = '$parentElement';
                l.forEach(n => {
                    name += `[$$childNodes][${n}]`;
                });

                let tname = targetMap[name];
                if(!tname) {
                    tname = `el${uniqIndex$2++}`;
                    targets.push(`let ${tname} = ${name};`);
                    targetMap[name] = tname;
                }
                return tname;
            };

            let body = data.body.filter(n => n.type != 'script' && n.type != 'style');
            let lastText;
            const bindNode = (n) => {
                if(n.type === 'text') {
                    if(lastText !== tpl.length) setLvl();
                    if(n.value.indexOf('{') >= 0) {
                        tpl.push(' ');
                        let exp = parseText(n.value);
                        binds.push(`{
                        let $element=${getElementName()};
                        $watchReadOnly($cd, () => ${exp}, (value) => {$element.textContent=value;});}`);
                    } else tpl.push(n.value);
                    lastText = tpl.length;
                } else if(n.type === 'template') {
                    setLvl();
                    tpl.push(n.openTag);
                    tpl.push(n.content);
                    tpl.push('</template>');
                } else if(n.type === 'node') {
                    setLvl();
                    if(n.name.match(/^[A-Z]/) && this.script.imports.indexOf(n.name) >= 0) {
                        // component
                        tpl.push(`<!-- ${n.name} -->`);
                        let b = this.makeComponent(n, getElementName);
                        binds.push(b.bind);
                        return;
                    }

                    let hasClass = false;
                    let el = ['<' + n.name];
                    n.attributes.forEach(p => {
                        if(p.name == 'class') hasClass = true;
                        let b = this.bindProp(p, getElementName, n);
                        if(b.prop) el.push(b.prop);
                        if(b.bind) binds.push(b.bind);
                    });
                    if(n.scopedClass && !hasClass) el.push(`class="${this.css.id}"`);

                    el = el.join(' ');
                    el += n.closedTag?'/>':'>';
                    tpl.push(el);

                    if(!n.closedTag) {
                        go(level + 1, n);
                        tpl.push(`</${n.name}>`);
                    }
                } else if(n.type === 'each') {
                    setLvl();
                    tpl.push(`<!-- ${n.value} -->`);
                    n.parent = data;
                    let eachBlock = this.makeEachBlock(n, getElementName());
                    binds.push(eachBlock.source);
                } else if(n.type === 'if') {
                    setLvl();
                    tpl.push(`<!-- ${n.value} -->`);
                    let ifBlock = this.makeifBlock(n, getElementName());
                    binds.push(ifBlock.source);
                } else if(n.type === 'systag') {
                    let r = n.value.match(/^@(\w+)\s+(.*)$/);
                    let name = r[1];
                    let exp = r[2];

                    if(name == 'html') {
                        setLvl();
                        tpl.push(`<!-- html -->`);
                        binds.push(this.makeHtmlBlock(exp, getElementName()));
                    } else throw 'Wrong tag';
                } else if(n.type === 'comment') {
                    if(!this.config.preserveComments) return;
                    setLvl();
                    tpl.push(n.content);
                }
            };
            body.forEach(n => {
                try {
                    bindNode(n);
                } catch (e) {
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
            });

            lvl.length = level;
        };
        go(0, data);

        let source = [];

        let buildName = '$$build' + (uniqIndex$2++);
        tpl = Q(tpl.join(''));
        source.push(`function ${buildName}($cd, $parentElement) {\n`);
        source.push(targets.join('\n'));
        source.push(binds.join('\n'));
        source.push(`};`);

        return {
            name: buildName,
            tpl: tpl,
            source: source.join('')
        }

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

    function processCSS(styleNode, config) {
        // TODO: make hash
        let id = 'm' + Math.floor(Date.now() * Math.random()).toString(36);

        let self = {element: {}, cls: {}, id};
        let selectors = [];

        function transform() {
            self.ast = csstree.parse(styleNode.content, {parseRulePrelude: false, parseAtrulePrelude: false});

            csstree.walk(self.ast, function(node) {
                if (node.type === 'Rule') {
                    assert(node.prelude.type=='Raw');
                    node.prelude.value = node.prelude.value.split(/\s*,\s*/).map(fullSelector => {
                        let result = [];
                        let forProcess = [];
        
                        fullSelector.split(/\s+/).forEach(sel => {
                            let virtual = '', rx = sel.match(/^([^:]*)(:.*)$/);
                            if(rx) {
                                sel = rx[1];
                                virtual = rx[2];
                            }                        forProcess.push(sel);
                            result.push(sel + '.' + id + virtual);
                        });
        
                        selectors.push(forProcess.join(' '));
                        return result.join(' ');
                    }).join(',');
                }
            });
        }

        self.process = function(data) {
            let dom = makeDom(data);
            const nw = nwsapi({
                document: dom,
                DOMException: function() {}
            });

            selectors.forEach(s => {
                let selected;
                try {
                    selected = nw.select([s]);
                } catch (_) {
                    let e = new Error(`CSS error: '${s}'`);
                    e.details = `selector: '${s}'`;
                    throw e;
                }
                if(selected.length) {
                    selected.forEach(s => {
                        s.node.__node.scopedClass = true;
                        s.lvl.forEach(l => l.__node.scopedClass = true);
                    });
                } else config.warning({message: 'No used css-class: ' + s});
            });
        };

        self.getContent = function() {
            return csstree.generate(self.ast);
        };

        transform();
        return self;
    }


    function makeDom(data) {

        function build(parent, list) {
            list.forEach(e => {
                if(e.type == 'each' || e.type == 'if') {
                    if(e.body && e.body.length) build(parent, e.body);
                    return;
                }
                if(e.type != 'node') return;
                let n = new Node(e.name, {__node: e});
                e.attributes.forEach(a => {
                    if(a.name == 'class') n.className += ' ' + a.value;
                    else if(a.name == 'id') n.id = a.value;
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

    const version = '0.5.1';

    function compile(src, option = {}) {
        if(!option.name) option.name = 'widget';
        if(!option.warning) option.warning = function() {};

        const data = parse(src);

        let script = data.body.filter(n => n.type == 'script');
        assert(script.length <= 1, 'Only one script section');

        script = transformJS(script[0]?script[0].content:null, option);

        let css = data.body.filter(n => n.type == 'style');
        assert(css.length <= 1, 'Only one style section');
        css = css[0] && processCSS(css[0], option);

        const runtime = buildRuntime(data, script, css, option);
        let code = `
        import {
            $$htmlToFragment, $$removeItem, $$childNodes, $watch, $ChangeDetector, $$removeElements,
            $digest, $$htmlBlock, $$compareDeep, $$compareArray, $watchReadOnly, $$ifBlock
        } from 'malinajs/runtime.js';
    `;
        code += script.code.split('$$runtime()').join(runtime);
        return code;
    }

    exports.compile = compile;
    exports.version = version;

    Object.defineProperty(exports, '__esModule', { value: true });

})));
//# sourceMappingURL=malina.js.map
