// const path = require('path');

// const _invalidateRequireCacheForFile = function (filePath) {
//   delete require.cache[path.resolve(filePath)];
// };

// const requireNoCache =  function (filePath) {
//   _invalidateRequireCacheForFile(filePath);
//   return require(filePath);
// };

const Hello = require('./module_1');
Hello.prototype.sayHello = function () {
  console.log('Changed');
};
const h1 = new Hello();
h1.sayHello();

delete require.cache[require.resolve('./module_1.js')];

const Hello2 = require('./module_1');
const h2 = new Hello2();
h2.sayHello();

// Imported
// Changed
// Imported
// hello mike
