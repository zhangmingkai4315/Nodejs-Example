var heapdump = require('heapdump');
var string = '1 string to rule them all';
var leakArry=[];

var count=2;
setInterval(function(){
	leakArry.push(string.replace(/1/g,count++));
},0);

setInterval(function(){
	if(heapdump.writeSnapshot()) console.log('Got snapshot!');
},10000);
