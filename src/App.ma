<script>
    import Panels from './cmp/Panels.ma';
    import Header from './cmp/header/Header.ma';
    import Footer from './cmp/footer/Footer.ma';

    import {examples} from './stores/examples.js';
    import {shares} from './stores/shares.js';
    import {router} from './stores/router.js';

    router.subscribe( slugs => {
        if(slugs[0]==='example' && slugs[1]){
            examples.load(slugs[1]);
        }else if(slugs[0]==='share' && slugs[1]){
            shares.load(slugs[1]);
        }else{
            router.go('/example/1-hello-world'); 
        }
    });
    
</script>

<div class="wrapper">
    <div class="header"><Header/></div>
    <div class="body"><Panels/></div>
    <div class="footer"><Footer/></div>
</div>

<style>
    .wrapper{
        display: flex;
        min-height: 100vh;
        flex-direction: column;
    }

    .header{
        height: 90px;
        border-bottom: 1px solid var(--color-gray);
        background-color: var(--color-lightest);
    }

    .body{
        flex-grow: 1;
        flex-basis: 0;
        position: relative;
    }

    .footer{
        border-top: 1px solid var(--color-gray);
        height: 40px;
    }
</style>