function start(processing){
  processing.setup = function (){
    processing.size(300, 100);
    processing.background(255, 255, 255);
    processing.textSize(45);
    processing.fill(0, 102, 153, 204);
    processing.text("Hello, World!", 20, 65);
  };
}
var canvas = document.getElementById("canvas");
new Processing(canvas, start);