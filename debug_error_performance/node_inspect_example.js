const http = require('http');

const server = http.createServer((req, res) => {
  const a = (function(max){
    var temp = '';
    for(i = 0; i < max; i++){
    	temp += i;
    }
    return temp;
  }(10000));
  res.end(a);   // i know this place have a bug!
});

server.listen(3000);