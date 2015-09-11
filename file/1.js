var fs = require('fs');

fs.rename('test2.txt','test2.txt',function (err) {    //重命名文件
  if(err){
    console.log("Error");
    throw err
  }
  console.log("File rename Success");
});

fs.stat('./test2.txt',function (err,stats) {
  if(err) throw err;
  console.log(stats);
});


fs.unlink('./out.err',function (err) {   //删除文件
  if(err) throw err;
  console.log("File delete Success");
  fs.writeFile('./test2.txt',"hello world",function (err) {    //文件写入
    if(err) throw err;
    console.log("It 's saved'");
  });
});



fs.appendFile('./test2.txt',"Data append",function (err) {
  if(err) throw err;
  console.log("The data to append was appended ");
});


fs.watchFile('./test2.txt',function (curr,prev) {
  console.log("File changed");
  console.log(curr);

  console.log(prev);
});

fs.watch('./file',{persistent:true,recursive:false},function (curr,prev) {
  console.log("Dir changed");
});

fs.access('./file',fs.X_OK,function (err) {
  require('util').debug(err?'no acces!':'can read and write');
});
