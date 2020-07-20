import {DEPS_REPO} from './../config';

const DEPS = ['rollup','acorn','astring','csstree','cjs2es'];

export function isLoaded(dep){
    return self[dep] !== undefined;
}

export function checkDependency(dep){
    if(!isLoaded(dep)) throw new Error(`[REPL]: Dependency not initialized: ${dep}`);
}

export function checkDependencies(){
    for( let dep of DEPS ){
        checkDependency(dep);
    }
}

export function loadDependencies(){
    for( let dep of DEPS ){
        importScripts(`${DEPS_REPO}/${dep}.js`);
        checkDependency(dep);
    }
    self['css-tree'] = self['csstree'];
}

export function loadMalina(ver){
    ver = ver || 'latest';

    if(isLoaded('malina')){
        if(malina.version === ver) return;
        delete self['malina'];
    }
    
    try {
        importScripts(`${DEPS_REPO}/malinajs/${ver}/malina.js`);
    } catch (e) {
        throw new Error(`[REPL]: Can't load MalinaJS v.${ver}`);
    }

    checkDependency('malina');
}

let verCash;
export async function getMalinaVersions(){
    if(!verCash){
        try{
            const resp = await fetch(`${DEPS_REPO}/malinajs/versions.json`);
            verCash = resp.ok ? await reap.json() : [];
        }catch(e){
            console.error(e);
            verCash = [];
        }
    }
    return verCash;
}