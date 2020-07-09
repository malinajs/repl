const repo = 'https://unpkg.com';

// Download and init Rollup, Malina compiler and cjs2es
export async function init_bundler(){
    console.log('Iititalizing modules...');

    const deps = [
        ['rollup','rollup/dist/rollup.browser.js'],
        ['cjs2es','cjs2es'],
        ['acorn','acorn'],
        ['astring','astring/dist/astring.min.js'],
        ['malina','malinajs']
    ]

    try {
        for(let dep of deps){
            console.log(`Requiring ${dep[0]}...`);
            ( await download_module(`${repo}/${dep[1]}`) )();
            if(!window[dep[0]]) throw new Error(`Missed dependency: ${dep[0]}`)
        }
        console.log(`Rollup v.${rollup.VERSION}`);
        console.log(`Malina.JS v.${malina.version}`);
    } catch (e) {
        if(e.details) console.log(e.details);
        throw e;
    }

    
}


// Bundler
export async function bundler(files){
    
    try {
        if(!rollup) new Error("Rollup didn't initialized yet");

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
        console.error(err);
        return null;
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
            if(files[id] === undefined) return null;
            return files[id];
        }
    }
}


// Download module's source from repository
function download_plugin() {
    return {
        name: 'rollup_plugin_download',

        async load(id) { 
            if(!/^https?:\/\//.test(id)) return null;
            console.log("Download:",id);

            try {
                const result = await cash_or_fetch(id);
							
                return cjs2es.cjs2es(result.body);
            } catch (err) {
                console.error(err);
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

            console.log("Malina:",id);

            let result;

            let opts = {
                exportDefault: true,
                name: id.match(/([^/]+).html$/)[1]
            }
            
            try {
                result = malina.compile(code, opts);
            } catch (e) {
                if(e.details) console.log(e.details);
                throw e;
            }
            return {code: result};
        }
    }
}


// Helpers

const MCASH = [];
async function download_module(url){
    try {
		if(MCASH.hasOwnProperty(url)) return new Function(MCASH[url]);

        const result = await fetch(url);
        if(!result.ok) throw new Error("Can't download module: "+url)

        const code = await result.text();
            
        MCASH[url] = code.replace(/^[\s\S]+sourceMappingURL[\s\S]+$/g,'');
			
        return new Function(code);
    } catch (err) {
        console.error(err);
        return null;
    }
}

const FCASH = [];
async function cash_or_fetch(url){
    try {
		if(FCASH.hasOwnProperty(url)) return FCASH[url];

        const result = await fetch(url);
        const data = {url:result.url, status:result.status, body:await result.text()};
				
		FCASH[url] = data;
			
        return data;
    } catch (err) {
        console.error(err);
        return null;
    }
}


function addSlash(url){
    if(url.slice(-1) === '/') return url;
    if(/\.[a-z0-9]+$/.test(url)) return url;
    return url+'/';
}

async function getModuleURL(url){
    let result;
  
    // try to find package real URL
    result = await cash_or_fetch(url);
    if(result.status !== 200) return null;
    url = result.url;
  
    // try to find es module
    const regex = /\.js$/
    if(regex.test(url)){
      result = await cash_or_fetch(url.replace(regex,'.mjs'));
      if(result.status === 200) url = result.url;
    }
  
    return url;
  }