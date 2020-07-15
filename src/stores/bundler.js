import storik from 'storik';

import {files} from './files';
import {errors} from './errors.js';

export let bundler = bundleStore();



const REPO = 'https://unpkg.com';

const DEPS = [
    ['rollup','rollup/dist/rollup.browser.js'],
    ['cjs2es','cjs2es'],
    ['acorn','acorn'],
    ['astring','astring/dist/astring.min.js'],
    ['csstree','css-tree/dist/csstree.min.js','css-tree']
]


function bundleStore(){
    const initialized = storik(false,init);
    const buzy = storik(false);
    const mode = storik('application');
    const malinaVer = storik(null);

    const output = storik('', init);

    // Load rollup and malinajs with dependencies
    async function init(){
        if(initialized.get()) return;
            
        console.log('Initializing REPL...');

        for(let dep of DEPS){
            try {
                ( await download_module(`${REPO}/${dep[1]}`) )();
                if(dep[2]) window[dep[2]] = window[dep[0]];
            } catch (e) {
                console.error(e);
                throw new Error(`[REPL]: Can't load dependency: ${dep[0]}`);
            }
        }
        await load_malina(files.meta.get('version'));
    }

    // Load specified MalinaJS version
    async function load_malina(ver){
        ver = ver || 'latest';
        if(malinaVer.get() === ver) return;
        delete window['malina'];
        malinaVer.set(null);
        try {
            ( await download_module(`${REPO}/malinajs@${ver}`) )();
        } catch (e) {
            initialized.set(false);
            console.error(e);
            throw new Error(`[REPL]: Can't load MalinaJS v.${ver}`);
        }

        if(check_dependencies()) files.touch();
    }

    // Check that all dependencies are loaded
    async function check_dependencies(){
        for(let dep of DEPS.concat([['malina','malinajs']])){
            if(!window[dep[0]]){
                initialized.set(false);
                throw new Error(`[REPL]: Dependency not initialized: ${dep[0]}`);
            }
        }
        initialized.set(true);
        
        malinaVer.set(malina.version);

        clear();
    
        return true;
    }

    //bundle application from sources with cooldown timeout between rapidly calls
    const bundle_sources = cooldown(async sources => {
        if(!initialized.get()) return;
        buzy.set(true);
        errors.set(null);
        clear();
        try {
            const code = await bundle(sources);
            output.set(code);
        }catch(e){
            errors.set(e.message);
            console.error(e);
        }
        buzy.set(false);
    });

    //compile current component from file source with cooldown timeout between rapidly calls
    const compile_file = cooldown(async file => {
        if(!initialized.get()) return;
        buzy.set(true);
        errors.set(null);
        clear();
        try {
            let code = compile(file.body,file.name);
            output.set( astring.generate( acorn.parse(code, {sourceType: 'module'}) ) );
        }catch(e){
            errors.set(e.message);
        }
        buzy.set(false);
    });
    

    let unApp = ()=>{};
    let unComp = ()=>{};
    mode.subscribe(m => {
        if(m === 'application'){
            unComp();
            unApp = files.subscribe(async sources => {
                bundle_sources(sources);
            });
        }else{
            unApp();
            unComp = files.current.subscribe(async file => {
                if(file.name.endsWith('.html'))
                    compile_file(file);
                else
                    output.set('/* Choose component to see its compiled version */');
            });
        }
    });

    return {
        subscribe: output.subscribe,
        initialized,
        buzy:{subscribe:buzy.subscribe},

        mode: mode,
        malina: {
            load: load_malina,
            version:{
                subscribe:malinaVer.subscribe,
                get:malinaVer.get,
                list: getMalinaVersions
            } 
        }
    }
}




// MalinaJS Compiler
function compile(code,filename){

    let opts = {
        exportDefault: true,
        inlineTemplate: true,
        name: filename.match(/([^/]+).html$/)[1]
    }

    try {
        return malina.compile(code, opts);
    } catch (e) {
        console.error(e);
        throw new Error(`[MalinaJS] Compile error: ${e.message}: ${e.details}`);
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
            return {code: compile(code,id)};
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

let verCash;
async function getMalinaVersions(){
    if(!verCash){
        try{
            const html = await cash_or_fetch(`${REPO}/browse/malinajs/`);
            const json = html.body.match(/"availableVersions":(\[[^\]]+\])/);
            verCash = json ? JSON.parse(json[1]) : [];
        }catch(e){
            console.error(e);
            return [];
        }
    }
    return verCash;
}

function clear(){
    console.clear();
    console.log(`Rollup v.${rollup.VERSION}`);
    console.log(`MalinaJS v.${malina.version}`);
    console.log('------ REPL READY -------');    
}


function cooldown(callback,timeout){
    let inCooldown = false;
    let wasRequested = false;

    timeout = timeout || 500;

    return function(){
        if(inCooldown) return wasRequested = true;
        callback.apply(null,arguments);
        inCooldown = setTimeout(()=>{
            if(wasRequested) callback.apply(null,arguments);
            inCooldown = wasRequested = false;
        }, timeout);
    }
}