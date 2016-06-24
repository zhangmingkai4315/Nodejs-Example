var stream =require("stream");
var util = require('util');
var http = require("http");
var port = process.Port||5000;
var chance=function(){
  return Math.random();
}

var server = http.createServer(function(req,res){
  var numberRandom=chance();
  res.writeHead(200, {'Content-Type': 'text/plain'});
  while(numberRandom<0.99){
    res.write(numberRandom+"\n");
    numberRandom=chance()
  }
  res.end("This is the end of random server response \n")
  // res.send("")
  res.on("finish",function(){
    console.log("All data has send out")
  })
})

server.listen(port,function(){
  console.log("Server is listen on "+ port)
});

// http.ServerResponse is a Writable stream
// 我们可以直接向res中写入数据使用write方法即可
// 当结束时候调用res.end()方法结束输入
// 内部使用_write方法写入

// 当finish方法被执行的时候标示数据已经刷新到socket中
