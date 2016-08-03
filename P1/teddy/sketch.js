var main_canvas;
var tilt_slider;
var mouth_slider;
var eye_slider;


var headsize = 400;
var noseloci = 250;
var noseXoffset = 30;
var noseYoffset = 60;

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
noFill();
noStroke();

}

function draw () {

  //head
	fill('#e6ffff');
  	ellipse(width/2, height/2, headsize, headsize);
    fill(0);
    //ears
    fill('#4d79ff');
    ellipse(width/4,width/5,200,200);
     ellipse(width/4*3,width/5,200,200);
    ellipse();
     //head
  fill('#e6ffff');
    ellipse(width/2, height/2, headsize, headsize);
    fill(0);
    //eyes
    
    fill( '#4d79ff');
    eye_value = eye_slider.value();
    if (eye_value === 1 || eye_value == 3) {
    	ellipse(width/2,height/2, 100,100);
    }
    if (eye_value >= 2) {
    	ellipse(width/4,height/2, 100,100);
  		ellipse(width/4*3,height/2, 100,100);
    }
  
  //mouth
  	noFill();
    stroke(0);

  	arc(width/2,height/2+100,60,50, 0, 90);
    noStroke();
    //nose
    fill(0);
    triangle(noseloci, noseloci+100, noseloci+noseXoffset, noseloci+noseYoffset, noseloci-noseXoffset, noseloci+noseYoffset);


}

function keyTyped() {
  if (key == '!') {
    saveBlocksImages();
  }
}
