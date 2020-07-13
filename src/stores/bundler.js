import storik from 'storik';

import {files} from './files';
import {errors} from './errors.js';

export let bundler = bundleStore();



const REPO = 'https://unpkg.com';

const DEPS = [
    ['rollup','rollup/dist/rollup.browser.js'],
    ['cjs2es','cjs2es'],
    ['acorn','acorn'],
    ['astring','astring/dist/astring.min.js']
]



function bundleStore(){
    let cooldownPeriod = 500;

    const initialized = storik(false);
    const bundling = storik(false);

    const appStore = storik('', bundler_init);
    const compStore = storik('');

    async function bundler_init(){
        if(initialized.get()) return;
            
        console.log('Initializing REPL...');

        for(let dep of DEPS){
            try {
                ( await download_module(`${REPO}/${dep[1]}`) )();
            } catch (e) {
                console.error(e);
                throw new Error(`[REPL]: Can't load dependency: ${dep[0]}`);
            }
        }

        await bundler_load_malina();
    }

    async function bundler_load_malina(ver){
        ver = ver || 'latest';
        delete window['malina'];
        try {
            ( await download_module(`${REPO}/malinajs@${ver}`) )();
        } catch (e) {
            initialized.set(false);
            console.error(e);
            throw new Error(`[REPL]: Can't load MalinaJS v.${ver}`);
        }

        if(bundler_check_dependencies()) files.touch();
    }

    async function bundler_check_dependencies(){
        for(let dep of DEPS.concat([['malina','malinajs']])){
            if(!window[dep[0]]){
                initialized.set(false);
                console.error(e);
                throw new Error(`[REPL]: Dependency not initialized: ${dep[0]}`);
            }
        }
        initialized.set(true);
    
        clear();
    
        return true;
    }

    async function bundle_sources(sources){
        if(!initialized.get()) return;
        bundling.set(true);
        errors.set(null);
        clear();
        try {
            const code = await bundle(sources);
            appStore.set(code);
        }catch(e){
            errors.set(e.message);
            console.error(e);
        }
        bundling.set(false);
    }

    let cooldown = false;
    let wasChanged = false;
    files.subscribe(async sources => {
        if(cooldown) return wasChanged = true;
        bundle_sources(sources);
        cooldown = setTimeout(()=>{
            if(wasChanged) bundle_sources(sources);
            cooldown = wasChanged = false;
        },cooldownPeriod);
    });

    return {
        initialized:{subscribe:initialized.subscribe},
        bundling:{subscribe:bundling.subscribe},

        app:{subscribe: appStore.subscribe},
        comp:{},

        loadMalina(ver){return bundler_load_malina(ver)},
    }
}


// Bundler
async function bundle(files){
    
    try {
        if(!rollup) throw new Error("[REPL]: Rollup didn't initialized yet");

        let bundle = await rollup.rollup({
            input: "./App.html",
            external: false,
            inlineDynamicImports: true,
            plugins: [
                module_resolver_plugin(),
                component_plugin(files),
                download_plugin(),
                malina_plugin()
            ]
        });

        return (await bundle.generate({
            format: "iife",
            name: "Component",
            exports: "named",
            sourcemap: false
        })).output[0].code;

    } catch (err) {
        throw err;
    }

}

// Bundler's plugins

// Resolving modules from user components or from repository
function module_resolver_plugin(){
    return {
        name: 'rollup_plugin_module_resolver',
        async resolveId(id, importer){
            // Local file
            if(id.startsWith('./') && (!importer || importer.startsWith('./'))) return id;

            // Local on UNPKG

            if(id.startsWith('./') && /^https?:\/\//.test(importer)) return new URL(id,addSlash(importer)).href;

            // From UNPKG
            return await getModuleURL(`${REPO}/${id}`);
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
            if(!/^https?:\/\//.test(id)) return null;

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

    const options = {
        extensions: ['.html']
    }


    return {
        name: 'rollup_plugin_malina',

        async transform(code, id) {
            if(!options.extensions.find(ext => id.endsWith(ext))) return null;

            let result;

            let opts = {
                exportDefault: true,
                name: id.match(/([^/]+).html$/)[1]
            }
            
            try {
                result = malina.compile(code, opts);
            } catch (e) {
                console.error(e);
                throw new Error(`[MalinaJS] Compile error: ${e.message}: ${e.details}`);
            }
            return {code: result};
        }
    }
}


// Helpers


async function download_module(url){
    const resp = await cash_or_fetch(url);

    if(!resp.ok) throw new Error(resp.status);

    return new Function(resp.body.replace(/sourceMappingURL=$/gm,''));
}

const FCASH = [];
async function cash_or_fetch(url){
    if(FCASH.hasOwnProperty(url)) return FCASH[url];

    const resp = await fetch(url);
    
    const data = {url: resp.url, ok: resp.ok, status:resp.status, body: resp.ok ? await resp.text() : ''};
            
    FCASH[url] = data;
        
    return data;
}

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

function clear(){
    console.clear();
    console.log(`Rollup v.${rollup.VERSION}`);
    console.log(`MalinaJS v.${malina.version}`);
    console.log('------ REPL READY -------');
}