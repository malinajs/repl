const fs = require('fs');
const path = require('path');
const watch = require('node-watch');

const NAME = 'examples-generator';

const DIR = path.join('src','examples');
const OUTPUT = path.join('public','examples');

const mode = process.argv[2] === 'watch' ? 'watch' : 'build';

if(mode === 'build'){
    generateExamples();
    process.exit(0);
}

if(mode === 'watch'){
    generateExamples();;
    watch(DIR, { recursive: true }, function(_,name) {
        generateExamples(name);
    });
}

function generateExamples(){

    if(!fs.existsSync(OUTPUT)) {fs.mkdirSync(OUTPUT)};

    console.log(`[${NAME}] Building examples...`);

    const index = [];
    const list = fs.readdirSync(DIR);
    for(let filename of list){
        const exPath = path.join(DIR,filename);
        if(fs.lstatSync(exPath).isDirectory()){
            if(!fs.existsSync(path.join(exPath,'App.ma'))) {
                console.log(`[${NAME}] Skipping example ${filename}: No App.ma file`);
                continue;
            }

            let name = getExampleName(filename);

            const result ={
                name: name,
                files: []
            }
            
            const files = fs.readdirSync(exPath);
            for(let file of files){
                if(!['.ma','.html','.js'].includes(path.extname(file))) continue;
                let body = fs.readFileSync(path.join(exPath,file),'utf-8');
                body = body.replace(/^<!--(.+)-->\s*\r*\n/,'');
                result.files.push({name:file, body});
            }

            fs.writeFileSync(path.join(OUTPUT,`${filename}.json`),JSON.stringify(result));
            index.push({name,file:filename})
            console.log(`[${NAME}]  - ${name} -> ${filename}.json`);
        }
    }
    fs.writeFileSync(path.join(OUTPUT,`index.json`),JSON.stringify(index));
}

function getExampleName(filename){
    const appFile = path.join(DIR,filename,'App.ma');
    const appCode = fs.readFileSync(appFile,'utf-8');

    appCode.replace(/^<!--(.+)-->\s*\r*\n/, (_,name) => filename = name.trim());

    return filename;
}