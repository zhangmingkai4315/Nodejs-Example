var zlib = require('zlib');
var http = require('http');
var fs = require('fs');


http.createServer(function (req, res) {
  var raw = fs.createReadStream('index-source.html');
  var accept_encoding = req.headers['accept-encoding'];
  if (!accept_encoding) {
    accept_encoding = '';
  }
  if (accept_encoding.match(/\bgzip\b/)) {
    res.writeHead(200, { 'content-encoding':'gzip' });
    raw.pipe(zlib.createGzip()).pipe(res);
  } else if (accept - encoding.match(/\bdeflate\b/)) {
    res.writeHead(200, { 'content-encoding':'deflate' });
    raw.pipe(zlib.createDeflate()).pipe(res);
  } else {
    res.writeHead(200, {});
    raw.pipe(res);
  }

}).listen(8000);
