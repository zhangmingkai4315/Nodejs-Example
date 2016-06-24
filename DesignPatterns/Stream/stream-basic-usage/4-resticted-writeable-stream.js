var stream =require("stream");
var util = require('util');
var http = require("http");
var port = process.Port||5000;
var chance=function(){
  return Math.random();
}
var bigString=(function(){
  var bs="";
  for(var i =0;i<1000;i++)
    bs=bs+":"+Math.random();
    return bs;
})();

var server = http.createServer(function(req,res){

  res.writeHead(200,{'Content-Type':'text/plain'});
  function generateMore(){
    while(chance()<0.9){
      var shouldContinue=res.write(bigString);
      if(!shouldContinue){
        console.log("Backpressure");
        return res.once('drain',generateMore);
      }
    }
    res.end('\n-----END-----\n',function(){
      console.log("All data was send")
    })
  }
  generateMore();
})

server.listen(port,function(){
  console.log("Server is listen on "+ port)
});



// 当我们一次性的处理过多的数据的时候，触发了buffer>highwatchmark
// 返回的write值为false
// 我们可以调用drain事件捕获数据处理完毕的事件
// 使用once可以传递
