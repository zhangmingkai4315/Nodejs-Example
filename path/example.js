var path = require('path');
var pathName="..//var/named/log";
console.log(path.normalize(pathName));   //windos平台上使用反斜杠 ..\var\named\log

var path1='/query.log';
console.log(path.join(pathName,path1));   //合并并且调用normalize


console.log(path.join('bar','foo/zaa'));


try {
  console.log(path.join('bar','foo/zaa',{}));    //throw error
} catch (e) {
  if(e){
    console.log(e);
  }
}


console.log(path.resolve("node"));   // C:\Users\Documents\GitHub\Nodejs-Example\node

console.log(path.isAbsolute(path.resolve("node")));    //true
console.log(path.relative(path.resolve("node"),path.resolve("hello"))); //返回hello 相对前一个的路径


console.log(path.dirname(path.resolve("node.js"))); //  C:\Users\Documents\GitHub\Nodejs-Example
console.log(path.basename(path.resolve("node.js")));  //  node.js

console.log(path.extname(path.resolve("node.js")));  //  node.js


console.log(path.sep)  // \
console.log(path.resolve("node.js").split(path.sep));

// [ 'C:',
//   'Users',
//   'Documents',
//   'GitHub',
//   'Nodejs-Example',
//   'node.js' ]

console.log(path.parse(path.resolve("node.js")));


// { root: 'C:\\',
//   dir: 'C:\\Users\\Documents\\GitHub\\Nodejs-Example',
//   base: 'node.js',
//   ext: '.js',
//   name: 'node' }


var a={ root: 'C:\\',
  dir: 'C:\\Users\\Documents\\GitHub\\Nodejs-Example',
  base: 'node.txt',
  ext: '.txt',
  name: 'node' }

console.log(path.format(a));

//C:\Users\Documents\GitHub\Nodejs-Example\node.txt
