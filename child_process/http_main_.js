var net = require('net');
var child_process = require('child_process').fork('./child_process/http_child_.js');

var server=net.createServer();
server.on('connection',function (socket) {
  socket.end("Handle by father");
});

server.listen(8000,function () {
  child_process.send('server',server);
});
