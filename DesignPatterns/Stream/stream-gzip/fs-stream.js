const fs= require("fs")
const zlib =require("zlib")
const fileName="./hello.txt"


fs.createReadStream(fileName)
  .pipe(zlib.createGzip())
  .pipe(fs.createWriteStream(fileName+'.gz'))
  .on("finish",function(){
    console.log("file success compressed");
  })

// 使用stream的方式可以将原有的数据一次性读入改为流式读入
