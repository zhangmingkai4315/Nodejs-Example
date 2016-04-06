var fs = require('fs');
var r = fs.createReadStream('out.err');
var w = fs.createWriteStream('test.err');

r.on('readable', function () {
  //  w.cork();
  w.on('pipe', function () {
    console.log('Begin piping data');
  });
    // 暂停输入，强制buffer 所有的输入
  r.pipe(w);
  // setTimeout(function () {
  //   w.uncork(); //开启
  // },2000);
});
