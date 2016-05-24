const Readable = require('stream').Readable;
const fs = require('fs');
const util = require('util');
function MyStream(source){
    Readable.call(this);
    this._source = source;
    this._foundLineEnd = false;
    this._buffer = '';
    source.on('readable',function(){
        this.read();
    }.bind(this));
}

MyStream.prototype = Object.create(Readable.prototype,{
    constructor:{
        value:MyStream
    }
});


MyStream.prototype._read = function(size){
    var chunk;
    var line;
    var lineIndex;
    var result;
    if (this._buffer.length === 0){
        chunk = this._source.read();
        this._buffer += chunk;
    }
    lineIndex = this._buffer.indexOf('\n');
    if(lineIndex !== -1){
        line =this._buffer.slice(0,lineIndex);
        if(line){
            result = JSON.parse(line);
            this._buffer=this._buffer.slice(lineIndex+1);
            this.emit('object',result);
            this.push(util.inspect(result));
        }else{
            this._buffer=this._buffer.slice(1);
        }
    }
}


var input = fs.createReadStream(__dirname+'/json-lines.txt',{encoding:'utf8'});

var jsonLineReader = new MyStream(input);
jsonLineReader.on('object',function(data){
    console.log(data);
});
