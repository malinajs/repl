import storik from 'storik';

const DEFAULT = 'App.html';

export let files = filesStore();

function filesStore(){

    let storage = [{name:DEFAULT,body:''}];

    const storageStore = storik(storage);
    const currentStore = storik(storage[0]);
    const listStore = storik([DEFAULT]);

    function indexOfFile(name){
        return storage.findIndex(f => f.name===name);
    }

    function fileExists(name){
        return indexOfFile(name) !== -1;
    }

    function addFile(name,body){
        storage.push({name,body: body ? body : ''});
    }

    function getFile(name){
        const i = indexOfFile(name);
        if(i === -1) return false;
        return storage[i];
    }

    function saveFile(name,body){
        const i = indexOfFile(name);
        if(i === -1) return false;
        storage[i].body = body;
    }

    function renameFile(name,newname){
        const i = indexOfFile(name);
        if(i === -1) return false;
        storage[i].name = newname;
    }

    function deleteFile(name){
        const i = indexOfFile(name);
        if(i === -1) return false;
        storage.splice(i, 1);
    }

    function listFiles(){
        return storage.map(f=>f.name).sort( a => a.name === DEFAULT ? -Infinity : 0);
    }

    return {
        default: DEFAULT,
        subscribe: storageStore.subscribe,
        current: {
            subscribe: currentStore.subscribe,
            set(name){
                if(!fileExists(name)) throw new Error(`${name} is not exists`);
                currentStore.set(getFile(name));
            },
            save(body){
                currentStore.update(file => {
                    saveFile(file.name,body);
                    storageStore.set(storage);
                    file.body=body;
                    return file;
                });
            }
        },
        list: {
            subscribe: listStore.subscribe
        },
        add(name,body){
            if(fileExists(name)) throw new Error(`${name} already exists`);
            addFile(name,body);
            storageStore.set(storage);
            listStore.set(listFiles());
        },
        delete(name){
            if(!fileExists(name)) throw new Error(`${name} is not exists`);
            deleteFile(name);
            storageStore.set(storage);
            listStore.set(listFiles());
            currentStore.update( f => {
                if(f.name === name) f = getFile(DEFAULT);
                return f;
            });
            
        },
        rename(name,newname){
            if(!fileExists(name)) throw new Error(`${name} is not exists`);
            renameFile(name,newname);

            storageStore.set(storage);
            listStore.set(listFiles());
            currentStore.update( f => {
                if(f.name === name) f.name = newname;
                return f;
            });
        },
        get(){return storage},
        touch(){storageStore.set(storage)},
        set(files){
            storage = files;
            storageStore.set(storage);
            currentStore.set(getFile(DEFAULT));
            listStore.set(listFiles());
        },
        exists(name){
            return fileExists(name);
        }
    }
}

