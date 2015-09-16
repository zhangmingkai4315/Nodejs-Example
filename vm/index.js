var vm = require('vm');
var util = require('util');

var localVar="localVAR";

var vmResult=vm.runInThisContext('localVar="vmVar";');

console.log(vmResult);
console.log(localVar); //vm执行不会访问本地的localScope

var evalResult=eval('localVar="EvalVar"');
console.log(evalResult);
console.log(localVar);   //eval执行可以访问本地全局变量并将会覆盖本地的变量


var sandbox={
  globalVar:1
};

vm.createContext(sandbox);

for (var i=0;i<10;i++) {
  vm.runInContext('globalVar=globalVar*2',sandbox);   //runInContext参数集合包含一个sandbox
}

console.log(util.inspect(sandbox));


var sandBox2={
  animal:'cat',
  number:4
}

vm.runInNewContext('number*=10',sandBox2);   //如果参数不存在则创建一个新的环境
console.log(util.inspect(sandBox2));
