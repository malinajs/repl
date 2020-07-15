import {files} from './files';
import {errors} from './errors';
import {router} from './router';

export let shares = sharesStore();

const BOXID = 'box_c58ead21d91d66a931e0';

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
        const result = await fetch(`https://jsonbox.io/${BOXID}`,{
            method: 'POST',
            headers: {
                'content-type': 'application/json',
            },
            body: json
        });
        if(result.ok) {
            const answer = await result.json();
            if(!answer._id) throw new Error('Wrong answer from Jsonbox');
            cash[answer._id] = json;
            return answer._id;
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
            const result = await fetch(`https://jsonbox.io/${BOXID}/${id}`,{
                method: 'GET',
                headers: {
                    'content-type': 'application/json',
                }
            });
            if(result.ok) {
                const answer = await result.json();
                if(answer.length === 0) throw new Error(`Shared code not found.`);
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
