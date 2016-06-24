const http = require("http")
const zlib =require("zlib")
const fs =require("fs");
const path =require("path");
const crypto=require("crypto");
const file= process.argv[2];

const options={
  hostname:"localhost",
  port : 3000,
  path:"/",
  method:"PUT",
  headers:{
    filename:path.basename(file),
    'Content-Type':'application/octet-stream',
    'Content-Encoding':"gzip"
  }
}

console.log(options)
const req= http.request(options,function(res){
  console.log("Server response with: "+res)
});

fs.createReadStream(file)
  .pipe(zlib.createGzip())
  .pipe(crypto.createCipher("aes192","a_shared_key"))
  .pipe(req)
  .on('finish',function(){
    console.log("File success send!")
  })
