import storik from 'storik';

import {files} from './files';
import {errors} from './errors';
import {router} from './router';
import {bundler} from './bundler';

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
        router.title('Example - Loading...');
        if(!example_filename.endsWith('.json')) example_filename = example_filename+'.json';
        const example = await fetchExample(example_filename);
        files.set(example.files,{title:example.name});
        if(bundler.initialized.get()) bundler.malina.load();
        router.title('Example - '+example.name);
      }
    }
}


let cash = {};
async function fetchExample(file){
    file = file || 'index.json';

    if(!cash[file]) {
        try{
            const result = await fetch(`examples/${file}`);
            if(result.ok) {
                cash[file] = await result.text();
            }else{
                throw new Error(`Example not found in ${file}`);
            }
        } catch (e) {
            errors.set(e.message);
        }
    }

    return JSON.parse(cash[file]);
}
