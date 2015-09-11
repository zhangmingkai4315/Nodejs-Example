var http = require('http');
console.log(http.STATUS_CODES);


http.createServer(function (req,res) {
  // console.log(req);
  // res.writeHead(200,{
  //   'Content-Length':'helloworld'.length,
  //   'Content-Type':'text/plain'
  // });
  res.statusCode=202;
  res.statusMessage="Hii";
  res.setHeader('Set-Cookie',["type=niaja","lang=javascript"]);
  res.write("Hello world");
  res.addTrailers({'Content-MD5':"44444444444444444444444"});
  res.end(function (err) {
    console.log(err);
    console.log("Finished");
  });
}).listen(3000);
