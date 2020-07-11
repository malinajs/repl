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
                if(storage[name] === undefined) throw new Error(`${name} is not exists`);
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
        add(name,body){
            if(storage[name] !== undefined) throw new Error(`${name} already exists`);
            storage[name] = body ? body : '';
            storageStore.set(storage);
            listStore.set(Object.keys(storage));
        },
        delete(name){},
        rename(name,newname){},
        get(){return storage},
        touch(){storageStore.set(storage);},
        set(files){
            storage = files;
            storageStore.set(storage);
            currentStore.set({name: DEFAULT, body:storage[DEFAULT]});
            listStore.set(Object.keys(files));
        }
    }
}
