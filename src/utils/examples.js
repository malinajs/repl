export async function fetchExample(file){
    file = file || 'index.json';

    try{
        const result = await fetch(`examples/${file}`);
        if(result.ok) {
            return await result.json();
        }else{
            throw new Error(`No example found in ${file}`);
        }
    } catch (e) {
        if(e.details) console.log(e.details);
        throw e;
    }
}