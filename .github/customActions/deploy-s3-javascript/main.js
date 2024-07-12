const core = require('@actions/core');
// const github = require('@actions/github'); // you can use this to access some github actions info if you wish
const exec = require('@actions/exec'); 

function run(){
    //1. get some input values
    const bucket = core.getInput('bucket', {required: true}); 
    const bucketRegion = core.getInput('bucket', {required: true});
    const distFolder = core.getInput('dist-folder', {required: true});

    // 2. upload files to aws 
    const s3Uri = `s3://${bucket}`; 
    exec.exec(`aws s3 sync ${distFolder} ${s3Uri} --region ${bucketRegion}`); 

    core.notice("A notice from my custom JavaScript Action!"); 
}

run(); 