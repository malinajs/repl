const repo = 'https://unpkg.com';

// Download and init Rollup, Malina compiler and cjs2es
export async function init_bundler(){

    const deps = [
        ['rollup','rollup/dist/rollup.browser.js'],
        ['cjs2es','cjs2es'],
        ['acorn','acorn'],
        ['astring','astring/dist/astring.min.js'],
        ['malina','malinajs']
    ]

    console.log('Initializing REPL...');
    
    for(let dep of deps){
        try {
            const module = await download_module(`${repo}/${dep[1]}`);
            module();
        } catch (e) {
            throw new Error(`[REPL]: Can't load dependency: ${dep[0]}`);
        }

        if(!window[dep[0]]) throw new Error(`[REPL]: Dependency not initialized: ${dep[0]}`)
    }

    console.log(`Rollup v.${rollup.VERSION}`);
    console.log(`Malina.JS v.${malina.version}`);
    console.log('------ REPL READY -------');
     
}

// Bundler
export async function bundler(files){
    
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
            return await getModuleURL(`${repo}/${id}`);
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
                throw new Error(`[MalinaJS] Compile error: ${e.details}`);
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