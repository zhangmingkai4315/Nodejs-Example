var net = require('net');
var client = net.connect({ port:3000 }, function () {
  console.log('Connnect to server');
  client.write('World!');

});
client.on('data', function (data) {
  console.log(data.toString());

  client.end();
});
client.on('end', function () {
  console.log('Disconnected!');
});
