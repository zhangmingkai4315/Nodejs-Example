const http = require('http');
const zlib = require('zlib');
const fs = require('fs');
const util = require('util');
const stream = require('stream');
const express = require('express');
const app = express();
util.inherits(StatStream,stream.Readable);

function StatStream(limit){
    stream.Readable.call(this);
    this.limit=limit;
}

StatStream.prototype._read = function(size){
    if(this.limit === 0){
        this.push(null);
    } else {
        this.push(util.inspect(process.memoryUsage()));
        this.push('n');
        this.limit--;
    }
};

util.inherits(Counter,stream.Readable);
function Counter(opt) {
  stream.Readable.call(this, opt);
  this._max = 1000000;
  this._index = 1;
}

Counter.prototype._read = function() {
  var i = this._index++;
  if (i > this._max)
    this.push(null);
  else {
    var str = '' + i;
    var buf = new Buffer(str, 'ascii');
    this.push(buf);
  }
};

// http.createServer((req,res) => { 
//     if(req.url==='/'){
//         res.writeHead(200,{'content-encoding':'gzip'});
//         fs.createReadStream(__dirname+'/index.html').pipe(zlib.createGzip()).pipe(res);
//     }else if(req.url === '/usage'){
//         var stateStream = new StatStream(10);
//         stateStream.pipe(res);
//         res.end();
//     }
// }).listen(8000);


app.get('/usage',(req,res) =>{
  var count = new Counter();
  count.pipe(res);
});
app.listen(8000);