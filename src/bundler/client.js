import {getMessageEventsFunctions} from './../lib/messages';

export function initBundlerWorker(callback){
    const worker = new Worker("bundler_worker.js");
    callback(getMessageEventsFunctions(worker));
    return ()=>worker.terminate();
}