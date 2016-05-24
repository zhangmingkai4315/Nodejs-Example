var option = {
  hostname:'www.baidu.com',
  port:80,
  path:'/',
  method:'GET'
};
var http = require('http');

// 定义连接选项
var req = http.request(option, function (res) {
  console.log(res.statusCode);
  console.log(JSON.stringify(res.headers));
  res.setEncoding('utf8');
  res.on('data', function (chunk) {
     console.log("Body: " + chunk);
   });
});

req.on('error', function (e) {
  if (e) {
    console.log(e);
    throw e;
  }
});

// 发送请求
req.end();


http.get('http://cn.hao123.com/', function (res) {
  console.log('Got response' + res.statusCode);

}).on('error', function (e) {
  console.log("Got error" + e.message);
}).on('data', function (data) {
  console.log(data);
});
