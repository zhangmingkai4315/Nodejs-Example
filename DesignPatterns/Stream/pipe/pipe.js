// pipe()函数从一个可读的数据流中读取数据并写入一个可写的流
// readable.pipe(writable,[options])
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
  callback();
};
// flush将在数据传递结束时候被调用
ReplaceStream.prototype._flush = function (callback) {
  this.push(this.tailPiece);
  callback();
};


var rs =new ReplaceStream(process.argv[2], process.argv[3]);
process.stdin.pipe(rs).pipe(process.stdout);
// console : echo "hello world this is mike "|node pipe.js mike alice
// output: hello world this is alice
