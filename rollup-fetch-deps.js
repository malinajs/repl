const child_process = require('child_process');
const fs = require('fs-extra');
const path = require('path');

const NAME = 'rollup-fetch-deps';

const DIR = path.join('public','modules');

const DEPS = [
    // [SRC, DEST, TODO: need minification]
    ['rollup/dist/rollup.browser.js','rollup.js',false],
    ['acorn/dist/acorn.js','acorn.js',true],
    ['astring/dist/astring.min.js','astring.js',false],
    ['css-tree/dist/csstree.min.js','css-tree.js',false],
]

let once = false;

export default function fetchDeps() {
    
    return {
        name: NAME,
        async writeBundle() {
            if(!once){
                once = true;
                fetchDependencies();
                await fetchMalina();

                console.log(`[${NAME}] All done!`);
            }            
        }
    };

}


function fetchDependencies(){
    fs.mkdirpSync(DIR);
    console.log(`[${NAME}] Copy dependencies...`);
    for(let dep of DEPS){
        const src = path.join('node_modules',...dep[0].split('/'));
        const dest = path.join(DIR,dep[1]);
        if(!fs.existsSync(src)) throw new Error(`[${NAME}] ${src} not found!`);
        fs.copyFileSync(src,dest);
        console.log(`[${NAME}] - Copy ${dep[1]}`);
    }
}

async function fetchMalina(){
    const MDIR = path.join(DIR,'malinajs');
    const LATEST_SRC_DIR = path.join('node_modules','malinajs');
    
    
    console.log(`[${NAME}] Copy MalinaJS latest version`);
    copyMalina(LATEST_SRC_DIR,path.join(MDIR));

    console.log(`[${NAME}] Fetch MalinaJS versions list...`);
    let versions = JSON.parse( await exec('npm view malinajs versions --json') );
    fs.writeFileSync(path.join(MDIR,'versions.json'),JSON.stringify(versions));
    console.log(`[${NAME}] - ${versions.length} versions found.`);

    console.log(`[${NAME}] Downloading all MalinaJS versions...`);

    
    for(let ver of versions){
        const dest_dir = path.join(MDIR,ver)
        if(fs.existsSync(dest_dir)) continue;
        try{
            await downloadMalina(ver,dest_dir);
            console.log(`[${NAME}] - Downloaded v.${ver}`);
        }catch(e){
            console.log(`[${NAME}] - Skipped v.${ver}`);
        }
    }
}

async function copyMalina(src_dir,dest_dir){
    const filesFilter = [
        'malina.js',
        'runtime.js',
        'runtime.part.js'
    ];

    const files = filesFilter.filter( file => fs.existsSync( path.join(src_dir,file) ) );

    if(files.length === 0) throw new Error(`[${NAME}] No any needed files in the package!`);

    fs.mkdirpSync(dest_dir);
    
    for(let file of files){
        fs.copyFileSync(path.join(src_dir,file),path.join(dest_dir,file));
    }
}

async function downloadMalina(ver,dest_dir){
    const tarball = `malinajs-${ver}.tgz`;
    const tarball_path = path.join(DIR,tarball);
    const pkg = path.join(DIR,`package`);
    await exec(`npm pack malinajs@${ver}`,DIR);
    if(!fs.existsSync(tarball_path))  throw new Error(`[${NAME}] Error downloading malinajs v.${ver}!`);
    await exec(`tar -xzf ${tarball}`,DIR);
    fs.unlinkSync(tarball_path);
    if(!fs.existsSync(pkg))  throw new Error(`[${NAME}] Error extracting tarball!`);
    await copyMalina(pkg,dest_dir);
    fs.removeSync(pkg);
}

function exec(command,cwd){
    return new Promise((resolve,reject) => {
        child_process.exec(command,{cwd:cwd ? path.resolve(cwd) : undefined},(err,stdout)=>{
            if(err) reject(err);
            return resolve(stdout);
        })
    });
}
