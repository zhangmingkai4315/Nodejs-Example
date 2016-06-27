var createProxy=function(subject){
  var helloOld=subject.hello;
  subject.hello=function(){
    return helloOld.call(this)+' world';
  }
  return subject
}


var O=function(name){
  this.name=name;
}
O.prototype.hello=function(){
  return "Hello "+this.name;
}

var o=createProxy(new O("mike"));
console.log(o.hello());
