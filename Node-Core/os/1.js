var os = require('os');
console.log(os.tmpdir());   // 返回默认的temp目录
console.log(os.hostname().toString('utf8'));
console.log(os.endianness());   // windows LE
console.log(os.type());  // windows_NT
console.log(os.platform());  // win32
console.log(os.arch());  // X64

console.log(os.release());
console.log(os.loadavg()); // windos 返回【0,0,0】

console.log(os.freemem());
console.log(os.uptime() / 3600);
console.log(os.networkInterfaces());
console.log(os.cpus());
