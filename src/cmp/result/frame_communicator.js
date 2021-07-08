let uid = 1;

export function frameCommunicator(iframe,callback){
    const frame_id = uid++;

    let listeners = [];

    const message_handler = (e) => {
        if(e.data.frame_id && e.data.event && e.data.frame_id === frame_id){
             listeners.filter(lnr => lnr.event === e.data.event).forEach(lnr => lnr.callback(e.data.data));
        }
    }

    const on = (event,callback) => {
        listeners.push({event,callback});
    }

    const off = (event,callback) => {
        listeners = listeners.filter(lnr => (lnr.event !== event || lnr.callback !== callback));
    }

    const emit = (event,data) => {
        iframe.contentWindow.postMessage({event,data,frame_id}, "*");
    }

    window.addEventListener('message', message_handler);
    iframe.addEventListener('load',()=> {
        emit('init');
        callback({on,off,emit});
    }); 

    return {
        destroy(){
            window.removeEventListener('message', message_handler); 
            listeners = [];
        },
        update(new_callback){
            listeners = [];
            new_callback({on,off,emit});
        }
    }
}


export function getSrcdoc(){
    return `<!doctype html>
<html>

    <head>
        <meta charset='utf-8'>
        <base href='/' />
    </head>

    <scr`+`ipt>
        (${frame_inner.toString()})();
    </scr`+`ipt>

    <body></body>
</html>    
`;
}


/* must be clean function */
function frame_inner(){
    let frame_id;
    let source;
    let listeners = [];

    function on (event,callback) {
        listeners.push({event,callback});
    }

    const emit = (event,data) => {
        source.postMessage({event,data,frame_id}, "*");
    }

    window.addEventListener('message', (e) => {
        if(e.data.frame_id && e.data.event){
            if(!frame_id) frame_id = e.data.frame_id;
            if(!source) source = e.source;
            listeners.filter(lnr => lnr.event===e.data.event).forEach(lnr => lnr.callback(e.data.data));
        }
    });

    const emitError = (e) => {
        emit('error',`[Application] ${e.message.replace(/^[a-z0-9 ]+?: /i,'')}`);
    };

    window.addEventListener('error', emitError);

    window.malina_onerror = (e) => {
        console.error(e);
        emitError(e);
    }

    window.addEventListener('click', (e) => {
        emit('click');
    });

    for(let type of ['log','warn','error','debug']){
        const def = `default_${type}`;
        console[def] = console[type].bind(console);
        console[type] = function(){
            console[def].apply(console, arguments);
            emit('console','' /*TODO: object serialization*/);
        }
    }

    on('bundle',bundle => {
        if(!bundle) return;
        for(let style of document.querySelectorAll('style[id]')) style.parentNode.removeChild(style);
        eval(bundle);
    });
}
