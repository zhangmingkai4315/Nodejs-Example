var assert = require('assert');

var testFun = function (val) {
  return val * 2;
};

assert.equal(testFun(2), 4, 'TEST FUN!'); //= =
assert.notEqual(testFun(2), 3);
assert.ok(true);
var obj1 = {
  val1: {
    name: 'mike',
    age: 12
  }
};

var obj2 = {
  val1: {
    name: 'mike',
    age: 12
  }
};

assert.deepEqual(obj1, obj2);

assert.throws(function () {
  // throw new Error("Wrong");
  assert.strictEqual(obj1, obj2); //= ==
}, function (err) {
  if (err instanceof Error) {
    return true;
  }
}, 'Unexpected no exception!');
