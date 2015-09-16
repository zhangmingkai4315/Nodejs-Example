var util=require('util');

var debuglog=util.debuglog('foo');   //当NODE_DEBUG包含有foo时候 下面的debuglog变为console.err

var bar=3;
debuglog("The debug output:%d",bar);


console.log(util.format(1,2,3,4)); //1 2 3 4
console.log(util.format("%s:%s","hello","world","mi!"));  //hello:world mi!

console.log(util.inspect(global,{showHidden:false,depth:false,colors:true}));
