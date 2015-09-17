var util = require('util');

var debuglog = util.debuglog('foo'); //当NODE_DEBUG包含有foo时候 下面的debuglog变为console.err

var bar = 3;
debuglog("The debug output:%d", bar);


console.log(util.format(1, 2, 3, 4)); //1 2 3 4
console.log(util.format("%s:%s", "hello", "world", "mi!")); //hello:world mi!

// console.log(util.inspect(global, {
//   showHidden: false,
//   depth: false,
//   colors: true
// })); //showHidden 显示非枚举对象  depth :是否迭代显示子对象
function foo(argument) {
  // body...
  console.log(argument);
}

console.log(util.isFunction(foo));   //true
console.log(util.isFunction({}));  //false


console.log(util.isObject({}));   //返回一个true（对象内容而不是函数）
console.log(util.isObject(function hello(argument) {
  // body...
}));  //false


console.log(util.isNullOrUndefined(null));    //true
console.log(util.isNullOrUndefined(undefined)); //true


console.log(util.isError(new Error()));  //true
