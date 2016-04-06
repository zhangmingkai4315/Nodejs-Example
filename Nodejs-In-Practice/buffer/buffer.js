const fs= require('fs');
const buffer= new Buffer(255);
buffer[0]=23;
console.log(buffer);

fs.readFile('./text', (err,buffer) => {
    console.log(Buffer.isBuffer(buffer));
    console.log(buffer.toString('ascii'));   //如果是中文则此处将变成乱码
});

//转换编码方式

const username = 'user';
const password = 'passwd';
const auth = username+':'+password;
const buf = new Buffer(auth);
const encoded = buf.toString('base64');   //将普通字符串转换为base64编码
console.log(encoded)

//图片也可以直接转换为uri
const pngdata = fs.readFileSync('./monkey.png').toString('base64');
const uri='data:image/png;base64,'+pngdata;
console.log(uri)