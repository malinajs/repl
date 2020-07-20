export function getMessageEventsFunctions(target){

    target = target || self;
    
    const listeners = [];

    const on = (event,handler) => {
        listeners.push({event,handler});
    }

    const off = (event,handler) => {
        listeners.filter( l => l.event !== event && l.handler !== handler);
    }

    const emit = (event,data) => {
        target.postMessage({event,details:data});
    }

    target.addEventListener("message", ({data}) => {
        listeners.filter(l => l.event === data.event).forEach(l => l.handler(data.details));
    });

    return {on,off,emit}
}