var net = require('net');
var fs = require('fs');



function demultiplexChannel(source,destination){
  var currentChannel=null;
  var currentLength =null;
  source.on('readable',function(){
    var chunk;
    if(currentChannel===null){
      chunk=this.read(1);
      currentChannel= chunk&& chunk.readUInt8(0);
    }
    if(currentLength === null){
      chunk=this.read(4);
      currentLength=chunk && chunk.readUInt32BE(0);
      if(currentLength===null){
        return ;
      }
    }

    chunk = this.read(currentLength);
    if(chunk===null){
      return;
    }
    console.log('Receive packet from : '+currentChannel);
    destination[currentChannel].write(chunk);
    currentChannel=null;
    currentLength=null;
  })
  .on('end',function(){
    destination.forEach(function(destination){
      destination.end();
    });
    console.log('Soucre channel closed');
  })
}

net.createServer(function(socket){
  var stdoutStream = fs.createWriteStream('./stdout.log');
  var stderrStream = fs.createWriteStream('./stderr.log')
  demultiplexChannel(socket,[stdoutStream,stderrStream]);
}).listen(5555,function(){
  console.log('server started!');
})
