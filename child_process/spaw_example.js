var child_process = require('child_process');
var ps=child_process.spawn('ps',['aux']),grep=child_process.spawn('grep',['syslogd']);

ps.stdout.on('data',function (data) {
  // console.log(data.toString());
  grep.stdin.write(data);
});

grep.stdout.on('data',function (data) {
  console.log("Grep output:"+data);
})


ps.on('close',function (code) {
  console.log("PS Close code:"+code);
  grep.stdin.end();
});

grep.on('close',function (code) {
  console.log("grep Close code:"+code);
});

var spawn=child_process.spawn;
spawn('ls',[],{stdio:'inherit'});  //使用共享的stdIO

var fs = require('fs');
var out=fs.openSync('./out.txt','a');  //确保IO为单独的不与父进程共享的则可保证子程序的执行在父进程关闭后能正确运行
var err=fs.openSync('./out.err','a');
var du=spawn('du',['-sh','/'],{detached:true,stdio:['ignore',out,err]});
