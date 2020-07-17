import child_process  from 'child_process';

let started = false;

export default function examples(production) {
    
    return {
        name: 'examples',
        async writeBundle() {
            if(!started){
                generateExamples(production);
                started = true;
            }            
        }
    };

}

function generateExamples(production){
    child_process.spawn('node examples-generator.js', [production ? 'build':'watch'],{
        stdio: ['ignore', 'inherit', 'inherit'],
        shell: true
    });
}