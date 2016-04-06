var fs = require('fs');
var child_process = require('child_process');
var assert = require('assert');

var child = child_process.spawn('grep', ['ssh']);
console.log("Child process's pid=" + child.pid);

child.on('close', function (code, signal) {
  console.log("Child receive signal:" + code + signal);
});
child.on('exit', function (code, signal) {
  console.log("Child receive signal:" + code + signal);
});

child.kill('SIGHUP');

// assert.equal(child.stdio[1],child.stdin,"STDOUT");
// assert.equal(child.stdio[0],null,"STDIN");

var n = child_process.fork(__dirname + '/sub.js');

n.on('message', function (m) {
  console.log(m);
});
n.send({ hello:'world' });
