var dns = require('dns');
console.time("Startdnsquery")
console.log(dns.getServers());

dns.lookup("baidu.com",["A",'TXT','SRV'],function (err,addresses,family) {
  if(!err){
      console.log("address:"+addresses);
      console.log("family:"+family);
  }
});

dns.resolve('www.google.com',function (err,addresses) {
  if(err) throw err;
  console.log("Addresses:"+JSON.stringify(addresses));
  addresses.forEach(function (address) {
    dns.reverse(address,function (err,hostnames) {
      if(err){
        throw err;
      }
      console.log("Reverse for "+address+"="+hostnames);
    });
  });
});

dns.resolveTxt("baidu.com",function (err,addresses) {
  if(err) throw err;
  console.log("TXT RECORDED:"+JSON.stringify(addresses));
});

dns.resolveMx("baidu.com",function (err,addresses) {
  if(err) throw err;
  console.log("TXT RECORDED:"+JSON.stringify(addresses));
});


dns.resolveNs("baidu.com",function (err,addresses) {
  if(err) throw err;
  console.log("TXT RECORDED:"+JSON.stringify(addresses));
});

dns.resolveSoa("baidu.com",function (err,addresses) {
  if(err) throw err;
  console.log("TXT RECORDED:"+JSON.stringify(addresses));
});

dns.resolveCname("www.baidu.com",function (err,addresses) {
  if(err) throw err;
  console.log("TXT RECORDED:"+JSON.stringify(addresses));
});


console.timeEnd("Startdnsquery");



// dns.resolveSrv("baidu.com",function (err,addresses) {
//   if(err) throw err;
//   console.log("TXT RECORDED:"+JSON.stringify(addresses));
// });
