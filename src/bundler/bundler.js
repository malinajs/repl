import {checkDependency} from './deps';
import {compile} from './compiler';
import {DEPS_REPO, MODULES_REPO} from './../config';

export async function bundle(files){
    
    try {
        checkDependency('rollup');

        files = [{
            name: '_entry.js',
            body: "import App from './App.xht';"
        }, ...files];

        if(!(malina.version.startsWith('0.5.') && malina.version < '0.5.15')) {
            files[0].body += `
                import { configure } from 'malinajs/runtime.js';
                configure({
                    onerror: e => {window.malina_onerror && malina_onerror(e);}
                });
            `;
        }

        let bundle = await rollup.rollup({
            input: "./_entry.js",
            external: false,
            inlineDynamicImports: true,
            treeshake: false,
            plugins: [
                module_resolver_plugin(),
                component_plugin(files),
                download_plugin(),
                malina_plugin()
            ]
        });

        return (await bundle.generate({
            format: "cjs",
            name: "Component",
            exports: "named",
            sourcemap: false
        })).output[0].code;

    } catch (err) {
        throw err;
    }

}

// ---- Rollup plugins ---- //

// Module path resolver
function module_resolver_plugin(){
    return {
        name: 'rollup_plugin_module_resolver',
        async resolveId(id, importer){
            // Local file
            if(id.startsWith('./') && (!importer || importer.startsWith('./'))) return id;

            // Local on UNPKG

            if(id.startsWith('./') && /^https?:\/\//.test(importer)) return new URL(id,addSlash(importer)).href;

            // MalinaJS Libs
            if(id.startsWith('malinajs/')) return `${DEPS_REPO}/malinajs/${malina ? malina.version : 'latest'}/${id.slice(9)}`;
            
            // From UNPKG
            return await getModuleURL(`${MODULES_REPO}/${id}`);
        }
    }
}

// Get source from user's components
function component_plugin(files) {
    
    return {
        name: 'rollup_plugin_files',
        async load(id) { 
            if(!id.startsWith('./')) return null;
            id = id.replace(/^\.\//,'');
            const file = files.find(f=>f.name===id);
            if(file === undefined) throw new Error(`[Bundler]: File ./${id} does not exist.`);
            return file.body;
        }
    }
}


// Download module's source from repository
function download_plugin() {
    return {
        name: 'rollup_plugin_download',

        async load(id) { 
            
            if(!/^https?:\/\//.test(id) && !id.startsWith(`${DEPS_REPO}/malinajs`)) return null;

            try {
                const result = await cash_or_fetch(id);
                return cjs2es.cjs2es(result.body);
            } catch (err) {
                throw new Error(`[Bundler]: Unable download file ${id}.`);
            }
        }
    }
}


// Compiling Malina's components
function malina_plugin() {
    return {
        name: 'rollup_plugin_malina',

        async transform(code, id) {
            const name = id.match(/([^/]+).(html|ma|xht)$/);
            return name ? {code: await compile(code,name[1])} : null;
        }
    }
}


// ---- Helpers ---- //

function addSlash(url){
    if(url.slice(-1) === '/') return url;
    if(/\.[a-z0-9]+$/.test(url)) return url;
    return url+'/';
}

async function getModuleURL(url){
    try{
        // try to find package real URL
        let result = await cash_or_fetch(url);
        if(!result.ok)  throw new Error(`Can't find module ${url}`);
        url = result.url;
        return url;
    }catch(err){
        throw new Error(`[Bundler] ${err.message}`);
    }
}

const FCASH = {};
async function cash_or_fetch(url){
    if(!FCASH[url]) {
        const resp = await fetch(url);
        if(!resp.ok) throw new Error(`[Bundler] Can't download module from ${url}`);
        FCASH[url] = {url: resp.url, ok: resp.ok, status:resp.status, body: resp.ok ? await resp.text() : ''}
    }
    return FCASH[url];
}