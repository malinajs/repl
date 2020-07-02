(function(e,n){typeof exports==="object"&&typeof module!=="undefined"?n(exports,require("acorn"),require("astring")):typeof define==="function"&&define.amd?define(["exports","acorn","astring"],n):(e=e||self,n(e.malina={},e.acorn,e.astring))})(this,function(e,n,t){"use strict";n=n&&Object.prototype.hasOwnProperty.call(n,"default")?n["default"]:n;t=t&&Object.prototype.hasOwnProperty.call(t,"default")?t["default"]:t;function i(e,n){if(!e)throw n}function l(e){let n=0;const t=()=>{i(n<e.length,"EOF");return e[n++]};const l=()=>{let l=n;let r=t();i(r==="<","Tag error");let o=null;let s=true;let c="";while(true){r=t();if(o){if(r!=o)continue;o=null;continue}if(r==='"'){o='"';continue}if(r==="'"){o="'";continue}if(r==="<"){let t=new Error("Wrong tag");t.details=e.substring(l,n);throw t}if(r===">"){const t=["area","base","br","col","embed","hr","img","input","link","meta","param","source","track","wbr"];let i=t.indexOf(c)>=0;return{type:"node",name:c,openTag:e.substring(l,n),start:l,end:n,closedTag:i}}if(s){if(r.match(/[\da-zA-Z]/)){c+=r;continue}else s=false}}};const r=i=>{let l=`</${i}>`;let r,o,s,c=n;while(true){s=o;o=t();if(r){if(o!=r)continue;if(s=="\\")continue;r=null;continue}if(o=='"'||o=="'"||o=="`"){r=o;continue}if(o=="<"){if(e.substring(n-1,n+l.length-1)==l){let t=n-1;n+=l.length-1;return e.substring(c,t)}}}};const o=()=>{let t=n;let l=e.substring(t).indexOf("</style>")+t;i(l>=0,"<style> is not closed");n=l+9;return e.substring(t,l)};const s=()=>{let l=n;i(t()==="{","Bind error");let r;while(true){let i=t();if(r){if(i!=r)continue;r=null;continue}if(i=='"'||i=="'"||i=="`"){r=i;continue}if(i=="{")throw"Error binding: "+e.substring(l,n);if(i!="}")continue;return{value:e.substring(l+1,n-1)}}};const c=()=>{let t=n;let l=e.indexOf("--\x3e",t);i(l>=0,"Comment is not closed");l+=3;n=l;return e.substring(t,l)};const a=u=>{let f=null;const p=()=>{if(!f)return;u.body.push(f);f=null};while(n<e.length){let d=e[n];if(d==="<"){p();if(e.substring(n,n+4)==="\x3c!--"){u.body.push({type:"comment",content:c()});continue}if(e[n+1]==="/"){let e="";n+=2;while(true){d=t();if(d===">")break;e+=d}i(e===u.name,"Wrong close-tag: "+u.name+" - "+e);return}let s=l();u.body.push(s);if(s.name==="script"){s.type="script";s.content=r("script");continue}else if(s.name==="template"){s.type="template";s.content=r("template");continue}else if(s.name==="style"){s.type="style";s.content=o();continue}if(s.closedTag)continue;s.body=[];try{a(s)}catch(e){if(typeof e=="string")e=new Error(e);if(!e.details)e.details=s.openTag;throw e}continue}else if(d==="{"){if(["#","/",":"].indexOf(e[n+1])>=0){p();let e=s();if(e.value.startsWith("#each ")){let n={type:"each",value:e.value,body:[]};u.body.push(n);a(n);continue}else if(e.value==="/each"){i(u.type==="each","Bind error: /each");return}else if(e.value.startsWith("#if ")){let n={type:"if",value:e.value,body:[]};u.body.push(n);a(n);continue}else if(e.value==="/if"){i(u.type==="if","Bind error: /if");return}else if(e.value===":else"){i(u.type==="if","Bind error: :else");u.bodyMain=u.body;u.body=[]}else throw"Error binding: "+e.value}}if(!f){f={type:"text",value:""}}f.value+=t()}p();i(u.type==="root","File ends to early")};let u={type:"root",body:[]};a(u);return u}function r(e,i={}){let l={watchers:[]};var r=n.parse(e,{ecmaVersion:6});const o={FunctionDeclaration:1,FunctionExpression:1,ArrowFunctionExpression:1};const s=e=>{if(o[e.type]&&e.body.body&&e.body.body.length){e.body.body.unshift({type:"ExpressionStatement",expression:{callee:{type:"Identifier",name:"$$apply"},type:"CallExpression"}})}};const c=function(e){for(let n in e){let t=e[n];if(typeof t==="object"){if(Array.isArray(t)){t.forEach(c)}else if(t&&t.type){c(t)}}}s(e)};c(r.body);function a(n){function t(e){if(e.type=="Identifier")return;if(e.type.endsWith("Expression"))return;throw"Wrong expression"}if(n.body.type!="ExpressionStatement")throw"Error";if(n.body.expression.type=="AssignmentExpression"){const i=n.body.expression;if(i.operator!="=")throw"Error";if(i.left.type!="Identifier")throw"Error";const r=i.left.name;t(i.right);const o=e.substring(i.right.start,i.right.end);l.watchers.push(`$watch($cd, () => (${o}), ($value) => {${r}=$value;});`)}else if(n.body.expression.type=="SequenceExpression"){const i=n.body.expression.expressions;if(i.length!=2)throw"Error";t(i[0]);if(!i[0].type.endsWith("Expression")&&i[0].type!="Identifier")throw"Wrong expression";let r=e.substring(i[0].start,i[0].end);if(["ArrowFunctionExpression","FunctionExpression"].indexOf(i[1].type)<0)throw"Error function";let o=e.substring(i[1].start,i[1].end);l.watchers.push(`$watch($cd, () => (${r}), ${o});`)}else throw"Error"}let u=[];r.body.forEach(n=>{if(n.type=="FunctionDeclaration"&&n.id.name=="onMount")l.$onMount=true;if(n.type=="LabeledStatement"&&n.label.name=="$"){try{a(n);return}catch(t){throw new Error(t+": "+e.substring(n.start,n.end))}}u.push(n)});r.body=u;r.body.push({type:"ExpressionStatement",expression:{callee:{type:"Identifier",name:"$$runtime"},type:"CallExpression"}});r.body=[{body:{type:"BlockStatement",body:r.body},id:{type:'Identifier"',name:i.name},params:[{type:"Identifier",name:"$element"}],type:"FunctionDeclaration"}];l.code=t.generate(r);return l}let o=0;let s;function c(e,n){let t=[`\n        function $$apply() {\n            if($$apply._p) return;\n            if($$apply.planned) return;\n            $$apply.planned = true;\n            setTimeout(() => {\n                $$apply.planned = false;\n                $$apply.go();\n            }, 1);\n        };\n        (function() {\n            function $$htmlToFragment(html) {\n                let t = document.createElement('template');\n                t.innerHTML = html;\n                return t.content;\n            };\n            function $$removeItem(array, item) {\n                let i = array.indexOf(item);\n                if(i>=0) array.splice(i, 1);\n            };\n            function $$getElement(el, a) {\n                a.split(',').forEach(i => el = el.childNodes[i]);\n                return el;\n            }\n\n            function $watch(cd, fn, callback, mode) {\n                var w = {fn: fn, cb: callback, value: void 0};\n                if(mode == 'ro') w.ro = true;\n                if(mode == 'init') w.value = fn();\n                cd.watchers.push(w);\n            }\n\n            function $$CD() {\n                this.children = [];\n                this.watchers = [];\n                this.destroyList = [];\n                this.onceList = [];\n            };\n            Object.assign($$CD.prototype, {\n                wf: function(fn, callback) {\n                    $watch(this, fn, callback, 'ro');\n                },\n                wa: function(fn, callback) {\n                    let w = {fn: fn, cb: callback, value: undefined, a: true};\n                    this.watchers.push(w);\n                    return w;\n                },\n                ev: function(el, event, callback) {\n                    el.addEventListener(event, callback);\n                    this.d(() => {\n                        el.removeEventListener(event, callback);\n                    });\n                },\n                d: function(fn) {\n                    this.destroyList.push(fn);\n                },\n                destroy: function() {\n                    this.watchers.length = 0;\n                    this.destroyList.forEach(fn => {\n                        try {\n                            fn();\n                        } catch (e) {\n                            console.error(e);\n                        }\n                    });\n                    this.destroyList.length = 0;\n                    this.children.forEach(cd => {\n                        cd.destroy();\n                    });\n                    this.children.length = 0;\n                },\n                once: function(fn) {\n                    this.onceList.push(fn);\n                }\n            });\n\n            let $cd = new $$CD();\n\n            const arrayCompare = (a, b) => {\n                let e0 = a == null || !a.length;\n                let e1 = b == null || !b.length;\n                if(e0 !== e1) return true;\n                if(e0 === true) return false;\n                if(a.length !== b.length) return true;\n                for(let i=0;i<a.length;i++) {\n                    if(a[i] !== b[i]) return true;\n                }\n                return false;\n            };\n            $$apply.go = () => {\n                $$apply._p = true;\n                try {\n                    $digest($cd);\n                } finally {\n                    $$apply._p = false;\n                }\n            };\n            \n            function $digest($cd) {\n                let loop = 10;\n                let once = [];\n                let w;\n                while(loop >= 0) {\n                    let changes = 0;\n                    let index = 0;\n                    let queue = [];\n                    let i, value, cd = $cd;\n                    while(cd) {\n                        for(let i=0;i<cd.watchers.length;i++) {\n                            w = cd.watchers[i];\n                            value = w.fn();\n                            if(w.a) {\n                                if(arrayCompare(w.value, value)) {\n                                    w.value = value.slice();\n                                    if(!w.ro) changes++;\n                                    w.cb(w.value);\n                                }\n                            } else {\n                                if(w.value !== value) {\n                                    w.value = value;\n                                    if(!w.ro) changes++;\n                                    w.cb(w.value);\n                                }\n                            }\n                        };\n                        if(cd.children.length) queue.push.apply(queue, cd.children);\n                        if(cd.onceList.length) {\n                            once.push.apply(once, cd.onceList);\n                            cd.onceList.length = 0;\n                        }\n                        cd = queue[index++];\n                    }\n                    loop--;\n                    if(!changes) break;\n                }\n                $$apply._p = false;\n                once.forEach(fn => {\n                    try {\n                        fn();\n                    } catch (e) {\n                        console.error(e);\n                    }\n                });\n                if(loop < 0) console.error('Infinity changes: ', w);\n            };\n    `];s=function(e,t={}){let i=[];let l=[];let r=[];let s={};function c(e,a){let $=0;const y=()=>{l[e]=$++};const m=()=>{let e,n=l;if(t.top0)n=n.slice(1);if(n.length)e=`$$getElement($element, '${n.join(",")}')`;else e="$element";let i=s[e];if(!i){s[e]=i="el"+o++;r.push(`var ${i} = ${e};`)}return i};let g;function b(t){if(t.type==="text"){if(g!==i.length)y();if(t.value.indexOf("{")>=0){i.push(" ");let e=u(t.value);r.push(`$cd.wf(() => ${e}, (value) => {${m()}.textContent=value;});`)}else i.push(t.value);g=i.length}else if(t.type==="script"){return}else if(t.type==="style"){y();i.push(t.openTag);i.push(t.content);i.push("</style>")}else if(t.type==="template"){y();i.push(t.openTag);i.push(t.content);i.push("</template>")}else if(t.type==="node"){y();if(t.openTag.indexOf("{")||t.openTag.indexOf("use:")){let e=f(t.openTag);let n=["<"+t.name];e.forEach(e=>{let t=p(e,m);if(t.prop)n.push(t.prop);if(t.bind)r.push(t.bind)});n=n.join(" ");n+=t.closedTag?"/>":">";i.push(n)}else i.push(t.openTag);if(!t.closedTag){c(e+1,t);i.push(`</${t.name}>`)}}else if(t.type==="each"){y();i.push(`\x3c!-- ${t.value} --\x3e`);t.parent=a;let e=d(t,m());r.push(e.source)}else if(t.type==="if"){y();i.push(`\x3c!-- ${t.value} --\x3e`);let e=h(t,m());r.push(e.source)}else if(t.type==="comment"){if(!n.preserveComments)return;y();i.push(t.content)}}a.body.forEach(e=>{try{b(e)}catch(n){if(typeof n==="string")n=new Error(n);if(!n.details){console.log("Node: ",e);if(e.type=="text")n.details=e.value.trim();else if(e.type=="node")n.details=e.openTag.trim();else if(e.type=="each")n.details=e.value.trim();else if(e.type=="if")n.details=e.value.trim()}throw n}});l.length=e}c(0,e);let $=[];let y="$$build"+o++;i=a(i.join(""));$.push(`function ${y}($cd, $element) {\n`);$.push(r.join("\n"));$.push(`};`);return{name:y,tpl:i,source:$.join("")}};let i=s(e);t.push(i.source);t.push(`\n        $element.innerHTML = \`${a(i.tpl)}\`;\n        ${i.name}($cd, $element);\n    `);if(n.$onMount)t.push(`$cd.once(onMount);`);if(n.$watchers.length){t.push("$cd.once(() => {\n"+n.$watchers.join("\n")+"\n$$apply();\n});")}t.push(`$$apply();\n})();`);return t.join("")}function a(e){return e.replace(/`/g,"\\`")}function u(e,n){let t=0;let l=0;let r="";let o="";let s=[];let c;let u=e.length;if(n){if(e[0]==="{")n=false;else{t++;u--;n=e[0];i(n===e[u],e)}}while(t<u){let n=e[t++];if(l==1){if(c){if(n===c)c=null;o+=n;continue}if(n==='"'||n==="'"){c=n;o+=n;continue}if(n==="}"){l=0;o=o.trim();if(!o)throw"Wrong expression";s.push("("+o+")");o="";continue}o+=n;continue}if(n==="{"){if(r){s.push("`"+a(r)+"`");r=""}l=1;continue}r+=n}if(r)s.push("`"+a(r)+"`");i(l==0,"Wrong expression: "+e);return s.join("+")}function f(e){let n=e.length-1;i(e[0]==="<");i(e[n]===">");if(e[n-1]=="/")n--;let t=1;let l=1;let r;let o=[];let s=true;const c=()=>{i(t<e.length,"EOF");return e[t++]};const a=n=>{if(t<=l)return;if(s){s=false;return}let i={content:e.substring(l,t+n)};if(r){i.name=e.substring(l,r-1);i.value=e.substring(r,t+n);r=null}else i.name=i.content;o.push(i)};let u=false;while(t<n){let e=c();if(e==='"'||e==="'"){while(e!=c());continue}if(u){u=e!="}";continue}if(e=="{"){u=true;continue}if(e.match(/^\s$/)){a(-1);l=t;continue}if(e=="="&&!r){r=t}}a(0);return o}function p(e,n){let t=e.name.split(":");let l=t[0];function r(){let n=e.value.match(/^\{(.*)\}$/)[1];i(n,e.content);return n}if(l=="on"){let l=n();let o=r();let s="",c=t[1].split("|");let u=c[0];c.slice(1).forEach(e=>{if(e=="preventDefault")s+=`$event.preventDefault();`;else if(e=="enter")s+=`if($event.keyCode != 13) return; $event.preventDefault();`;else if(e=="escape")s+=`if($event.keyCode != 27) return; $event.preventDefault();`;else throw"Wrong modificator: "+e});i(u,e.content);return{bind:`$cd.ev(${l}, "${u}", ($event) => { ${s} $$apply(); let $element=${l}; ${a(o)}});`}}else if(l=="bind"){let l=n();let o=r();let s=t[1];i(s,e.content);if(s==="value"){return{bind:`$cd.ev(${l}, 'input', () => { ${o}=${l}.value; $$apply(); });\n                    $cd.wf(() => (${o}), (value) => { if(value != ${l}.value) ${l}.value = value; });`}}else if(s=="checked"){return{bind:`$cd.ev(${l}, 'input', () => { ${o}=${l}.checked; $$apply(); });\n                    $cd.wf(() => !!(${o}), (value) => { if(value != ${l}.checked) ${l}.checked = value; });`}}else throw"Not supported: "+e.content}else if(l=="class"&&t.length>1){let l=n();let o=r();let s=t[1];i(s,e.content);return{bind:`$cd.wf(() => !!(${o}), (value) => { if(value) ${l}.classList.add("${s}"); else ${l}.classList.remove("${s}"); });`}}else if(l=="use"){let l=n();if(t.length==2){let n="use"+o++;let i=e.value?r():"";let s=`var ${n} = ${t[1]}(${l}${i?", "+i:""});\n if(${n}) {`;if(i)s+=`\n                if(${n}.update) {\n                    let w = $cd.wa(() => [${i}], (args) => {${n}.update.apply(${n}, args);});\n                    w.value = w.fn();\n                }`;s+=`if(${n}.destroy) $cd.d(${n}.destroy);}`;return{bind:s}}i(t.length==1,e.content);let s=r();return{bind:`$cd.once(() => { $$apply(); let $element=${l}; ${s}; });`}}else{if(e.value&&e.value.indexOf("{")>=0){let t=n();let i=u(e.value,true);return{bind:`$cd.wf(() => (${i}), (value) => { ${t}.setAttribute('${l}', value) });`}}return{prop:e.content}}}function d(e,n){let t=[];let l=e.body.filter(e=>e.type=="node");if(!l.length)l=[e.body[0]];i(l.length===1,"Only 1 node for #each");let r=s({body:l},{top0:true});let c=e.value.match(/^#each\s+(\S+)\s+as\s+(\w+)\s*$/);i(c,"Wrong #each expression");let u=c[1];let f=c[2];let p="eachBlock"+o++;t.push(`\n        function ${p} ($cd, top) {\n\n            function bind($ctx, ${f}, $index) {\n                ${r.source};\n                ${r.name}($ctx.cd, $ctx.el);\n                $ctx.reindex = function(i) { $index = i; };\n            };\n\n            let parentNode = top.parentNode;\n            let srcNode = document.createElement("${e.parent.name}");\n            srcNode.innerHTML=\`${a(r.tpl)}\`;\n            srcNode=srcNode.firstChild;\n\n            let mapping = new Map();\n            $cd.wa(() => (${u}), (array) => {\n                let prevNode = top;\n                let newMapping = new Map();\n\n                if(mapping.size) {\n                    let arrayAsSet = new Set();\n                    for(let i=0;i<array.length;i++) {\n                        arrayAsSet.add(array[i]);\n                    }\n                    mapping.forEach((ctx, item) => {\n                        if(arrayAsSet.has(item)) return;\n                        ctx.el.remove();\n                        ctx.cd.destroy();\n                        $$removeItem($cd.children, ctx.cd);\n                    });\n                    arrayAsSet.clear();\n                }\n\n                let i, item, next_ctx, el, ctx;\n                for(i=0;i<array.length;i++) {\n                    item = array[i];\n                    if(next_ctx) {\n                        ctx = next_ctx;\n                        next_ctx = null;\n                    } else ctx = mapping.get(item);\n                    if(ctx) {\n                        el = ctx.el;\n\n                        if(el.previousSibling != prevNode) {\n                            let insert = true;\n\n                            if(i + 1 < array.length && prevNode.nextSibling) {\n                                next_ctx = mapping.get(array[i + 1]);\n                                if(prevNode.nextSibling.nextSibling === next_ctx.el) {\n                                    parentNode.replaceChild(el, prevNode.nextSibling);\n                                    insert = false;\n                                }\n                            }\n\n                            if(insert) {\n                                parentNode.insertBefore(el, prevNode.nextSibling);\n                            }\n                        }\n    \n                        ctx.reindex(i);\n                    } else {\n                        el = srcNode.cloneNode(true);\n                        let childCD = new $$CD(); $cd.children.push(childCD);\n                        ctx = {el: el, cd: childCD};\n                        bind(ctx, item, i);\n                        parentNode.insertBefore(el, prevNode.nextSibling);\n                    }\n                    prevNode = el;\n                    newMapping.set(item, ctx);\n\n                };\n                mapping.clear();\n                mapping = newMapping;\n\n            });\n\n        }\n        ${p}($cd, ${n});\n    `);return{source:t.join("\n")}}function h(e,n){let t=[];let l=e.value.match(/^#if (.*)$/);let r=l[1];i(r,"Wrong binding: "+e.value);let c="ifBlock"+o++;t.push(`function ${c}($cd, $element) {`);let u,f;if(e.bodyMain){u=s({body:e.bodyMain});f=s(e);t.push(`\n            let elsefr = $$htmlToFragment(\`${a(f.tpl)}\`);\n            ${f.source}\n        `)}else{u=s(e)}t.push(`\n        let mainfr = $$htmlToFragment(\`${a(u.tpl)}\`);\n        ${u.source}\n    `);t.push(`\n        let childCD;\n        let elements = [];\n\n        function create(fr, builder) {\n            childCD = new $$CD();\n            $cd.children.push(childCD);\n            let el = fr.cloneNode(true);\n            for(let i=0;i<el.childNodes.length;i++) elements.push(el.childNodes[i]);\n            builder(childCD, el);\n            $element.parentNode.insertBefore(el, $element.nextSibling);\n        };\n\n        function destroy() {\n            if(!childCD) return;\n            $$removeItem($cd.children, childCD);\n            childCD.destroy();\n            childCD = null;\n            for(let i=0;i<elements.length;i++) elements[i].remove();\n            elements.length = 0;\n        };\n\n        $cd.wf(() => !!(${r}), (value) => {\n            if(value) {\n                destroy();\n                create(mainfr, ${u.name});\n            } else {\n                destroy();\n                `+(f?`if(elsefr) create(elsefr, ${f.name});`:"")+`\n            }\n        });\n    `);t.push(`};\n ${c}($cd, ${n});`);return{source:t.join("\n")}}const $="0.4.2";function y(e,n={}){const t=l(e);let o;t.body.forEach(e=>{if(e.type!=="script")return;i(!o,"Multi script");o=e});if(!n.name)n.name="widget";o=r(o.content,n);if(o.$onMount)n.$onMount=true;n.$watchers=o.watchers;const s=c(t,n);return o.code.split("$$runtime()").join(s)}e.compile=y;e.version=$;Object.defineProperty(e,"__esModule",{value:true})});