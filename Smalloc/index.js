var smalloc = require('smalloc');
var a=function () {
  this.a=10;
  this.b=20;
  this.c=function () {
    return this.a+this.b;
  }
};

console.log(smalloc.alloc(3,a));

var a=smalloc.alloc(3);
var b=smalloc.alloc(4);
var c=smalloc.alloc(5);

for(var i=0;i<4;i++){
  a[i]=i*2;
  b[i]=i;
  c[i]=i;
}

smalloc.dispose(b);
console.log(a);console.log(b);console.log(c);


smalloc.copyOnto(a,0,c,0,2);
console.log(a);console.log(b);console.log(c);

// 可分配的类型
// smalloc.Type.Double
// smalloc.Type.float
// smalloc.Type.Int8
// smalloc.Type.Int32
// smalloc.Type.Uint32
// smalloc.Type.Int16


var I8A=smalloc.alloc(8,smalloc.Types.Int8);
for (var i = 0; i < I8A.length; i++) {
  I8A[i]+=20000;
}
console.log(I8A);
