import {checkDependency} from './deps';

export async function compile(code, name, treeshaked, configFn){
    checkDependency('malina');

    let opts = {
        exportDefault: true,
        inlineTemplate: true,
        autoSubscribe: true,
        name,
        localConfig: false,
        autoimport: (name) => `import ${name} from './${name}.xht';`
    }

    try {
        if (configFn) opts = configFn(opts, name);
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
    console.log(code);
    let ast = acorn.parse(code, {sourceType: 'module', ecmaVersion: 'latest'});
    return astring.generate(ast);
}

export async function compileConfig(code) {
    let bundle = await rollup.rollup({
        input: "./__entry.js",
        external: false,
        treeshake: false,
        plugins: [
            {
                name: 'resolver',
                async resolveId(id) {
                    return id;
                }
            }, {
                name: 'files',
                async load(id) { 
                    if (id == './__entry.js') return code;
                    throw new Error(`[Bundler]: File ./${id} does not exist.`);
                }
            }
        ]
    });

    let r = await bundle.generate({
        format: 'iife',
        name: 'configFn',
        sourcemap: false
    });

    eval(r.output[0].code);
    return configFn;
}
