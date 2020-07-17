(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('acorn'), require('astring')) :
    typeof define === 'function' && define.amd ? define(['exports', 'acorn', 'astring'], factory) :
    (global = global || self, factory(global.malina = {}, global.acorn, global.astring));
}(this, (function (exports, acorn, astring) { 'use strict';

    acorn = acorn && Object.prototype.hasOwnProperty.call(acorn, 'default') ? acorn['default'] : acorn;
    astring = astring && Object.prototype.hasOwnProperty.call(astring, 'default') ? astring['default'] : astring;

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
                    }                if(tag.closedTag) continue;

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
            if(index <= start) return;
            if(first) {
                first = false;
                return;
            }
            let prop = {
                content: source.substring(start, index + shift)
            };
            if(eq) {
                prop.name = source.substring(start, eq - 1);
                prop.value = source.substring(eq, index + shift);
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

    function parseText(source, quotes) {
        let i = 0;
        let step = 0;
        let text = '';
        let exp = '';
        let result = [];
        let q;
        let len = source.length;
        if(quotes) {
            if(source[0] === '{') quotes = false;
            else {
                i++;
                len--;
                quotes = source[0];
                assert(quotes === source[len], source);
            }
        }
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
                let exp = parseText(prop.value, true);
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

    function bindProp(prop, makeEl) {
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
                let code = `{let useObject = ${arg}(${makeEl()}${args?', '+args:''});\n if(useObject) {`;
                if(args) code += `
                if(useObject.update) {
                    let w = $watch($cd, () => [${args}], (args) => {useObject.update.apply(useObject, args);}, {cmp: $$compareArray});
                    w.value = w.fn();
                }`;
                code += `if(useObject.destroy) $cd.d(useObject.destroy);}}`;
                return {bind: code};
            }
            let exp = getExpression();
            return {bind: `{
            let $element=${makeEl()};
            $cd.once(() => { $$apply(); ${exp}; });}`};
        } else {
            if(prop.value && prop.value.indexOf('{') >= 0) {
                let exp = parseText(prop.value, true);
                if(['hidden','checked','value','disabled','selected'].indexOf(name) >= 0) {
                    return {bind: `{
                    let $element=${makeEl()};
                    $watchReadOnly($cd, () => (${exp}), (value) => {$element.${name} = value;});
                }`};
                } else {
                    return {bind: `{
                    let $element=${makeEl()};
                    $watchReadOnly($cd, () => (${exp}), (value) => {
                        if(value) $element.setAttribute('${name}', value);
                        else $element.removeAttribute('${name}');
                    });
                }`};
                }
            }
            return {
                prop: prop.content
            }
        }
    }

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
            let elsefr = $$htmlToFragment(\`${Q(elseBlock.tpl)}\`);
            ${elseBlock.source}
        `);

        } else {
            mainBlock = this.buildBlock(data);
        }
        source.push(`
        let mainfr = $$htmlToFragment(\`${Q(mainBlock.tpl)}\`);
        ${mainBlock.source}
    `);

        source.push(`
        let childCD;
        let elements = [];

        function create(fr, builder) {
            childCD = $cd.new();
            let el = fr.cloneNode(true);
            for(let i=0;i<el.childNodes.length;i++) elements.push(el.childNodes[i]);
            builder(childCD, el);
            $parentElement.parentNode.insertBefore(el, $parentElement.nextSibling);
        };

        function destroy() {
            if(!childCD) return;
            $$removeItem($cd.children, childCD);
            childCD.destroy();
            childCD = null;
            for(let i=0;i<elements.length;i++) elements[i].remove();
            elements.length = 0;
        };

        $watch($cd, () => !!(${exp}), (value) => {
            if(value) {
                destroy();
                create(mainfr, ${mainBlock.name});
            } else {
                destroy();
                ` + (elseBlock?`if(elsefr) create(elsefr, ${elseBlock.name});`:'') + `
            }
        });
    `);
        source.push(`};\n ${ifBlockName}($cd, ${topElementName});`);
        
        return {
            source: source.join('\n')
        }
    }

    let uniqIndex$1 = 0;


    function makeEachBlock(data, topElementName) {
        let source = [];

        let nodeItems = data.body.filter(n => n.type == 'node');
        if(!nodeItems.length) nodeItems = [data.body[0]];
        assert(nodeItems.length === 1, 'Only 1 node for #each');
        let itemData = this.buildBlock({body: nodeItems}, {top0: true});

        let rx = data.value.match(/^#each\s+(\S+)\s+as\s+(\w+)\s*$/);
        assert(rx, 'Wrong #each expression');
        let arrayName = rx[1];
        let itemName = rx[2];

        let eachBlockName = 'eachBlock' + (uniqIndex$1++);
        source.push(`
        function ${eachBlockName} ($cd, top) {

            function bind($ctx, ${itemName}, $index) {
                ${itemData.source};
                ${itemData.name}($ctx.cd, $ctx.el);
                $ctx.reindex = function(i) { $index = i; };
            };

            let parentNode = top.parentNode;
            let srcNode = document.createElement("${data.parent.name}");
            srcNode.innerHTML=\`${Q(itemData.tpl)}\`;
            srcNode=srcNode.firstChild;

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
                        ctx.el.remove();
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
                        el = ctx.el;

                        if(el.previousSibling != prevNode) {
                            let insert = true;

                            if(i + 1 < array.length && prevNode.nextSibling) {
                                next_ctx = mapping.get(array[i + 1]);
                                if(prevNode.nextSibling.nextSibling === next_ctx.el) {
                                    parentNode.replaceChild(el, prevNode.nextSibling);
                                    insert = false;
                                }
                            }

                            if(insert) {
                                parentNode.insertBefore(el, prevNode.nextSibling);
                            }
                        }
    
                        ctx.reindex(i);
                    } else {
                        el = srcNode.cloneNode(true);
                        let childCD = $cd.new();
                        ctx = {el: el, cd: childCD};
                        bind(ctx, item, i);
                        parentNode.insertBefore(el, prevNode.nextSibling);
                    }
                    prevNode = el;
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

    function $ChangeDetector(root) {
        if(root) this.root = root;
        else {
            this.root = this;
            this.onceList = [];
        }
        this.root = root || this;
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

    function makeHtmlBlock(exp, topElementName) {
        return `$$htmlBlock($cd, ${topElementName}, () => (${exp}));\n`;
    }

    let uniqIndex$2 = 0;


    function buildRuntime(data, config, script) {
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
            buildBlock,
            bindProp,
            makeEachBlock,
            makeifBlock,
            makeComponent,
            makeHtmlBlock
        };

        let bb = ctx.buildBlock(data);
        runtime.push(bb.source);
        runtime.push(`
        const rootTemplate = \`${Q(bb.tpl)}\`;
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
                        if(${prop} == ${valueName}) return;
                        ${prop} = ${valueName};
                        $$apply();
                    }
                });
            `);
            });
        }
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

            let body = data.body.filter(n => n.type != 'script');
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
                } else if(n.type === 'style') {
                    setLvl();
                    tpl.push(n.openTag);
                    tpl.push(n.content);
                    tpl.push('</style>');
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
                    if(n.openTag.indexOf('{') || n.openTag.indexOf('use:')) {
                        let r = parseElement(n.openTag);
                        let el = ['<' + n.name];
                        r.forEach(p => {
                            let b = this.bindProp(p, getElementName);
                            if(b.prop) el.push(b.prop);
                            if(b.bind) binds.push(b.bind);
                        });
                        el = el.join(' ');
                        el += n.closedTag?'/>':'>';
                        tpl.push(el);
                    } else tpl.push(n.openTag);
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

    const version = '0.4.11';

    function compile(src, option = {}) {
        const data = parse(src);

        let script = data.body.filter(n => n.type == 'script');
        assert(script.length <= 1, 'Only one script section');

        if(!option.name) option.name = 'widget';
        script = transformJS(script[0]?script[0].content:null, option);

        const runtime = buildRuntime(data, option, script);
        let code = `
        import {
            $$htmlToFragment, $$removeItem, $$childNodes, $watch, $ChangeDetector,
            $digest, $$htmlBlock, $$compareDeep, $$compareArray, $watchReadOnly
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
