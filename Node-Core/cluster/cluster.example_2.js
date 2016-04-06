var http = require('http');
var cluster = require('cluster');

if (cluster.isMaster) {
  var worker = cluster.fork();
  worker.send('hi there');
  worker.kill();

} else if (cluster.isWorker) {
  process.on('message', function (msg) {
    process.send(msg);
  });
}
cluster.on('exit', function (worker, code, signal) {
  if (worker.suicide === true) {
    console.log('main kill it');
  }
});
process.on('message', function (msg) {
  console.log(msg+'G');
});
