import {getMessageEventsFunctions} from './../lib/messages';
import {loadDependencies,loadMalina} from './deps';
import {compile, compileConfig} from './compiler';
import {bundle} from './bundler';

const {on,emit} = getMessageEventsFunctions();

let initialized = false;

try{
    on("init", data => {
        emit('init');

        initialized = false;
        loadDependencies();
        loadMalina(data && data.malinaVersion || 'latest');
        initialized = true;

        emit('ready',{
            malinaVersion: malina.version,
            rollupVersion: rollup.VERSION,
        });

        emit('malinaVersion',malina.version);
    });

    on('bundle', async files => {
        try{
            const result = await bundle(files);
            emit('bundle',result);
        }catch(err){
            console.error(err);
            emit('error',err.message);
            emit('bundle','');
        }
    });

    on('compile', async data => {
        try {
            let config = data.config ? await compileConfig(data.config) : null;
            let result =  await compile(data.code, data.name, true, config);
            if(result.result) result = result.result;
            emit('compile',result);
        } catch(err) {
            console.error(err);
            emit('error',err.message);
            emit('compile','');
        }
    });
    
    on('malinaVersion', async version => {
        loadMalina( version);
        emit('ready',{
            malinaVersion: malina.version,
            rollupVersion: rollup.VERSION,
        });
    });
}catch(err){
    console.error(err);
    emit('error',err.message)
}

