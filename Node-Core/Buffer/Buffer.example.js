
console.log(Buffer);
str='\u00bd'+'\u00bc'+'\u00be';
//byteLength 返回实际的字节长度
console.log(str+": "+str.length+" characters, "+Buffer.byteLength(str,'utf8')+"bytes");

var bf1=new Buffer(1234),bf2=new Buffer(01234);
console.log(Buffer.compare(bf1,bf2));  //1

var bf3=new Buffer(10);
bf3.write("hello",0,"ascii");
console.log(bf3.length);//10
console.log(bf3.slice(0,2).length);//2

var bf4=new Buffer(2);
bf4.write("hello",0,"ascii");
console.log(bf4.length);//2
console.log(bf4.toString()); //he

//高字节序和低字节序，高位顺序放置在高位，低位顺序放置在低位 称为高字节序
var b=new Buffer(6);
b.writeUIntBE(0x12345678,0,6);
console.log(b);
b.writeUIntLE(0x12345678,0,6);
console.log(b);


var bf5=new Buffer(26);
for(var i=0;i<26;i++){
  bf5[i]=i+97;
};
console.log(bf5.toString('utf8'));
console.log(bf5.toString('ascii'));


var bf6=new Buffer(26);
var bf7=new Buffer(26);

for(var i=0;i<26;i++){
  bf6[i]=i+97;
  bf7[i]=33;
}
bf6.copy(bf7,8,16,20);
console.log(bf7.toString());


//slice返回一个新的buffer 但是指向同一片内存区域，只是偏移量不同
var bf8=new Buffer("Hello");
var bf9=bf8.slice(0,2);
console.log(bf9.toString());//He
bf8[0]=33;
console.log(bf9.toString()); //!e

//fill符号填充整个字符
var bf10=new Buffer(100);
bf10.fill('!');
console.log(bf10.toString());


var bf11=new Buffer(4);
bf11[0]=0x3;
bf11[1]=0x4;
bf11[2]=0x5;
bf11[3]=0x6;
for(var i=0;i<bf11.length;i++){
  console.log(bf11.readUInt8(i));
}


  console.log(bf11.readUInt16LE(0)); //0X0403
  console.log(bf11.readUInt16BE(0)); //0X0304


  console.log(bf11.readUInt16LE(1)); //0X0605
  console.log(bf11.readUInt16BE(1)); //0X0506

    console.log(bf11.readUInt32BE(0)); //0x03040506
    console.log(bf11.readUInt32LE(0)); //0x06050403


  var buf12=new Buffer(4);
  buf12.writeUInt16BE(0xdead,0);
  console.log(buf12)  //<Buffer de ad 00 00>
  buf12.writeUInt16LE(0xdead,0);
  console.log(buf12)  //<Buffer ad de 00 00>

  var buf13=new Buffer(4);
  buf13.writeUInt32BE(0xabcdef,0);
  console.log(buf13)  //<Buffer de ad 00 00>
  buf13.writeUInt32LE(0xabcdef,0);
  console.log(buf13)  //<Buffer ad de 00 00>
