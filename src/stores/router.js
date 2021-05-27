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
            window.document.title = text ? 'Malina.js: '+text : 'Malina.js';
            document
                .querySelectorAll("meta[property='og:title'],meta[name='twitter:title']")
                .forEach( el => el.setAttribute('content',window.document.title));
        },
        version(){
            return getURL().searchParams.get('version');
        }
    }
}

function getSlugsFromHash(){
    const path = getURL().pathname.slice(1);
    return path ? path.split('/') : [];
}

function getURL(){
    return new URL(window.location.hash.slice(1),'http://domain.tld');
}