var stream = require('stream')
var util= require("util");
// var random =require("")
var chance = function(){
  return Math.random()*1000;
}

var RandomStream=function(options){
  stream.Readable.call(this,options)
};
util.inherits(RandomStream,stream.Readable);

RandomStream.prototype._read=function(size){
  var number="Number : "+ chance()+"\n";
  console.log("Pushing chunk of size "+number.length)
  this.push(number,'utf8');
  if(Math.random()>0.99){
    this.push(null)
  }
}

var randomStream = new RandomStream();
randomStream.on('readable',function(){
  var chunk;
  while ((chunk=randomStream.read())!==null) {
    console.log("Chunk recived: "+chunk.toString())
  }
})


// 这里我们使用RandomReadable来继承了stream.Readable类并重载了其——
// _read()函数 通过内部的push()操作来写入数据，而通过写入null代表
// 结束输入
