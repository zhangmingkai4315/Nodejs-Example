var fs = require('fs');
var compressAndEncrypt = require('./CmpandEnc.js').compressAndEncrypt;

fs.createReadStream(process.argv[3])
  .pipe(compressAndEncrypt(process.argv[2]))
  .pipe(fs.createWriteStream(process.argv[3]+".gz.enc"))
  .on("error",function(err){
    console.log(err);
  });
