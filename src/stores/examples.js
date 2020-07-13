import storik from 'storik';

import {files} from './files';
import {errors} from './errors';

export let examples = examplesStore();

function examplesStore(){

    const listStore = storik(null,async set => {
        const index = await fetchExample();
        set( index.sort( (a,b)=>Number(a.file.split('-')[0])-Number(b.file.split('-')[0]) ) );
    });
    
    return {
      list:{
          subscribe: listStore.subscribe
      },
      async load(example_filename){
        if(!example_filename.endsWith('.json')) example_filename = example_filename+'.json';
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
        errors.set(e.message);
    }
}
