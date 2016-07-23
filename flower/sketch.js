//flower

var main_canvas;
var tilt_slider;
var mouth_slider;
var eye_slider;

//not needed
var headsize = 400;
var noseloci = 250;
var noseXoffset = 30;
var noseYoffset = 60;

//blob things
var startx;
var starty;


function setup () {
 main_canvas = createCanvas(500, 500); 
   angleMode(DEGREES); // for the sliders, they like degrees (me too, id like mine now)

   //make the slidys
   tilt_slider = createSlider(-90, 90, 30);
  mouth_slider = createSlider(0, 200, 20);
  eye_slider = createSlider(0, 3, 2); 

  // position each element on the page
  main_canvas.parent('canvasContainer');
  mouth_slider.parent('slider1Container');
  eye_slider.parent('slider2Container');
  tilt_slider.parent('slider3Container');



//style
background('#99ccff');
//noFill();
//noStroke();

}

function draw () {
  startx = width/2;
  starty = width/2;
translate(startx, starty);
  noStroke();
  for (var i = 0; i < 10; i ++) {
    ellipse(0, 30, 20, 80);
    rotate(180/5);
  }
}

function keyTyped() {
  if (key == '!') {
    saveBlocksImages();
  }
}
