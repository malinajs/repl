const child_process = require('child_process');
const fs = require('fs-extra');
const https = require('https');
const path = require('path');

const NAME = 'rollup-fetch-deps';

const DIR = path.join('public','modules');

const DEPS = [
    // [SRC, DEST, TODO: need minification]
    ['rollup/dist/rollup.browser.js','rollup.js',false],
    ['acorn/dist/acorn.js','acorn.js',true],
    ['astring/dist/astring.min.js','astring.js',false],
    ['css-tree/dist/csstree.min.js','csstree.js',false],
    ['cjs2es/dist/cjs2es.mjs','cjs2es.js',false]
]

module.exports.fetchDeps = async function() {
    
    fetchDependencies();
    await fetchMalina();
    console.log(`[${NAME}] All done!`);

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
    const UNSTABLE_SRC_DIR = path.join('node_modules','malinajs');
    const LATEST_DIR = path.join(MDIR,'latest');
    const UNSTABLE_DIR = path.join(MDIR,'unstable');
    const UNSTABLE_MALINA = path.join(UNSTABLE_DIR,'malina.js');
    
    
    console.log(`[${NAME}] Copy MalinaJS unstable version`);
    copyMalina(UNSTABLE_SRC_DIR,UNSTABLE_DIR);
    fs.writeFileSync(UNSTABLE_MALINA,fs.readFileSync(UNSTABLE_MALINA,'utf-8').replace(
        /const version \= \'\d+\.\d+\.\d+\'\;/g,
        "const version = 'unstable';"
    ));

    let extversions = [];
    const extDir = path.join('extversion');
    fs.existsSync(extDir) && fs.readdirSync(extDir).forEach(version => {
        console.log(`  * ${version}`);
        fs.copySync(path.join('extversion', version), path.join(MDIR, version));
        extversions.push(version);
    });

    console.log(`[${NAME}] Fetch MalinaJS versions list...`);
    let versions = JSON.parse( await exec('npm view malinajs versions --json') );
    let latest = versions[versions.length-1];
    versions = versions.concat(extversions);
    fs.writeFileSync(path.join(MDIR,'versions.json'),JSON.stringify(versions));
    console.log(`[${NAME}] - ${versions.length} versions found.`);

    console.log(`[${NAME}] Downloading all MalinaJS versions...`);

    if( versions.filter(v => !fs.existsSync(path.join(MDIR,v))).length > 3){
        console.log(`[${NAME}] Downloading archive from REPL repository...`);
        await downloadMalinaFromRepo();
    }
    

    console.log(`[${NAME}] Downloading missing versions from NPM...`);
    
    
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

    fs.removeSync(LATEST_DIR);
    fs.copySync(path.join(MDIR,latest),LATEST_DIR);
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

async function downloadMalinaFromRepo(){
    const url = 'https://github.com/malinajs/repl/archive/gh-pages.tar.gz';
    const tarball = `malinajs-archive.tar.tgz`;
    const tarball_path = path.join(DIR,tarball);
    const tarball_dir = path.join(DIR,'repl-gh-pages');
    const archive_dir = path.join(tarball_dir,'modules','malinajs');
    const MDIR = path.join(DIR,'malinajs');

    await downloadFile(url,tarball_path);
    if(!fs.existsSync(tarball_path))  throw new Error(`[${NAME}] Error downloading malinajs archive from repo!`);
    await exec(`tar -xzf ${tarball}`,DIR);
    fs.unlinkSync(tarball_path);
    if(fs.existsSync(archive_dir)) {
       const files = fs.readdirSync(archive_dir);
       for(let file of files){
            if(!file.match(/^\d+\.\d+\.\d+$/)) continue;
            if(!fs.existsSync(path.join(MDIR,file))){
                fs.copySync(path.join(archive_dir,file),path.join(MDIR,file));
            }
       }
    }
    fs.removeSync(tarball_dir);
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

function downloadFile(url, dest) {
	return new Promise((fulfil, reject) => {
		https
			.get(url, response => {
				const code = response.statusCode;
				if (code >= 400) {
					reject({ code, message: response.statusMessage });
				} else if (code >= 300) {
					downloadFile(response.headers.location, dest).then(fulfil, reject);
				} else {
					response
                        .pipe(fs.createWriteStream(dest))
						.on('finish', () => fulfil())
						.on('error', reject);
				}
			})
			.on('error', reject);
	});
}