var buffer = new ArrayBuffer(1024);
var foo = new ArrayBuffer(4);
foo[0] = 0;
foo[1] = 1;
foo[2] = 2;
foo[3] = 3;
console.log(buffer);
console.log(foo);
foo[4] = 4;
console.log(foo.byteLength);
console.log(foo);
console.log(foo.byteLength);
// ArrayBuffer {}
// ArrayBuffer { '0': 0, '1': 1, '2': 2, '3': 3 }
// ArrayBuffer { '0': 0, '1': 1, '2': 2, '3': 3, '4': 4 }

var buff1 = new ArrayBuffer(8);
var view = new Uint32Array(buff1);

view[1] = 256;
console.log(view);
// Uint32Array { '0': 0, '1': 256 }
