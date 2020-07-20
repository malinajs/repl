import storik from 'storik';

import {DEPS_REPO} from './../config';

import {initBundlerWorker} from './../bundler/client';

import {files} from './files';
import {errors} from './errors.js';
import { asyncThrottle } from '../lib/optimization';

export let bundler = bundleStore();

function bundleStore(){
    const mode = storik('application');
    const versions = storik({malina:'unknown',rollup: 'unknown'});
     let malinaVerChanger = ()=>{};

    const output = storik({
        application:'', 
        component: '',
        ready: false
    }, startWorker);

    function setOutput(obj){
        output.update(result => Object.assign(result,obj));
    }

    function startWorker(){
        return initBundlerWorker( async ({on,emit}) =>{

            const clear = function(){
                console.clear();
                console.log(`Rollup v.${versions.get().rollup}`);
                console.log(`MalinaJS v.${versions.get().malina}`);
                console.log('------ REPL READY -------');
            }
            
            const thBundle = asyncThrottle(sources => new Promise((resolve)=>{
                errors.set(null);
                clear();
                emit('bundle',sources);
                on('bundle', code => {
                    setOutput({application: code});
                    resolve(true);
                });
            }));


            const thCompile = asyncThrottle(file => new Promise((resolve)=>{
                errors.set(null);
                clear();


                let filenameParts = file.name.split('.');
                if(filenameParts.pop() !== 'html'){
                    setOutput('component','/* Choose component to see its compiled version */');
                    resolve(true);
                }else{
                    emit('compile',{
                        code: file.body, 
                        name: filenameParts.join('.')
                    }); 
                }
                
                on('compile', code => {
                    setOutput({component: code});
                    resolve(true);
                });
            }));

            


            on('error',e => errors.set(e));
            on('init',()=>setOutput({ready: false}));
    
            on('ready',data => {
                setOutput({ready: true});
                clear();
                versions.set({ malina:data.malinaVersion, rollup:data.rollupVersion });
                malinaVerChanger = ver => emit('malinaVersion', ver || 'latest');
                files.touch();
            });
    
            mode.subscribe(files.touch);
    
            files.subscribe(async sources => {
                if(!output.get().ready) return;
    
                let currentMode = mode.get();
                
                if( currentMode === 'application' ) 
                    thBundle(sources);
                else
                    thCompile(files.current.get())
                
                    
            });
            
            setOutput({ready: false});
            emit('init');
        });
    }
    
    return {
        subscribe: output.subscribe,
        ready: ()=>output.get().ready,
        mode: mode,
        versions: versions,
        malina: {
            load: ver => malinaVerChanger(ver),
            list: getMalinaVersions
        }
    }
}

let verCash;
async function getMalinaVersions(){
    if(!verCash){
        try{
            const resp = await fetch(`${DEPS_REPO}/malinajs/versions.json`);
            verCash = resp.ok ? resp.json() : [];
        }catch(e){
            console.error(e);
            verCash =  [];
        }
    }
    return verCash;
}
