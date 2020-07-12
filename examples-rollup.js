import child_process  from 'child_process';

let started = false;

export default function examplesRollup(watch) {
    
    return {
        name: 'examples',
        async writeBundle() {
            if(!started){
                generateExamples(watch);
                started = true;
            }            
        }
    };

}

function generateExamples(watch){
    child_process.spawn('node examples-generator.js', [watch ? 'watch':'build'],{
        stdio: ['ignore', 'inherit', 'inherit'],
        shell: true
    });
}