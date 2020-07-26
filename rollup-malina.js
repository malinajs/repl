
const malinajs = require('malinajs/malina.js')

export default function malina(option = {}) {
    return {
        name: 'malina',
        transform(code, id) {
            if(!id.endsWith('.html') &&  !id.endsWith('.ma')) return null;
            let result;

            let opts = Object.assign({
                exportDefault: true,
                name: id.match(/([^/]+).(html|ma)$/)[1]
            }, option);
            try {
                result = malinajs.compile(code, opts);
            } catch (e) {
                if(e.details) console.log(e.details);
                throw e;
            }
            return {code: result};
        }
    };
}