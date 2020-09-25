import storik from 'storik';

import {DEPS_REPO} from './../config';

import {initBundlerWorker} from './../bundler/client';

import {files} from './files';
import {errors} from './errors.js';
import {router} from './router.js';
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

            let bundleCallback = ()=>{};
            let compileCallback = ()=>{};

            const clear = function(){
                console.clear();
                console.log(`Rollup v.${versions.get().rollup}`);
                console.log(`MalinaJS v.${versions.get().malina}`);
                console.log('------ REPL READY -------');
            }
            
            const thBundle = asyncThrottle(sources => new Promise((resolve)=>{
                bundleCallback = ()=>resolve(true);
                errors.set(null);
                clear();
                emit('bundle',sources);
            }));


            const thCompile = asyncThrottle(file => new Promise((resolve)=>{
                compileCallback = ()=>resolve(true);
                errors.set(null);
                clear();
            
                let filenameParts = file.name.split('.');                
                if(!/^(?:html|ma|xht)$/.test(filenameParts.pop())){
                    setOutput({component:'/* Choose component to see its compiled version */'});
                    resolve(true);
                }else{
                    emit('compile',{
                        code: file.body, 
                        name: filenameParts.join('.')
                    }); 
                }
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

            on('bundle', code => {
                setOutput({application: code});
                bundleCallback();
            });

            on('compile', code => {
                setOutput({component: code});
                compileCallback();
            });
    
            mode.subscribe(files.touch);
    
            files.subscribe(async sources => {
                if(!output.get().ready) return;
                    
                if( mode.get() === 'application' ) 
                    thBundle(sources);
                else
                    thCompile(files.current.get())  
            });

            files.current.subscribe(async file => {
                if(!output.get().ready) return;
                if( mode.get() === 'component' ) thCompile(file)       
            });
            
            setOutput({ready: false});
            emit('init', {malinaVersion: router.version()});
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
