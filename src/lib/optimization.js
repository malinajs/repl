export function asyncThrottle(fn){
    let nextArguments = null;
    let running = false

    async function run(){
        nextArguments = null;
        running = true;
        await fn.apply(null,arguments);
        running = false;
        if(nextArguments !== null) run.apply(null,nextArguments);
    }

    return function(){
        nextArguments=arguments;
        if(!running) run.apply(null,nextArguments);
    }
}