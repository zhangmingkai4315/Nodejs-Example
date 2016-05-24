// var util = require('util'),
//     http = require('http'),
//     httpProxy = require('http-proxy');
//
// //
// // Http Server with proxyRequest Handler and Latency
// //
// var proxy = new httpProxy.createProxyServer();
// http.createServer(function (req, res) {
//   setTimeout(function () {
//     proxy.web(req, res, {
//       target: 'https://www.baidu.com:80'
//     });
//   }, 200);
// }).listen(8002);
//
// //
// // Target Http Server
// //
// http.createServer(function (req, res) {
//   res.writeHead(200, { 'Content-Type': 'text/plain' });
//   res.write('request successfully proxied to: ' + req.url + '\n' + JSON.stringify(req.headers, true, 2));
//   res.end();
// }).listen(9002);




var https = require('https'),
  http = require('http'),
  util = require('util'),
  path = require('path'),
  fs = require('fs'),
  httpProxy = require('http-proxy');

//
// Create a HTTP Proxy server with a HTTPS target
//
httpProxy.createProxyServer({
  target: 'https://www.baidu.com',
  agent  : https.globalAgent,
  headers: {
    host: 'baidu.com'
  }
}).listen(8011);
