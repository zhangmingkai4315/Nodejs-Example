var a = require('./a.js');
a.emit('ready');
a.on('ready', function () {
  console.log('Module a is ready');
});

// 不会正常的工作，因为导入的是重新绑定后的对象
