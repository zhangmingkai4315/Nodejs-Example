import CountStream from './CountStream';
import http from 'http';
const countWord = new CountStream('百度');


http.get('http://www.baidu.com', (res) => {
  res.pipe(countWord);
});

countWord.on('total', (count) => {
  console.log(`Count Number is :${count}`);
});

// $ babel-node CountWebpageWord.js
// Count Number is :11
