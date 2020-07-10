import storik from 'storik';

const DEFAULT = 'App.html';

export let files = filesStore();

function filesStore(){

    let storage = {};
    storage[DEFAULT] = ''

    const storageStore = storik(storage);
    const currentStore = storik({name: DEFAULT, body:storage[DEFAULT]});
    const listStore = storik([DEFAULT]);

    return {
        subscribe: storageStore.subscribe,
        current: {
            subscribe: currentStore.subscribe,
            set(name){
                if(storage[name] === undefined) throw new Error(`${name} is not exist`);
                currentStore.set({name, body:storage[name]});
            },
            save(body){
                currentStore.update(file => {
                    storage[file.name]=body;
                    file.body=body;
                    return file;
                });
                storageStore.set(storage);
            }
        },
        list: {
            subscribe: listStore.subscribe
        },
        add(name,body){},
        delete(name){},
        rename(name,newname){},
        get(){return storage},
        touch(){storageStore.set(storage);},
        loadJSON(json){
            
        }
    }
}

