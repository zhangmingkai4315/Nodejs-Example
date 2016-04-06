console.log(__filename);
console.log(__dirname);

console.log(global);

var name = function () {
  console.log('HELLO');
};

exports.a = name;
