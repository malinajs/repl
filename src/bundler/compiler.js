import {checkDependency} from './deps';

export async function compile(code,name,treeshaked){

    checkDependency('malina');

    let opts = {
        exportDefault: true,
        inlineTemplate: true,
        autoSubscribe: true,
        name,
        localConfig: false,
        injectRuntime: treeshaked ? null : '$runtime.configure({onerror: (e) => {window.malina_onerror && malina_onerror(e)}})'
    }
    
    try {
        let result =  await malina.compile(code, opts);
        if(result.result) result = result.result;
        return treeshaked ? await treeshake(result) : result;
    } catch (e) {
        console.error(e);
        throw new Error(`[MalinaJS] Compile error: ${e.message}: ${e.details}`);
    }
}

async function treeshake(code){
    checkDependency('rollup');
    let bundle = await rollup.rollup({
        input: "./app.js",
        external: ()=>true,
        plugins: [{
            name: 'plugin',
            async resolveId(id) {return id},
            async load(id) {return id === './app.js' ? code : ''}
        }],
        onwarn: ()=>{}
    });
    const result = (await bundle.generate({format: "es"})).output[0].code;
    return pretify(result);
}

function pretify(code){
    //TODO remove fix when https://github.com/davidbonnet/astring/issues/335 will be resolved
    //FIX dynamic import in astring
    code = code.replace(/ import\(/g,' import_dynamic(');

    console.log(code);
    let ast = acorn.parse(code, {sourceType: 'module', ecmaVersion:2020});
    code =  astring.generate(ast);
    
    //FIX dynamic import in astring
    code = code.replace(/ import_dynamic\(/g,' import(');

    return code;
}