console.time("start");
setTimeout(function () {
  console.log("1000 setTimeout");
  console.timeEnd("start");
},1000);
setImmediate(function () {
  console.log("1000 setImmediate");
  console.timeEnd("start");
},1000);

var i=setInterval(function () {
  console.log("1000 setInterval");
    console.timeEnd("start");
  clearInterval(i);

},1000);


var unreftimeout=setTimeout(function () {
  console.log("3666000 setTimeout");
  console.timeEnd("start");
},36000000);

unreftimeout.unref();
