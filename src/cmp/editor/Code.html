<script>
    import {CodeJar} from 'codejar';
    import {highlight} from './../../lib/highlight.js';

    import {files} from './../../stores/files.js';


    let ext = 'html';
    files.current.subscribe(f => {
        ext = f.name.split('.').pop();
        if(!['html','js','json'].includes(ext)) ext = 'html';
    });

    function codeJarAction(node){

        function inputHandler(){
            files.current.save(node.textContent);
        }

        const editor = new CodeJar(node,e => {
           e.innerHTML = highlight(
               (ext === 'js' || ext === 'json') ? 'javascript':'malina', 
               e.textContent
            );
        },{tab: ' '.repeat(4)});

        node.addEventListener('input',inputHandler);
        node.style.resize = 'none';

        const unsbcr = files.current.subscribe(file => {
            if(editor.toString() !== file.body) editor.updateCode(file.body);
        });

        return{
            destroy: () => {
                node.removeEventListener('input',inputHandler);
                unsbcr();
            }
        }
    }
</script>

<div *codeJarAction></div>

<style>
    div{
        width: 100%;
        min-height:100%;
        resize: none;
        border: 0;

        font-family: 'Source Code Pro', monospace;
        font-size: 16px;
        font-weight: 400;
        letter-spacing: normal;
        line-height: 20px;
        padding: 10px;
        tab-size: 4;
    }
</style>