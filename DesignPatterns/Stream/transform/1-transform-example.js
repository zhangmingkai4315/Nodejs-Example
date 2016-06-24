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

ReplaceStream.prototype._transform=function(chunk,encoding,callback){
  var pieces=(this.tailPiece+chunk).split(this.searchString);
  var lastPiece=pieces[pieces.length-1]
  var tailPieceLen=this.searchString.length-1;
  this.tailPiece=lastPiece.slice(-tailPieceLen);
  pieces[pieces.length-1]=lastPiece.slice(0,-tailPieceLen)
  this.push(pieces.join(this.replaceString));
  callback();
};

ReplaceStream.prototype._flush = function (callback) {
  this.push(this.tailPiece);
  callback();
};

var rs =new ReplaceStream('world','node.js');
rs.on('data',function(chunk){
  console.log(chunk);
});

rs.write('Hello w');
rs.write('orld!');
rs.end();
