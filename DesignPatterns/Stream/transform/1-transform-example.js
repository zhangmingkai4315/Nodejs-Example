// transform steam是一种特殊双向流，设计为了处理双向的数据转移
// 为了构建自己的Duplex类我们需要定义自己的_read() 和_write()
// 为了构建自己的Transform 类我们需要实施另一对_transform()和_flush()

var stream = require('stream');
var util = require('util');

function ReplaceStream(searchString,replaceString){
  stream.Transform.call(this,{decodeStrings:false});
  this.searchString=searchString;
  this.replaceString=replaceString;
  this.tailPiece="";
}
util.inherits(ReplaceStream,stream.Transform);



// 当调用write的时候触发该函数的调用，并将数据push到内部的buffer
// 监听on("data")时候获得buffer的数据

ReplaceStream.prototype._transform=function(chunk,encoding,callback){
  var pieces=(this.tailPiece+chunk).split(this.searchString);
  var lastPiece=pieces[pieces.length-1]
  var tailPieceLen=this.searchString.length-1;
  this.tailPiece=lastPiece.slice(-tailPieceLen);
  pieces[pieces.length-1]=lastPiece.slice(0,-tailPieceLen)
  this.push(pieces.join(this.replaceString));
    console.log("Transform")
  callback();
};
// flush将在数据传递结束时候被调用
ReplaceStream.prototype._flush = function (callback) {
  this.push(this.tailPiece);
  console.log("FLUSH")
  callback();
};


var rs =new ReplaceStream('world','node.js');
rs.on('data',function(chunk){
  console.log(chunk.toString());
});

rs.write('Hello w');
rs.write('orld!');
rs.end();
