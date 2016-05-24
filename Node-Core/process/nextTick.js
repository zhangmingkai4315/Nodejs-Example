console.log('Start');
process.nextTick(function () {
  console.log('Next Tick callback');
});

console.log('Sechduled');

// for(var i=0;i<100000;i++){
//   continue;
// }


function asyncReal(data, callback) {
  process.nextTick(function () {
      console.log('nextTick');
      callback(data === 'foo');
    });
}

asyncReal('foo', function (com) {
  console.log(com);
});





var cal = function (time) {
  var timer = 0;
  var i = setInterval(function () {
    console.log(timer);
    timer++;
  }, 1000);
};

cal(5000);
