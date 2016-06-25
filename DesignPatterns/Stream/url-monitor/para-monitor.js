var fs = require('fs');
var split = require('split');
var request = require('request');
// var ParallelSteam = require("./ParallelSteam.js");
var LimitedParallelStream =require("./LimitedParallelStream")
fs.createReadStream(process.argv[2])
  .pipe(split())
  .pipe(new LimitedParallelStream(1,function(url,enc,done){
    if(!url){
      return done();
    }
    var self =this;
    request.head(url,function(err,response){
      var check_result=url+ ' is '+(err?"down":"up")+'\n';
      self.push(check_result);
      done();
    });
  }))

  .pipe(fs.createWriteStream("./result.txt"))
  .on("finish",function(){
    console.log("All urls were checked!")
  })
  .on("error",function(err){
    console.log("Error:"+err)
  });


// 当包含有上千个url同时需要监控的时候，此方法将不可控
