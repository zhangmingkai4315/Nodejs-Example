var DecorateWelcome=function(object){
  object.welcome=function(){
    console.log("Hello "+this.name)
  }
  return object;
}

var Obj=function(name){
  this.name=name;
}
Obj.prototype.say=function(){
  console.log("say hello to "+this.name);
}

var o=DecorateWelcome(new Obj('mike'))
o.welcome();
