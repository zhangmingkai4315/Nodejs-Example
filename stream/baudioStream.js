const baudio = require('baudio');
const n = 0;
const file = './1.mp3';
const fs = require('fs');
const mp3 = fs.createWriteStream(file);
const b = baudio((t) => {
    var x = Math.sin(t*262+Math.sin(n));
    n += Math.sin(t);
    return x;
});

b.play();
b.on('data',(data)=>{
    console.log(data);
})