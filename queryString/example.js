var querystring = require('querystring');
var qs=querystring.stringify({'foo':'bar','foo2':['hello','world'],corge:''});
console.log(qs);

var qs1=querystring.stringify({'foo':'bar','foo2':['中国','world'],corge:''},null,null
        ,{encodeURIComponent: querystring.gbkEncodeURIComponent});
console.log(qs1);

var deqs1=querystring.parse(qs1,null,null,{encodeURIComponent: querystring.gbkDecodeURIComponent})

console.log(deqs1);
