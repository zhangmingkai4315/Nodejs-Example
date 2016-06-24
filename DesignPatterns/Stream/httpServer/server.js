const http = require("http")
const zlib =require("zlib")
const fs =require("fs");
const crypto = require("crypto");
const server = http.createServer(function(req,res){
  console.log(req)
  var fileName=req.headers.filename;
  console.log('File request recived: '+fileName)
  req.pipe(crypto.createDecipher('aes192','a_shared_key'))
     .pipe(zlib.createGunzip())
     .pipe(fs.createWriteStream(fileName+".uploaded"))
     .on("finish",function(){
       res.writeHead(201,{'Content-Type':'text/plain'});
       res.end("That is it!\n")
       console.log("File saved: "+fileName)
     })
})

server.listen(3000,function(){
  console.log("Server is listening on port:3000\n");
});

// 注意解压处理和解密操作的顺序和步骤
