var string_decoder = require('string_decoder').StringDecoder;

var decoder = new string_decoder('utf8');   // 缺省的编码方式utf8

var cent = new Buffer([0xc2, 0xa2]);
console.log(decoder.write(cent));

var euro = new Buffer([0xe2, 0x82, 0xac]);

console.log(decoder.write(euro));   // 将buffer编码方式转化为utf8的输出

console.log(decoder.end());

// output
// ¢
// €
