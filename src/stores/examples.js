import storik from 'storik';

import {files} from './files';

export let examples = examplesStore();

function examplesStore(){

    let listStore = storik(null,async set => {
        const index = await fetchExample();
        set( index.sort( (a,b)=>Number(a.file.split('-')[0])-Number(b.file.split('-')[0]) ) );
    });
    
    return {
      list:{
          subscribe: listStore.subscribe
      },
      async load(example_filename){
        const example = await fetchExample(example_filename);
        files.set(example.files);
      }
    }
}


let cash = {};
async function fetchExample(file){
    file = file || 'index.json';

    if(cash[file]) return cash[file];

    try{
        const result = await fetch(`examples/${file}`);
        if(result.ok) {
            return cash[file] = await result.json();
        }else{
            throw new Error(`No example found in ${file}`);
        }
    } catch (e) {
        if(e.details) console.log(e.details);
        throw e;
    }
}
