
process.stdin.on('readable',function(){
  var chunk;
  console.log('New data available')
  while ((chunk=process.stdin.read())!==null) {
    console.log('Chunk read :(' + chunk.length+')'
    +'\n"'+chunk.toString()+'"');

  }
}).on('end',function(){
  process.stdout.write('End\n')
});

// 读取数据返回buffer 或者字符串，使用read()方法来管理输入
// read()方法同步读取数据到内部的buffer
