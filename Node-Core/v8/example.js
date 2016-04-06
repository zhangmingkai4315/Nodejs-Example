// node 4.0.0版本新加功能
// 返回v8接口获得运行状态

var v8 = require('v8');

console.log(v8.getHeapStatistics());
