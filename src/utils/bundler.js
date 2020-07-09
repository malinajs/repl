const repo = 'https://unpkg.com';

// Download and init Rollup, Malina compiler and cjs2es
export async function init_bundler(){
    await init_rollup();
    await init_cjs2es();
    await init_malina_compiler();
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

async function init_malina_compiler(version){
    console.log('Iititalizing MalinaJS...');
    /* const malina_url = `${repo}/malinajs`;
   
    try {
        if(version === 'latest'){
            version = JSON.parse((await cash_or_fetch(`${malina_url}/package.json`)).body).version;
        }

        ( await download_module(`${malina_url}@${version}/compiler.full.js`) )(); 
    } catch (err) {
        console.error(err);
    }*/

    try {
        ( await download_module(`//localhost:7000/bin/malina.js`) )(); 
        console.log(`MalinaJS v.${malina.version}`);
    } catch (e) {
        if(e.details) console.log(e.details);
        throw e;
    }
}


async function init_rollup(){
    console.log('Iititalizing Rollup...');
    const rollup_url = `${repo}/rollup/dist/rollup.browser.js`;

    try {
        ( await download_module(rollup_url) )(); 
    } catch (e) {
        if(e.details) console.log(e.details);
        throw e;
    }
}

async function init_cjs2es(){
    console.log('Iititalizing CJS2ES...');

    const cjs2es_url = `${repo}/cjs2es`;

    try {
        ( await download_module(cjs2es_url) )(); 
    } catch (e) {
        if(e.details) console.log(e.details);
        throw e;
    }
}

const MCASH = [];
async function download_module(url){
    try {
		if(MCASH.hasOwnProperty(url)) return new Function(MCASH[url]);

        const result = await fetch(url);
        if(result.status !== 200) new Error("Can't download module: "+url)

        const code = await result.text();

        if(!/^\(function/.test(code)) new Error("Wrong data for module: ."+url);
            
        MCASH[url] = code;
			
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