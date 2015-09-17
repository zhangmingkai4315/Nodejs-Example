var net = require('net');
var server=net.createServer(function (c) {
  console.log("ClientConnected");
  c.on('end',function () {
    console.log("ClientOffLine");
  });
  c.write('Hello client!\n');
  c.end();

}).listen(3000,function () {
  console.log("Server bound!");
  console.log("Info:%j",server.address());
});

server.on("error",function (e) {
  if(e.code=='EADDRINUSE'){
    console.log('Address in use ,retrying');
    setTimeout(function () {
      server.close();
      server.listen(3000);
    },1000);
  }
});
