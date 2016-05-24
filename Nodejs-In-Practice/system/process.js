console.log(process.memoryUsage());

// rss : 消耗的内存大小
// heapTotal : 总计分配的动态堆大小
// headUsed : 使用的堆大小

console.log(process.arch);


// import {EventEmitter} from 'events';
import fs from 'fs';
let content;

function readFileIfRequired(cb) {
  if (!content) {
    fs.readFile(__filename, 'utf8', (err, data) => {
      content = data;
      console.log('Read file finished');
      cb(err, content);
    });
  } else {
    process.nextTick(() => {
      console.log('File cached!');
      cb(null, content);
    });
  }
}

readFileIfRequired((err, data) => {
  console.log(`1.length ${data.length}`);
  readFileIfRequired((err1, data1) => {
    console.log(`2.length ${data1.length}`);
  });
  console.log('Reading file again');
});
console.log('Reading...');

