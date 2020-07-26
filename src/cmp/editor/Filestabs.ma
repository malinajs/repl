<script>
    import Icon from './../icons/Icon.ma';
    import Filetab from './Filetab.ma';
    import {files} from './../../stores/files.js';

    let list = [];

    $onDestroy(files.list.subscribe(files => {
        list = files;
    }));

    function addFile(){
        let name = 'Comp';
        let num = ''
        while(list.includes(`${name}${num}.html`)){
            num = num ? ++num : 2;
        }
        name = `${name}${num}.html`;
        files.add(name);
        files.current.set(name);
    }
</script>

<div>
    {#each list as tab}
    <Filetab file={tab}/>
    {/each}
    <button class="add" title="Add component" @click:addFile><Icon name="plus" size="20"/></button>
</div>

<style>

    div{
        height: 30px;
        background-color: var(--color-gray);
        padding: 0px;
        white-space: nowrap;
        overflow:hidden;
    }

    .add{
        background-color: var(--color-gray);
        color: var(--color-lightest);
        border: none;
        font-weight: bold;
        font-size: 20px;
        line-height: 27px;
        width: 27px;
        height: 27px;
        padding: 0px;
        cursor: pointer;
    }
</style>