const http = require('http');

const server = http.createServer((req, res) => {
  response.send('hello,world');   // i know this place have a bug!
});

server.listen(3000);

process.on('uncaughtException', (err) => {
  console.log(err);
});

// this server will not stop but will leak memory. uncaughtException is a bad things.
