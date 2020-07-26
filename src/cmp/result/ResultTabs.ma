<script>
    import {bundler} from './../../stores/bundler.js';

    const modes = {
        application: 'Result',
        component: 'Component source'
    }

    let mode = 'application';

    function onMount(){
        $onDestroy(bundler.mode.subscribe( m => {
            mode = m;
        }));
    }
</script>

<div>
    {#each Object.keys(modes) as m}
    <span class:active={mode === m} @click={bundler.mode.set(m)}>{modes[m]}</span>
    {/each}
</div>

<style>
    div{
        width: 100%;
        display: flex;
        height: 30px;
        background-color: var(--color-gray);
        border-left: 1px solid var(--color-gray);
        margin-left: -1px;
        padding: 0;
    }

    span{
        display: block;
        flex-grow: 1;
        flex-basis: 0;
        height: 30px;
        line-height: 30px;
        text-align: center;
        margin: 0;
        background-color: var(--color-light);
        cursor:pointer;
    }
    
    span.active{
        background-color: white;
    }
</style>