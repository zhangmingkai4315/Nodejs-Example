var readline = require('readline');
var rl1 = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});
rl1.question("what is your name?", function(answer) {
  if (answer !== 'mike') {
    console.log("You are not me!");
    rl1.write(null,{ctrl:true,name:'u'});
  } else {
    console.log("Hi there!");
    rl1.close();
  }
});

rl1.on("line",function (data) {
  if(data=='mike'){
    rl1.close();
  }else{
    rl1.write(null,{ctrl:true,name:'u'});
  }
}).on('close', function () {
  console.log("bYE");
  rl1.close();//process.exit(0);
});



//CTRL+C
rl1.on('SIGINT',function () {
  rl1.question("Are u wanne quit?", function(answer) {
    if(answer.match(/^y(es)?$/i)){
      rl1.pause();
    }
  })
});
