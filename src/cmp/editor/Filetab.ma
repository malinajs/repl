<script>
    import Icon from './../icons/Icon.ma';
    import {files} from './../../stores/files.js';

    export let file;

    let active = false;
    let current = null;

    let editing = false;
    let newname = file;
    let valid = true;

    $: active = current === file;
    $: active,()=>{if(!active) editing = false}

    files.current.subscribe(({name}) => {
        current = name;
    });

    function deleteFile(name){
        if(confirm(`Are you really want to delete ${name}?`)){
            files.delete(name);
        }
    }

    function setCurrentFile(){
        if(active) return false;
        files.current.set(file)
    }
    
    function setEditing(){
        if(editing) return;
        newname = file;
        if(file !== files.default) editing = true; 
    }

    function saveFilename(){
        editing = false;
        if(newname !== file && isValid(newname)){
            files.rename(file,newname);
        }
    }
    
    function inputWidthAction(node){
        const handler = ()=>node.style.width = `${node.value.length+1}ch`;
        node.addEventListener('input',handler);
        handler();
        
        setTimeout(()=>{
            node.focus();
            node.setSelectionRange(0,node.value.lastIndexOf('.'));
        },0)
        
        return {destroy(){node.removeEventListener('input',handler)}}
    }

    function isValid(name){
        if(newname === file) return true;
        if(!/\.(html|js|json)$/.test(name)) return false;
        return !files.exists(name);
    }
</script>

<div class:active @click:setCurrentFile title="./{file}">
{#if active}
    {#if editing}
        <input 
            class:invalid={!isValid(newname)} 
            bind:value={newname} 
            @blur:saveFilename
            @keydown|enter:saveFilename
            *inputWidthAction
        />
    {:else}
        <span @click:setEditing>{file}</span>
    {/if}

    {#if file !== files.default}
        <span class="delete" @click={deleteFile(file)}><Icon name="close" size="18"/></span>
    {/if}
{:else}
    {file}
{/if}
</div>

<style>
    div{
        display: inline-block;
        height: 28px;
        line-height: 28px;
        border: none;
        background-color: var(--color-light);
        border-radius: 3px 3px 0px 0px;
        cursor: pointer;
        margin: 2px 2px 0px 0px;
        padding: 0px 5px;
    }

    input{
       padding:1px 3px;
       font-family: 'Courier New', Courier, monospace;
       border: 1px solid var(--color-dark);
       height: 24px;
    }

    .invalid{
        color:red;
    }

    .active{
        background-color: var(--hl-background);
    }

    .delete{
        color: var(--color-light);
    }

    .delete:hover{
        color:var(--color-dark);
    }
</style>