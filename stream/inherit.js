var Readable=require('stream').Readable;
var util=require('util');
var fs = require('fs');
util.inherits(Cumstorm,Readable);
function Cumstorm(opt) {
  Readable.call(this,opt);
  this._max=100;
  this._index=1;
};

Cumstorm.prototype._read=function(){
  var i=this._index++;
  if(i>this._max){
    this.push(null);
  }else{
    var str='\n'+i;
    var buffer=new Buffer(str,'ascii');
    this.push(buffer);
  }
}
var c=new Cumstorm();
c.pipe(fs.createWriteStream('test1.txt'));
