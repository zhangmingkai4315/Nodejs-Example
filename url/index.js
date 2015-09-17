var httpRequest="http://www.baidu.com:80/p/q/a?query=mike#zhang";

var url = require('url');
var parsedObject=url.parse(httpRequest);
console.log(parsedObject);

parsedObject.host="www.sina.com.cn";

console.log(url.format(parsedObject));

console.log(url.resolve('/one/two/three','four'));
console.log(url.resolve('http://example.com/one','/two'));
