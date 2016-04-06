var net = require('net');
var server = net.createServer(function(c){
    c.setNoDelay(true);   //使用nagle算法 优化小数据的发送
    c.write('37557754456787654','binary');  //强制使用二进制传输
    c.on('end',function(){
        console.log('server disconnected');
        server.unref();
    });
    c.on('data',function(data){
        process.stdout.write(data.toString());
        c.write(data.toString());
    })
});

server.listen(8000,function(){
    console.log('server bound');
})
