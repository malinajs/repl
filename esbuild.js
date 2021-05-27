const { malinaPlugin } = require('malinajs/malina-esbuild');
const { build } = require('esbuild');
const { derver } = require('derver');
const {fetchDeps} =  require('./fetch-deps');
const {generateExamples} =  require('./examples-generator');

const dev = process.argv.includes('--dev');


(async ()=>{
    // Generating examples 
    generateExamples(!dev);

    // Fetch all Malina's version
    await fetchDeps();

    // Make bundle for application
    const bundleApp = await build({
        entryPoints: ['src/main.js'],
        outfile: 'public/bundle.js',
        minify: !dev,
        incremental: dev,
        sourcemap: dev,
        bundle: true,
        plugins: [
            malinaPlugin({
                hideLabel: !dev
            })
        ]
    });

    // Make bundle for bundle worker
    const bundleWorker = await build({
        entryPoints: ['src/bundler/worker.js'],
        outfile: 'public/bundler_worker.js',
        minify: !dev,
        sourcemap: dev,
        incremental: dev,
        bundle: true
    });


    // Serve in development mode
    if(dev){
        derver({
            dir: 'public',
            watch: ['public','src'],
            onwatch: async (lr,item)=>{
                if(item === 'src'){
                    lr.prevent();
                    try{
                        await bundleApp.rebuild();
                        await bundleWorker.rebuild();
                    }catch(err){
                        console.log(err.message);
                        lr.error(err.toString(),'Build error');
                    }
                }
            }
        })
    }
    
})();