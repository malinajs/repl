import {files} from './files';
import {bundler} from './bundler';
import {errors} from './errors';
import {router} from './router';

export let shares = sharesStore();

function sharesStore(){

    return {
        async save(){
            return await saveShare({files: files.get(), meta: files.meta.get()});
        },
        async load(id){
            router.title('Loading shared code...');
            const share = await fetchShare(id);
            if(share){
                files.set(share.files,share.meta);
                router.title(share.meta.title);

                if(bundler.ready()) {
                    const version = share.meta.version || router.version();
                    let activeVersion = bundler.versions.get();
                    activeVersion = activeVersion && activeVersion.malina;

                    if(version && version !== activeVersion) {
                        bundler.malina.load(version);
                    }
                }
            }else{
                const title = 'Oops! Shared code not found!';
                files.set([{name:"App.html",body:"<!-- Write something cool! -->"}],{title});
                router.title(title);
            }
            
        }
    }
}


let cash = {};

async function saveShare(shareObj){
    const json = JSON.stringify(shareObj);
    try{
        const result = await fetch(`https://repl.malina.workers.dev/gist`,{
            method: 'POST',
            headers: {
                'content-type': 'application/json',
            },
            body: json
        });
        if(result.ok) {
            const answer = await result.json();
            if(!answer.gid) throw new Error('Wrong answer from API');
            cash[answer.gid] = json;
            return answer.gid;
        }else{
            throw new Error(`Error while saving your share. Try again.`);
        }
    } catch (e) {
        errors.set(e.message);
        return null;
    }
}

async function fetchShare(id){

    if(!cash[id]) {
        try{
            const result = await fetch(`https://repl.malina.workers.dev/gist/${id}`,{
                method: 'GET'
            });
            if(result.ok) {
                const answer = await result.json();
                if(answer.length === 0) throw new Error(`Shared code not found.`);
                answer.files = answer.files.map(file => {
                    if(file.name === 'App.html' || file.name === 'App.ma') {
                        file.name = 'App.xht';
                    }
                    return file;
                });
                cash[id] = JSON.stringify({meta:answer.meta,files:answer.files});
            }else{
                throw new Error(`Error while loading shared code.`);
            }
        } catch (e) {
            errors.set(e.message);
            return false;
        }
    }
    return JSON.parse(cash[id]);
}
