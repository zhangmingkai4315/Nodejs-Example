import assert from 'assert';
import CountStream from './CountStream';
import fs from 'fs';
const countStream = new CountStream('example');

let passed = 0;

countStream.on('total', (count) => {
  assert.equal(count, 1);
  passed++;
});

fs.createReadStream('./example.txt').pipe(countStream);

process.on('exit', () => {
  console.log(`Assert passed:${passed}`);
});


// 使用airbnb的代码校验：

// 1. 能用插值的地方不要拼接
// 2. 不要存在匿名函数(warning)
// 3. 赋值前后保留空格，函数调用 =>前后保留空格
// 4. 逗号后面保留空格
// 5. 统一的字符对其
// 6. 能用const 或者 let的地方不用 var 定义
// 7. 尽量不要使用console 本身是个同步函数