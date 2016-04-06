var domain = require('domain');
var fs = require('fs');
var http = require('http');

process.on('error', function (error) {
  console.log('Error in process');
});

var virtual_domain = domain.create();

virtual_domain.on('error', function (error) {
  console.log('Error in virtual_domain');
});

virtual_domain.run(function () {
  process.emit('error','Error occure');
  // throw new Error("Error");
  process.nextTick(function () {
    setTimeout(function () {
      fs.open('nofile', 'r', function (err, fd) {
        if (err) throw err;
      });
    }, 1000);
  });

  http.createServer(function (req, res) {
    var reqd = domain.create();
    reqd.add(req);
    reqd.add(res);
    reqd.on('error', function (err) {
      console.log("Error:" + err);
      try {
        res.writeHead(500);
        res.end('Error');
      } catch (e) {
        console.log('Error sending 500');
      }

    });
    reqd.run(function () {
      throw new Error('Error');
      res.writeHead(200);
      res.end('Success');
    });
  }).listen(3000);


});

function doReadFile(filename, cb) {
  fs.readFile(filename, virtual_domain.bind(function (err, data) {
    if (err) throw err;
    cb(data);
  }));
}

doReadFile('nofile', function (data) {
  console.log(data);
});
