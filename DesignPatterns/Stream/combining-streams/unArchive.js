var fs = require('fs');
var decryptAndDecompress = require('./CmpandEnc.js').decryptAndDecompress;

fs.createReadStream(process.argv[3])
  .pipe(decryptAndDecompress(process.argv[2]))
  .pipe(fs.createWriteStream(process.argv[3]+".unachived"))
  .on("error",function(err){
    console.log(err);
  });


// multipipe 可以将错误进行直接的绑定 ，我们可以直接使用一个error来管理
