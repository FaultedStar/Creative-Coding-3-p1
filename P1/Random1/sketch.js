//flower
//Phoebe Zeller
//300309856

//slider things
var main_canvas;



//random seed
var curRandomSeed;

var randomEyeSize;
var randomEyeWidth;
var randomPettalLength;
var randomPettalWidth;
var randomMouth

function changeRandomSeed() {
  curRandomSeed = curRandomSeed + 1;
}

//location stettings
var startx;
var starty;

//pettal things
var pettalSpacing = 30;
var pettalLength = 250;
var pettalWidth = 80;
var pettalColour = '#e6ffff';

//center things
var centerColour = '#ffffcc';
var centerSize = 200;
//eye things
var eyeSize = 70;
var eyeWidth = 60;
var eyeColour = '#bf8040';

var fillMouth = false;

function setup () {
 main_canvas = createCanvas(500, 500); 
   angleMode(DEGREES); // for the sliders, they like degrees (me too, id like mine now)





button = createButton('random');
  button.mousePressed(randomThings);
  button.position(10, 10);

  
  // position each element on the page
  main_canvas.parent('canvasContainer');
  
}

function draw () {
	clear();
	background('#b3ffb3');
  startx = width/2;
  starty = width/2;
//randomThings(); // this is just a setter
  drawFace();

}

function drawFace(){
drawPettal(startx, starty,pettalSpacing, pettalWidth, pettalLength, pettalColour);
drawCenter(startx,starty,centerSize,centerColour);
drawEyes(startx, starty,eyeWidth,eyeSize,eyeColour);
drawStem(startx,starty,250,500, 60);
drawMouth(startx,starty, eyeColour,fillMouth);
drawKawaii();
}

function randomThings(){

randomMouth = random(2);
if(randomMouth>1){
fillMouth = true;

}
else{

	fillMouth = false;
}

pettalLength = random(50, 450);

eyeSize = random(30, 120);
eyeWidth = random(20, 100);
pettalWidth = random(30, 150);

}

function drawMouth(X,Y,colour, smile){
	push();
	angleMode(RADIANS);
	stroke(colour);
	if(smile){
		fill(colour);
	}
	else{
		noFill();
	}

arc(width/2,height/2+50,50,50, 0, PI);
 angleMode(DEGREES);
 pop();
}

function drawEyes(X,Y,width,size,colour){
push();
	translate(X,Y);
	noStroke();
	fill(colour);
	ellipse(width,0,size,size);
	ellipse(-width,0,size,size);

	drawKawaii(width,size/9);
	

pop();
}

function drawKawaii(width,size){

	fill('#ffffff');
	noStroke(0);
	ellipse(width, -size*3.5, size,size);
	ellipse(-width,-size*3.5,size,size);

	ellipse(width+size*2, -size*2, size,size);
	ellipse(-width+size*2,-size*2,size,size);

	ellipse(width, -size*1.5, size*1.5,size*1.5);
	ellipse(-width,-size*1.5,size*1.5,size*1.5);

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
	//curve(X1,Y1,450,450,X2,Y2); ///////////I DONT KNOW WHY THIS DOESNT WORK GAAA 

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
