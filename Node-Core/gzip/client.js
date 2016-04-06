var zlib = require('zlib');
var http = require('http');
var fs = require('fs');

var request = http.get({
  host:'localhost',
  path:'/',
  port:8000,
  headers:{
          'accept-encoding':'gzip,deflate'
        }
});

request.on('response', function (res) {
  var output = fs.createWriteStream('index.html');
  switch (res.headers['content-encoding']) {
    case 'gzip':
      res.pipe(zlib.createGunzip()).pipe(output);
      break;
    case 'deflate':
      res.pipe(zlib.createInflate()).pipe(output);
      break;
    default:
      res.pipe(output);
      break;
  }
});
