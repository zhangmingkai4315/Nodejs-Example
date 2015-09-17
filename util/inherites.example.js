var events = require('events');
var util = require('util');
function MyStream(){
  // events.EventEmitter.call(this); //如果不使用domain则此
}
util.inherits(MyStream,events.EventEmitter);

MyStream.prototype.write=function (data) {
  this.emit('data',data);
};
var stream=new MyStream();
console.log(stream instanceof events.EventEmitter);
console.log(MyStream.super_===events.EventEmitter);

stream.on('data',function (data) {
  console.log("Data from event:"+data);
});

stream.write("It works")
