var http = require('http');
var fs = require('fs');
console.log(process.cwd());

var server=http.createServer(function (req,res) {
  var fstream=fs.createWriteStream('out.txt');
  var body="";
  req.setEncoding('hex');
  req.on('readable',function () {
    console.log("Some data will received");
  });
  req.pipe(fstream);
  req
  // .on('data',function (data) {
  //   console.log("received %d bytes of data",data.length);
  //   // req.pause();
  //   // console.log("wait second");
  //   // setTimeout(function () {
  //   //   req.resume()
  //   // },1000);
  //   req.pipe(fstream);
  // })
  .on('end',function () {
    console.log("No more data");
    fstream.close();
  });

  res.write("Thanks");
  res.end();

}).listen(3000);
