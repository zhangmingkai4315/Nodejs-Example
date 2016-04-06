var http =require('http');
var url =require('url');

http.createServer(function(req,res){
    console.log('start request',req.url);
    var options=url.parse(req.url);
    options.headers=req.headers;
    var proxyRequest=http.request(options,function(proxyRequest){
        proxyRequest.on('data',function(chunk){
            console.log('proxyRequest length is '+chunk.length);
            res.write(chunk,'binary');
        });

        proxyRequest.on('end',function(){
            console.log('request ended');
            res.end();
        });
        res.writeHead(proxyRequest.statusCode,proxyRequest.headers);
    });

    req.on('data',function(chunk){
        console.log('in request length:',chunk.length);
        proxyRequest.write(chunk,'binary');
    });

    req.on('end',function(){
        console.log('original request ended');
        proxyRequest.end();
    });
}).listen(8080);