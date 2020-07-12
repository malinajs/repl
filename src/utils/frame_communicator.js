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

    const dispatch = (event,data) => {
        iframe.contentWindow.postMessage({event,data,frame_id}, "*");
    }

    window.addEventListener('message', message_handler);
    iframe.addEventListener('load',()=> dispatch('init'));
    
    callback({on,off,dispatch});
    

    return {
        destroy(){
            window.removeEventListener('message', message_handler); 
            listeners = [];
        },
        update(new_callback){
            listeners = [];
            new_callback({on,off,dispatch});
        }
    }
}


export function getSrcdoc(){
    return `<!doctype html>
<html style="height: auto !important">

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

    const dispatch = (event,data) => {
        source.postMessage({event,data,frame_id}, "*");
    }

    window.addEventListener('message', (e) => {
        if(e.data.frame_id && e.data.event){
            if(!frame_id) frame_id = e.data.frame_id;
            if(!source) source = e.source;
            listeners.filter(lnr => lnr.event===e.data.event).forEach(lnr => lnr.callback(e.data.data));
        }
    });

    window.addEventListener('error', (e) => {
        dispatch('error',`[Application] ${e.message.replace(/^[a-z0-9 ]+?: /i,'')}`);
    });

    on('bundle',bundle => {
        document.body.innerText = '';
        const App = new Function(bundle+'; return Component.default;')();
        new App(document.body);
    });
}
