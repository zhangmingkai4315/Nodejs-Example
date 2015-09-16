var zlib = require('zlib');
var gzip = zlib.createGzip();
var fs = require('fs');
var input = fs.createReadStream('input.txt');
var output = fs.createWriteStream('input.txt.gz');
try {
  input.pipe(gzip).pipe(output);
} catch (e) {
  console.log(e);
} finally {
  console.log("Gzip finished!");
};


var input = '.................................';
zlib.deflate(input, function(err, buffer) {
  if (!err) {
    console.log(buffer.toString('base64'));
  }
});


var buffer= new Buffer('eJzT0yMAAGTvBe8=','base64');

// zlib.unzip(buffer,function (err,buffer) {   //unzip 将解压不管是deflate还是gzip的压缩
//   if(!err){
//     console.log(buffer.toString());
//   }
//   else{
//     console.log(err);
//   }
// });


zlib.inflate(buffer,function (err,buffer) {
  if(!err){
    console.log(buffer.toString());
  }
  else{
    console.log(err);
  }
});




//Output:
// Gzip finished!
// eJzT0yMAAGTvBe8=
// .................................

//windowBits 和memLevel 将影响处理的速度 压缩比
