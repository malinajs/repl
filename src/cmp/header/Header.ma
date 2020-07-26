<script>
    import Examples from './ExamplesList.ma';
    import Github from './Github.ma';

    import {files} from './../../stores/files.js';
    import {router} from './../../stores/router.js';
    import {examples} from './../../stores/examples.js';
    import {shares} from './../../stores/shares.js';

    let modified;
    files.modified.subscribe( s => modified=s );

    let title;
    let ver;
    files.meta.subscribe( meta => {
        title = meta.title || 'MalinaJS Application'
    });

  
    let slug;
    let param;
    router.subscribe( slugs => {
        slug = slugs[0];
        param = slugs[1];
    });

    function saveTitle(e){
        const newtitle = e.target.innerText;
        if(newtitle !== title) {
            modified = true;
            files.meta.update({title:newtitle});
        }
    }

    function reset(){
        if(slug === 'example') examples.load(param);
        if(slug === 'share') shares.load(param);
    }

    let saving = false;
    async function saveShare(){
        saving = true;
        const id = await shares.save();
        router.go(`/share/${id}`);
        saving = false;
    }
</script>


<div style="float: left">
    <h1 @click:router.go>
        <img src="branding/malinajs_logo_notext.svg"/>
        malina.js
    </h1>
    <div class="header">
        {#if slug === 'example' && !modified}
            Select an example: <Examples/>
        {:else}
            <span class="title" contenteditable="true" @blur:saveTitle>{title}</span>
            {#if modified}
                <button @click:saveShare>{saving ? 'Saving...' : 'Share'}</button>
                <button @click:reset>Reset</button>
            {/if}
        {/if}
    </div>
</div>
<div style="float: right">
    <Github/>
</div>


<style>
    h1{
        cursor: pointer;
        line-height: 35px;
        font-weight: 300;
    }

    img{
        height: 30px;
        margin: 0 5px 5px 10px;
        vertical-align: middle;
    }

    .header{
        margin-left: 10px;
        height: 55px;
        line-height: 55px;
    }

    .title{
        border: 1px solid rgb(0,0,0,0);
        padding: 5px;
        font-size: 24px;
        color: var(--color-light);
        margin-left: -5px;
    }

    .title:hover,.title:focus{
        border-color: var(--color-gray);
    }

    button{
        height: 24px;
        line-height: 24px;
        padding: 0 5px;
    }
</style>