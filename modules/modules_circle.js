var PI=Math.PI;

var circle=function (r) {
  return{
      circle:function () {
        return PI*r*r;
      },
      circumference:function () {
          return 2*PI*r;
      }
    }
};

module.exports=circle;


if(require.main==module){
  console.log("Can run independent!");
}
