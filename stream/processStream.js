var stream = require('stream');
GreenStream.prototype=Object.create(stream.Writable.prototype,{
    constructor:{
        value:GreenStream
    }
});

function GreenStream(){
    stream.Writable.call(this);
}
GreenStream.prototype._write=function(chunk,encoding,callback){
    process.stdout.write('\u001b[32m'+chunk+'\u001b[39m');
    callback();
};
process.stdin.pipe(new GreenStream());