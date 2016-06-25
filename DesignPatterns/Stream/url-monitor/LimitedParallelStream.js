var stream = require('stream');
var util = require('util');

function LimitedParallelStream(concurrency,userTransform){
  stream.Transform.call(this,{objectMode:true});
  this.userTransform=userTransform;

  this.concurrency=concurrency;
  this.continueCallback=null;

  this.running = 0 ;
  this.terminalCallback=null;
}
util.inherits(LimitedParallelStream,stream.Transform);

// 增加一个计数器
// 执行远程监控函数
// onComplete是当监控数据获取到后执行的收尾函数
LimitedParallelStream.prototype._transform=function(chunk,encoding,done){
  this.running++;
  console.log(chunk+'.....')
  this.userTransform(chunk,encoding,this._onComplete.bind(this));
  if(this.running<this.concurrency){
      done();
  }else{
    this.continueCallback=done()
  }
  // done();
}

// 当数据流结束的时候触发，
// 如果这时候running!==0代表尚有任务没有完成我们不去执行terminalCallback
// 直到下面的函数执行判断 是否===0
LimitedParallelStream.prototype._flush=function(done){
  if(this.running>0){
    this.terminalCallback=done;
  }else{
    done();
  }
}


// 当获得查询的结果时候执行
// 当有错误发生的时候使用emit来发出信号
//
LimitedParallelStream.prototype._onComplete=function(err){
  this.running--;
  console.log('.....')
  if(err){
    return this.emit("error",err);
  }

  var tmpCallback=this.continueCallback;
  this.continueCallback=null;
  tmpCallback&&tmpCallback();


  if(this.running===0){
    this.terminalCallback&& this.terminalCallback();
  }
}

module.exports=LimitedParallelStream;
