var http = require('http');
var cluster=require('cluster');
var numberCPUs=require('os').cpus().length;
if(cluster.isMaster){
  for(var i=0;i<numberCPUs;i++){
    console.log("Create "+i+" instance");
    cluster.fork();
  }
  cluster.on('exit',function (worker,code,signal) {
    console.log("worker"+worker.process.pid+' dies');
  });

  cluster.on('fork',function (worker) {
    console.log("fork a new worker:"+worker.id);
  });
  cluster.on('online',function (worker) {
    console.log("A new worker :"+worker.id+" is running");
  });

  cluster.on('listening',function (worker,address) {
    console.log("A worker is now connectted to "+address.address+":"+address.port);
  })




}else{
  http.createServer(function (req,res) {
    res.writeHead(200);
    res.end('Hello world\n');
  }).listen(8000);
}
