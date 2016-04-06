var os = require('os');
console.log(os.endianness());
// LE

// 对于数字1 如果是小端存储 返回 01 00 00 00
// 如果是大端存储的话 则为00 00 00 01

