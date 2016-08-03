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
var pettalSpacing = 30;
var pettalLength = 200;
var pettalWidth = 60;
var pettalColour = '#e6ffff';

var centerColour = '#ffffcc';
var centerSize = 200;

var eyeSize = 50;
var eyeWidth = 60;
var eyeColour = '#bf8040';

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
background('#b3ffb3');
//noFill();
//noStroke();

}

function draw () {
  startx = width/2;
  starty = width/2;
drawPettal(startx, starty,pettalSpacing, pettalWidth, pettalLength, pettalColour);
drawCenter(startx,starty,centerSize,centerColour);
drawEyes(startx, starty,eyeWidth,eyeSize,eyeColour);
drawStem(startx,starty,250,500, 60);
drawMouth(startx,starty);

}
function drawMouth(X,Y){
	angleMode(RADIANS);
	stroke(50);
arc(width/2,height/2+80,50,50, -180, PI);

}

function drawEyes(X,Y,width,size,colour){
push();
	translate(X,Y);
	noStroke();
	fill(colour);
	ellipse(width,0,size,size);
	ellipse(-width,0,size,size);

	fill(0);

pop();
}

function drawCenter(X,Y,size, colour){
	push();
	noStroke();
	fill(colour);
	translate(X,Y);
ellipse(0,0,size,size);
pop();

}
function drawStem(X1,Y1,X2,Y2, curve){
	stroke('#009933');
	curve(X1,Y1,450,450,X2,Y2); ///////////I DONT KNOW WHY THIS DOESNT WORK GAAA 

}
function drawPettal(X, Y, spacing, width, length,colour){
push();
translate(X, Y);
fill(colour);
  noStroke();
  for (var i = 0; i < 10; i ++) {
    ellipse(0, spacing, width, length);
    rotate(180/5);
  }
 pop();
}

function keyTyped() {
  if (key == '!') {
    saveBlocksImages();
  }
}
