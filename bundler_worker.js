(()=>{function h(e){e=e||self;let n=[],o=(i,s)=>{n.push({event:i,handler:s})},t=(i,s)=>{n.filter(w=>w.event!==i&&w.handler!==s)},r=(i,s)=>{e.postMessage({event:i,details:s})};return e.addEventListener("message",({data:i})=>{n.filter(s=>s.event===i.event).forEach(s=>s.handler(i.details))}),{on:o,off:t,emit:r}}var l="modules",y="https://unpkg.com";var j=["rollup","acorn","astring","csstree","cjs2es"];function g(e){return self[e]!==void 0}function c(e){if(!g(e))throw new Error(`[REPL]: Dependency not initialized: ${e}`)}function _(){for(let e of j)importScripts(`${l}/${e}.js`),c(e);self["css-tree"]=self.csstree}function m(e){if(e=e||"latest",g("malina")){if(malina.version===e)return;delete self.malina}try{importScripts(`${l}/malinajs/${e}/malina.js`)}catch(n){throw new Error(`[REPL]: Can't load MalinaJS v.${e}`)}c("malina")}async function u(e,n,o){c("malina");let t={exportDefault:!0,inlineTemplate:!0,autoSubscribe:!0,name:n,localConfig:!1,autoimport:r=>`import ${r} from './${r}.xht';`};try{let r=await malina.compile(e,t);return r.result&&(r=r.result),o?await x(r):r}catch(r){throw console.error(r),new Error(`[MalinaJS] Compile error: ${r.message}: ${r.details}`)}}async function x(e){c("rollup");let o=(await(await rollup.rollup({input:"./app.js",external:()=>!0,plugins:[{name:"plugin",async resolveId(t){return t},async load(t){return t==="./app.js"?e:""}}],onwarn:()=>{}})).generate({format:"es"})).output[0].code;return b(o)}function b(e){e=e.replace(/ import\(/g," import_dynamic("),console.log(e);let n=acorn.parse(e,{sourceType:"module",ecmaVersion:2020});return e=astring.generate(n),e=e.replace(/ import_dynamic\(/g," import("),e}async function E(e){try{return c("rollup"),(await(await rollup.rollup({input:"./__entry.js",external:!1,inlineDynamicImports:!0,treeshake:!1,plugins:[v(),D(e),S(),R()]})).generate({format:"iife",name:"Component",exports:"named",sourcemap:!1})).output[0].code}catch(n){throw n}}function v(){let e=/^\.{1,2}\//,n=/^https?:\/\/|^\/\//,o=/^malinajs\//;return{name:"rollup_plugin_module_resolver",async resolveId(t,r){return e.test(t)&&(!r||e.test(r))?t:e.test(t)&&n.test(r)?new URL(t,k(r)).href:t=="malinajs"?`${l}/malinajs/${malina?malina.version:"latest"}/runtime.js`:o.test(t)?`${l}/malinajs/${malina?malina.version:"latest"}/${t.slice(9)}`:await M(`${y}/${t}`)}}}function D(e){let n=`
        import {configure} from 'malinajs';
        import App from './App.xht';
        configure({onerror: (e) => window.malina_onerror?.(e)});
        if(window.app) window.app.destroy();
        document.body.innerHTML = '';
        window.app = App(document.body);
    `;return{name:"rollup_plugin_files",async load(o){if(o=="./__entry.js")return n;if(!o.startsWith("./"))return null;o=o.replace(/^\.\//,"");let t=e.find(r=>r.name===o);if(t===void 0)throw new Error(`[Bundler]: File ./${o} does not exist.`);return t.body}}}function S(){return{name:"rollup_plugin_download",async load(e){if(!/^https?:\/\//.test(e)&&!e.startsWith(`${l}/malinajs`))return null;try{let n=await d(e);return cjs2es.cjs2es(n.body)}catch(n){throw new Error(`[Bundler]: Unable download file ${e}.`)}}}}function R(){return{name:"rollup_plugin_malina",async transform(e,n){let o=n.match(/([^/]+).(html|ma|xht)$/);return o?{code:await u(e,o[1])}:null}}}function k(e){return e.slice(-1)==="/"||/\.[a-z0-9]+$/.test(e)?e:e+"/"}async function M(e){try{let n=await d(e+"?module");if(!n.ok&&(n=await d(e),!n.ok))throw new Error(`Can't find module ${e}`);return e=n.url,e}catch(n){throw new Error(`[Bundler] ${n.message}`)}}var f={};async function d(e){if(!f[e]){let n=await fetch(e);f[e]={url:n.url,ok:n.ok,status:n.status,body:n.ok?await n.text():""}}return f[e]}var{on:p,emit:a}=h(),$=!1;try{p("init",e=>{a("init"),$=!1,_(),m(e&&e.malinaVersion||"latest"),$=!0,a("ready",{malinaVersion:malina.version,rollupVersion:rollup.VERSION}),a("malinaVersion",malina.version)}),p("bundle",async e=>{try{let n=await E(e);a("bundle",n)}catch(n){console.error(n),a("error",n.message),a("bundle","")}}),p("compile",async e=>{try{let n=await u(e.code,e.name,!0);n.result&&(n=n.result),a("compile",n)}catch(n){console.error(n),a("error",n.message),a("compile","")}}),p("malinaVersion",async e=>{m(e),a("ready",{malinaVersion:malina.version,rollupVersion:rollup.VERSION})})}catch(e){console.error(e),a("error",e.message)}})();
