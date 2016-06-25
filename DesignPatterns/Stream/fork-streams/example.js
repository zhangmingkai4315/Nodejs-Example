var fs = require('fs');
var crypto = require('crypto');

var sha1Stream = crypto.createHash('sha1');
var md5Stream = crypto.createHash('md5')

sha1Stream.setEncoding('base64');
md5Stream.setEncoding('base64');

var inputfile = process.argv[2];
var inputStream = fs.createReadStream(inputfile);

inputStream.pipe(sha1Stream)
           .pipe(fs.createWriteStream(inputfile+'.sha1'));
inputStream.pipe(md5Stream)
           .pipe(fs.createWriteStream(inputfile+'.md5'));
// 两个inputStream 将发送相同数据到下一个stream
