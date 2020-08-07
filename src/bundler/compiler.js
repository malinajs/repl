import {checkDependency} from './deps';

export async function compile(code,name,treeshaked,context){

    checkDependency('malina');

    let opts = {
        exportDefault: true,
        inlineTemplate: true,
        autoSubscribe: true,
        name,
        $context: context || {}
    }
    
    try {
        const result =  await malina.compile(code, opts);
        return treeshaked ? await treeshake(result) : result;
    } catch (e) {
        console.error(e);
        throw new Error(`[MalinaJS] Compile error: ${e.message}: ${e.details}`);
    }
}

async function treeshake(code){
    checkDependency('rollup');
    let bundle = await rollup.rollup({
        input: "./made_by_AlexxNB.js",
        external: ()=>true,
        plugins: [{
            name: 'plugin',
            async resolveId(id) {return id},
            async load(id) {return id === './made_by_AlexxNB.js' ? code : ''}
        }],
        onwarn: ()=>{}
    });
    const result = (await bundle.generate({format: "es"})).output[0].code;
    return astring.generate( acorn.parse(result, {sourceType: 'module'}) )
}