import storik from 'storik';

export let router = routerStore();

function routerStore(){

    let slugs = storik([],set => {
        
        set(getSlugsFromHash());

        const handler = () => {
            set(getSlugsFromHash());
        }

        window.addEventListener('hashchange', handler);
        return () => window.removeEventListener('hashchange', handler);
    });


    return{
        subscribe: slugs.subscribe,
        go(path){
            if(path === '') path = '/';
            window.location.hash = path;
            slugs.set(getSlugsFromHash())
        },
        path:'/'+slugs.get().join('/'),
        slugs(num){
            num === undefined ? slugs.get() : slugs.get()[num];
        },
        title(text){
            window.document.title = text ? 'MalinaJS: '+text : 'MalinaJS';
            document
                .querySelectorAll("meta[property='og:title'],meta[name='twitter:title']")
                .forEach( el => el.setAttribute('content',window.document.title));
        }
    }
}

function getSlugsFromHash(){
    const path = window.location.hash.match(/^#\/([a-z0-9-_\/]+[a-z0-9-_])\/?/);
    return path ? path[1].split('/') : [];
}