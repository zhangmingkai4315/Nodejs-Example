var stream = require('stream');
GreenStream.prototype=Object.create(stream.Duplex.prototype,{
    constructor:{
        value:GreenStream
    }
});

function GreenStream(){
    stream.Duplex.call(this);
    this.waiting=false;
}
GreenStream.prototype._write=function(chunk,encoding,callback){
    this.waiting=false;
    this.push('\u001b[32m'+chunk+'\u001b[39m');
    callback();
};
GreenStream.prototype._read = function(size){
    // if(this.waiting===false){
    //     this.push('Feed me data!>');
    //     this.waiting=true;
    // }
};

process.stdin.pipe(new GreenStream()).pipe(process.stdout);