var main_canvas;
var tilt_slider;
var mouth_slider;
var eye_slider;

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


}

function draw () {
	fill('#e6ffff');
  	ellipse(width/2, height/2, 600, 450);
    fill(0);
    //eyes
    eye_value = eye_slider.value();
    if (eye_value === 1 || eye_value == 3) {
    	ellipse(width/2,height/2, 100,100);
    }
    if (eye_value >= 2) {
    	ellipse(width/4,height/2, 100,100);
  		ellipse(width/4*3,height/2, 100,100);
    }
  
  //mouth
  	 //arc(459, 485, 250, 220, TWO_PI, PI/2);
  	 arc(width/2,height/2+80,50,50, -180, PI);


}

function keyTyped() {
  if (key == '!') {
    saveBlocksImages();
  }
}
