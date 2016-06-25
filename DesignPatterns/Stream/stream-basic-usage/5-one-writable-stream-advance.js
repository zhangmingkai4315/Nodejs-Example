var fs = require('fs');
var util = require('util');
var stream = require('stream');
var path = require('path');

// object 模式允许我们直接写入js对象
var ToFileStream = function(){
  stream.Writable.call(this,{objectMode:true});
}

var objs = (function(){
  var objArray=[];
  for (var i =0 ;i <100;i++){
    var tempobj={path:"./file-"+i+".txt",content:"This is file "+i}
    objArray.push(tempobj)
  }
  return objArray;
})()

util.inherits(ToFileStream,stream.Writable);

ToFileStream.prototype._write=function(chunk,encoding,callback){
  var self =this;
  fs.writeFile(chunk.path,chunk.content,callback);
}

var tfs= new ToFileStream();

objs.map(function(obj){
  tfs.write(obj);
});

tfs.end(function(){
  console.log("All file created!");
});

// 这里我们显示设置流式处理的方式是objectMode
// 每次调用的时候都是直接将数据对象直接通过write写入流中
// 当调用end的时候代表数据传递完毕
