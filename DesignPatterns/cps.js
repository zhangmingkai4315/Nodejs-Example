var a=10,b=10;

var add=function(a,b){
  console.log('Calling...');
  return a+b;
};

var sys_cps_func=function(a,b,callback){
  callback(a,b);
};
console.log('Before sys cps call');
sys_cps_func(a,b,add);
console.log('After sys cps call');
// -----------------------------异步cps

function addAsync(a,b,callback){
  setTimeout(function(){
    callback(a,b);
  },100);
}
console.log('Before async cps call');
addAsync(a,b,add);
console.log('After async cps call');

// -----------------------------Bad Example
// 如果一个函数既可以表现为异步也可以表现为同步则会导致一些不能预测的状态发生。

var fs = require('fs');
var cache={};
function inconsistentRead(filename,callback){
  if(cache[filename]){
    callback(cache[filename]);
  }else{
    fs.readFile(filename,'utf8',function(err,data){
      cache[filename]=data;
      callback(data);
    })
  }
}
// 上述的函数中如果回调函数中也包含一些同步或者异步操作的话，将使得程序变得非常不稳定。可将上述函数转为同步函数
function inconsistentReadSync(filename,callback){
  if(cache[filename]){
    callback(cache[filename]);
  }else{
    var data=fs.readFileSync(filename,'utf8');
    cache[filename]=data;
    callback(data);
  }
}

// 或者我们全部的转换为异步：

  function inconsistentReadAsync(filename,callback){
    if(cache[filename]){
      process.nextTick(function(){
        callback(cache[filename])
      });
    }else{
      fs.readFile(filename,'utf8',function(err,data){
        cache[filename]=data;
        callback(data);
      });
    }
  }

  
