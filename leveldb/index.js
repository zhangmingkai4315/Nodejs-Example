var levelup = require("levelup")
var db = levelup('./mydb');
db.put("name","mike",function(err){
  if (err) console.log("Ooops "+err)
  db.get("name",function(err,value){
    if(err) return console.log("Query error"+err)
    // console.log("Name: "+value);
  })
})

var ops = [ { type: 'del', key: 'father' } ,
{ type: 'put', key: 'name', value: 'Yuri Irsenovich Kim' } ,
{ type: 'put', key: 'dob', value: '16 February 1941' } ,
{ type: 'put', key: 'spouse', value: 'Kim Young-sook' } ,
{ type: 'put', key: 'occupation', value: 'Clown' } ]

db.batch(ops,function(err){
  if(err) return console.log(err);
  // console.log('create batch operations');
});

var ops = [{ type : 'put' ,
   key : new Buffer([1, 2, 3]) ,
   value : { some: 'json' } ,
   keyEncoding : 'binary' ,
   valueEncoding : 'json' }]
   db.batch(ops,function(err){
     if(err) return console.log(err);
    //  console.log('create json operations');
   });
db.get(new Buffer([1,2,3]),function(err,data){
  if(err){ return console.log(err)}
  // console.log(data)
})


db.createReadStream().on('data',function(data){
  console.log(data.key+":"+data.value)
}).on('end',function(){
  console.log("End stream ")
})
