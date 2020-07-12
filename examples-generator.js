const fs = require('fs');
const path = require('path');
const watch = require('node-watch');

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
    console.log(`Building examples...`);
    const index = [];
    const list = fs.readdirSync(DIR);
    for(let name of list){
        const exPath = path.join(DIR,name);
        if(fs.lstatSync(exPath).isDirectory()){
            if(!fs.existsSync(path.join(exPath,'App.html'))) {
                console.log(`Skipping example ${name}: No App.html file`);
                continue;
            }

            const result ={
                name: name,
                files: []
            }
            
            const files = fs.readdirSync(exPath);
            for(let file of files){
                if(!['.html','.js'].includes(path.extname(file))) continue;
                result.files.push({name:file, body: fs.readFileSync(path.join(exPath,file),'utf-8')});
            }
            fs.writeFileSync(path.join(OUTPUT,`${name}.json`),JSON.stringify(result));
            index.push({name,file:`${name}.json`})
            console.log(` - ${name}.json`);
        }
    }
    fs.writeFileSync(path.join(OUTPUT,`index.json`),JSON.stringify(index));
}