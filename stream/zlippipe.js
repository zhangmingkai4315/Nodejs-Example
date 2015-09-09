var zlib = require('zlib');
var fs=require('fs');
var r=fs.createReadStream('out.err');
var z=zlib.createGzip();
var w=fs.createWriteStream('out.err.gz');
r.pipe(z).pipe(w);

setTimeout(function () {
  r.unpipe(z);
  console.log("If cost more than 10 milsecond,quit");

},0);


//readable stream
// fs child_process zlib crypto tcp http
