function createProxy(subject){
  return {
    hello:function(){
      return subject.hello()+' nice to see you!';
    },
    goodbey:function(){
      return subject.goodbey.apply(subject,arguments);
    }
  }
}

function Welcome(name){
  this.name=name;
}
Welcome.prototype.hello=function(){
  return "hello "+this.name;
}

Welcome.prototype.goodbey=function(slogan){
  return "goodbey "+this.name+" "+slogan;
}

var w=createProxy(new Welcome("mike"))
console.log(w.hello());
console.log(w.goodbey("say you next time!"));
