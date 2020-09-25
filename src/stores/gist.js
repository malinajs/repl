
import {files} from './files';
import {bundler} from './bundler';
import {router} from './router';

export const gist = {
    async load(id) {
        router.title('Loading shared code...');

        let data = null;
        try {
            const result = await fetch(`https://api.github.com/gists/${id}`, {
                method: 'GET',
                headers: {
                    'content-type': 'application/json',
                }
            });
            if(result.ok) data = await result.json();
        } catch (e) {
            console.error(e);
        };

        if(data) {
            const fileList = Object.values(data.files).map(f => {
                return {
                    name: f.filename,
                    body: f.content
                };
            });

            files.set(fileList, {title: data.description});
            router.title(data.description);
        } else {
            files.set([{name:"App.xht", body:"<!-- Write something cool! -->"}], {title: ''});
            router.title('Oops! Error to load gist!');
        }
    }
};
