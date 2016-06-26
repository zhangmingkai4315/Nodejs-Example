var DrawLine=function(){
this.name="line"
}
var DrawCircle=function(){
this.name="circle"
}
var DrawRectangle=function(){
this.name="rect"
}
var DrawDefault=function(){
  this.name="default"
}

DrawDefault.prototype.say=DrawRectangle.prototype.say=DrawLine.prototype.say=DrawCircle.prototype.say=function(){
  console.log(this.name);
}


var Draw=function(name){
  switch (name) {
    case "line":
      return new DrawLine();
      break;
    case "circle":
      return new DrawCircle();
      break;
    case "rect":
      return new DrawRectangle();
      break;
    default:
      return new DrawDefault();
  }
}

Draw("rect").say()
Draw("line").say()
Draw("nothing").say()

// $ node factory.js
// rect
// line
// default
