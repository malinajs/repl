<script>
    import Filestabs from './Filestabs.ma';
    import Code from './Code.ma';
</script>

<div class="wrapper">
    <div class="editor">
        <div class="tabs"><Filestabs/></div>
        <div class="code"><Code/></div>
    </div>
</div>
<style>
    .wrapper{
        position: relative;
        width: 100%; 
        height: 100%;
    }

    .editor{
        position: absolute;
        top:0px;
        left:0px;
        right: 0px;
        bottom: 0px;
        display: flex;
        flex-direction: column;
    }
    .tabs{
        height: 30px;
    }
    .code{
        flex-grow: 1;
        overflow-y: auto;
        min-height: 0;
    }
</style>