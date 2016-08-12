var main_canvas;
var pos1_slider;
var tilt1_slider;
var pos2_slider;
var tilt2_slider;
var pos3_slider;
var tilt3_slider;
var pos4_slider;
var tilt4_slider;
var pos5_slider;
var tilt5_slider;

var canvasWidth = 960;
var canvasHeight = 500;
                     
var savedValues = {
  "A":
{
  "box1": {
    "x1": 0,
    "y1": 73,
    "tilt1": -91,
    "x2": -68,
    "y2": -68,
    "tilt2": 89,
    "x3": 104,
    "y3": 65,
    "tilt3": -89
  },
  "box2": {
    "x1": -104,
    "y1": -32,
    "tilt1": 91,
    "x2": -43,
    "y2": -38,
    "tilt2": 89,
    "x3": 12,
    "y3": -38,
    "tilt3": 91
  },
  "box3": {
    "x1": -104,
    "y1": -2,
    "tilt1": 91,
    "x2": -43,
    "y2": -4,
    "tilt2": 89,
    "x3": 12,
    "y3": -4,
    "tilt3": 91
  },
  "box4": {
    "x1": -104,
    "y1": 25,
    "tilt1": 91,
    "x2": -43,
    "y2": 22,
    "tilt2": 89,
    "x3": 12,
    "y3": 22,
    "tilt3": 91
  },
  "box5": {
    "x1": -92,
    "y1": 50,
    "tilt1": 91,
    "x2": -57,
    "y2": 50,
    "tilt2": 89,
    "x3": -14,
    "y3": 50,
    "tilt3": 90
  },
  "palm": {
    "x": 0,
    "y": 0,
    "width": 184
  }
},
  "B":
 {
  "box1": {
    "x1": 13,
    "y1": -68,
    "tilt1": 90,
    "x2": 0,
    "y2": -31,
    "tilt2": 27,
    "x3": -78,
    "y3": -31,
    "tilt3": 30
  },
  "box2": {
    "x1": -103,
    "y1": -32,
    "tilt1": 91,
    "x2": -160,
    "y2": -38,
    "tilt2": 89,
    "x3": -200,
    "y3": -38,
    "tilt3": 91
  },
  "box3": {
    "x1": -104,
    "y1": -2,
    "tilt1": 91,
    "x2": -153,
    "y2": -4,
    "tilt2": 89,
    "x3": -200,
    "y3": -4,
    "tilt3": 91
  },
  "box4": {
    "x1": -104,
    "y1": 25,
    "tilt1": 91,
    "x2": -167,
    "y2": 22,
    "tilt2": 89,
    "x3": -200,
    "y3": 22,
    "tilt3": 91
  },
  "box5": {
    "x1": -92,
    "y1": 50,
    "tilt1": 91,
    "x2": -124,
    "y2": 47,
    "tilt2": 89,
    "x3": -160,
    "y3": 50,
    "tilt3": 90
  },
  "palm": {
    "x": 0,
    "y": 0,
    "width": 184
  }
},
  "C":
   {
  "box1": {
    "x1": -71,
    "y1": 68,
    "tilt1": -6,
    "x2": -14,
    "y2": 68,
    "tilt2": -16,
    "x3": 43,
    "y3": 68,
    "tilt3": -25
  },
  "box2": {
    "x1": -60,
    "y1": -92,
    "tilt1": 0,
    "x2": -3,
    "y2": -106,
    "tilt2": 0,
    "x3": 29,
    "y3": -96,
    "tilt3": 16
  },
  "box3": {
    "x1": -64,
    "y1": -92,
    "tilt1": 0,
    "x2": -7,
    "y2": -106,
    "tilt2": 0,
    "x3": 29,
    "y3": -96,
    "tilt3": 16
  },
  "box4": {
    "x1": -67,
    "y1": -92,
    "tilt1": 0,
    "x2": -10,
    "y2": -106,
    "tilt2": 0,
    "x3": 25,
    "y3": -96,
    "tilt3": 16
  },
  "box5": {
    "x1": -67,
    "y1": -92,
    "tilt1": 0,
    "x2": -28,
    "y2": -96,
    "tilt2": 0,
    "x3": 0,
    "y3": -92,
    "tilt3": 7
  },
  "palm": {
    "x": -86,
    "y": -3,
    "width": 81
  }
}
}

function setup () {
  // create the drawing canvas, save the canvas element
  main_canvas = createCanvas(canvasWidth, canvasHeight);

  // rotation in degrees (more slider friendly)
  angleMode(DEGREES);

  // create sliders                   
  // finger 1 AKA Thumb           
  pos1x1_slider = createSlider(-200, 200, 0); // closest
  pos1y1_slider = createSlider(-200, 200, 0);
  tilt11_slider = createSlider(-180, 180, 0);


  pos1x2_slider = createSlider(-200, 200, 0); //Middle
  pos1y2_slider = createSlider(-200, 200, 0);
  tilt12_slider = createSlider(-180, 180, 0);


  pos1x3_slider = createSlider(-200, 200, 0);//tip
  pos1y3_slider = createSlider(-200, 200, 0);
  tilt13_slider = createSlider(-180, 180, 0);



// Finger 2 AKA Pointer
  pos2x1_slider = createSlider(-200, 200, 0); // closest
  pos2y1_slider = createSlider(-200, 200, 0);
  tilt21_slider = createSlider(-180, 180, 0);

  pos2x2_slider = createSlider(-200, 200, 0);//Middle
  pos2y2_slider = createSlider(-200, 200, 0);
  tilt22_slider = createSlider(-180, 180, 0);

  pos2x3_slider = createSlider(-200, 200, 0);//tip
  pos2y3_slider = createSlider(-200, 200, 0);
  tilt23_slider = createSlider(-180, 180, 0);

  // Finger 3 AKA Middle Finger
  pos3x1_slider = createSlider(-200, 200, 0);  // closest
  pos3y1_slider = createSlider(-200, 200, 0);
  tilt31_slider = createSlider(-180, 180, 0);

  pos3x2_slider = createSlider(-200, 200, 0);//Middle
  pos3y2_slider = createSlider(-200, 200, 0);
  tilt32_slider = createSlider(-180, 180, 0);
  
  pos3x3_slider = createSlider(-200, 200, 0);//tip
  pos3y3_slider = createSlider(-200, 200, 0);
  tilt33_slider = createSlider(-180, 180, 0);

  // finger 4 AKA Ring finger
  pos4x1_slider = createSlider(-200, 200, 0);  // closest
  pos4y1_slider = createSlider(-200, 200, 0);
  tilt41_slider = createSlider(-180, 180, 0);

  pos4x2_slider = createSlider(-200, 200, 0);//Middle
  pos4y2_slider = createSlider(-200, 200, 0);
  tilt42_slider = createSlider(-180, 180, 0);

  pos4x3_slider = createSlider(-200, 200, 0);//tip
  pos4y3_slider = createSlider(-200, 200, 0);
  tilt43_slider = createSlider(-180, 180, 0);

  // finger 5 AKA Pinky
  pos5x1_slider = createSlider(-200, 200, 0); // closest
  pos5y1_slider = createSlider(-200, 200, 0);
  tilt51_slider = createSlider(-180, 180, 0);

  pos5x2_slider = createSlider(-200, 200, 0);//Middle
  pos5y2_slider = createSlider(-200, 200, 0);
  tilt52_slider = createSlider(-180, 180, 0);


  pos5x3_slider = createSlider(-200, 200, 0);//tip
  pos5y3_slider = createSlider(-200, 200, 0);
  tilt53_slider = createSlider(-180, 180, 0);


  palmX_slider = createSlider(-180, 180, 0);
  palmY_slider = createSlider(-180, 180, 0);
  palmWidth_slider = createSlider(10, 250, 100);

  sel = createSelect();
  sel.option('A');
  sel.option('B');
  sel.option('C');
  sel.changed(letterChangedEvent);

  button = createButton('show data');
  button.mousePressed(buttonPressedEvent);

  // x each element on the page
  main_canvas.parent('canvasContainer');      

  //finger 1
  pos1x1_slider.parent('slider1x1Container');
  pos1y1_slider.parent('slider1y1Container');
  tilt11_slider.parent('slider1t1Container');


  pos1x2_slider.parent('slider1x2Container');
  pos1y2_slider.parent('slider1y2Container');
  tilt12_slider.parent('slider1t2Container');

  pos1x3_slider.parent('slider1x3Container'); //point
  pos1y3_slider.parent('slider1y3Container');
  tilt13_slider.parent('slider1t3Container');

  //finger 2
  pos2x1_slider.parent('slider2x1Container');
  pos2y1_slider.parent('slider2y1Container');
  tilt21_slider.parent('slider2t1Container');

  pos2x2_slider.parent('slider2x2Container');
  pos2y2_slider.parent('slider2y2Container');
  tilt22_slider.parent('slider2t2Container');

  pos2x3_slider.parent('slider2x3Container'); //point
  pos2y3_slider.parent('slider2y3Container');
  tilt23_slider.parent('slider2t3Container');

	//finger 3
  pos3x1_slider.parent('slider3x1Container');
  pos3y1_slider.parent('slider3y1Container');
  tilt31_slider.parent('slider3t1Container');

  pos3x2_slider.parent('slider3x2Container');
  pos3y2_slider.parent('slider3y2Container');
  tilt32_slider.parent('slider3t2Container');

  pos3x3_slider.parent('slider3x3Container'); //point
  pos3y3_slider.parent('slider3y3Container');
  tilt33_slider.parent('slider3t3Container');

  //finger 4
  pos4x1_slider.parent('slider4x1Container');
  pos4y1_slider.parent('slider4y1Container');
  tilt41_slider.parent('slider4t1Container');

  pos4x2_slider.parent('slider4x2Container');
  pos4y2_slider.parent('slider4y2Container');
  tilt42_slider.parent('slider4t2Container');

  pos4x3_slider.parent('slider4x3Container'); //point
  pos4y3_slider.parent('slider4y3Container');
  tilt43_slider.parent('slider4t3Container');


  //finger 5
  pos5x1_slider.parent('slider5x1Container');
  pos5y1_slider.parent('slider5y1Container');
  tilt51_slider.parent('slider5t1Container');

  pos5x2_slider.parent('slider5x2Container');
  pos5y2_slider.parent('slider5y2Container');
  tilt52_slider.parent('slider5t2Container');

  pos5x3_slider.parent('slider5x3Container'); //point
  pos5y3_slider.parent('slider5y3Container');
  tilt53_slider.parent('slider5t3Container');



  palmX_slider.parent('palmXContainer');
  palmY_slider.parent('palmYContainer');
   palmWidth_slider.parent('palmWidthContainer'); 

  sel.parent(selectorContainer);
  button.parent(buttonContainer);
}

function sliderToDataObject() {       
  var obj = {};
  obj["box1"] = {};
  obj["box1"]["x1"] = pos1x1_slider.value();
  obj["box1"]["y1"] = pos1y1_slider.value();
  obj["box1"]["tilt1"] = tilt11_slider.value();


  obj["box1"]["x2"] = pos1x2_slider.value();
  obj["box1"]["y2"] = pos1y2_slider.value();
  obj["box1"]["tilt2"] = tilt12_slider.value();

  
  obj["box1"]["x3"] = pos1x3_slider.value();
  obj["box1"]["y3"] = pos1y3_slider.value();
  obj["box1"]["tilt3"] = tilt13_slider.value();



  obj["box2"] = {};
  obj["box2"]["x1"] = pos2x1_slider.value();
  obj["box2"]["y1"] = pos2y1_slider.value();
  obj["box2"]["tilt1"] = tilt21_slider.value();



  obj["box2"]["x2"] = pos2x2_slider.value();
  obj["box2"]["y2"] = pos2y2_slider.value();
  obj["box2"]["tilt2"] = tilt22_slider.value();


  obj["box2"]["x3"] = pos2x3_slider.value();
  obj["box2"]["y3"] = pos2y3_slider.value();
  obj["box2"]["tilt3"] = tilt23_slider.value();


  obj["box3"] = {};
  obj["box3"]["x1"] = pos3x1_slider.value();
  obj["box3"]["y1"] = pos3y1_slider.value();
  obj["box3"]["tilt1"] = tilt31_slider.value();


  obj["box3"]["x2"] = pos3x2_slider.value();
  obj["box3"]["y2"] = pos3y2_slider.value();
  obj["box3"]["tilt2"] = tilt32_slider.value();

  obj["box3"]["x3"] = pos3x3_slider.value();
  obj["box3"]["y3"] = pos3y3_slider.value();
  obj["box3"]["tilt3"] = tilt33_slider.value();


   obj["box4"] = {};
  obj["box4"]["x1"] = pos4x1_slider.value();
  obj["box4"]["y1"] = pos4y1_slider.value();
  obj["box4"]["tilt1"] = tilt41_slider.value();


  obj["box4"]["x2"] = pos4x2_slider.value();
  obj["box4"]["y2"] = pos4y2_slider.value();
  obj["box4"]["tilt2"] = tilt42_slider.value();


  obj["box4"]["x3"] = pos4x3_slider.value();
  obj["box4"]["y3"] = pos4y3_slider.value();
  obj["box4"]["tilt3"] = tilt43_slider.value();


  obj["box5"] = {};
  obj["box5"]["x1"] = pos5x1_slider.value();
  obj["box5"]["y1"] = pos5y1_slider.value();
  obj["box5"]["tilt1"] = tilt51_slider.value();


  obj["box5"]["x2"] = pos5x2_slider.value();
  obj["box5"]["y2"] = pos5y2_slider.value();
  obj["box5"]["tilt2"] = tilt52_slider.value();


  obj["box5"]["x3"] = pos5x3_slider.value();
  obj["box5"]["y3"] = pos5y3_slider.value();
  obj["box5"]["tilt3"] = tilt53_slider.value();


   obj["palm"] = {};
   obj["palm"]["x"] = palmX_slider.value();
   obj["palm"]["y"] = palmY_slider.value();
  obj["palm"]["width"] = palmWidth_slider.value();
  return obj;
}

function dataObjectToSliders(obj) {     
	//ONE
  pos1x1_slider.value(obj["box1"]["x1"]);
  pos1y1_slider.value(obj["box1"]["y1"]);
  tilt11_slider.value(obj["box1"]["tilt1"]);

   pos1x2_slider.value(obj["box1"]["x2"]);
  pos1y2_slider.value(obj["box1"]["y2"]);
  tilt12_slider.value(obj["box1"]["tilt2"]);

   pos1x3_slider.value(obj["box1"]["x3"]);
  pos1y3_slider.value(obj["box1"]["y3"]);
  tilt13_slider.value(obj["box1"]["tilt3"]);

//TWO
  pos2x1_slider.value(obj["box2"]["x1"]);
  pos2y1_slider.value(obj["box2"]["y1"]);
  tilt21_slider.value(obj["box2"]["tilt1"]);


  pos2x2_slider.value(obj["box2"]["x2"]);
  pos2y2_slider.value(obj["box2"]["y2"]);
  tilt22_slider.value(obj["box2"]["tilt2"]);


  pos2x3_slider.value(obj["box2"]["x3"]);
  pos2y3_slider.value(obj["box2"]["y3"]);
  tilt23_slider.value(obj["box2"]["tilt3"]);


//THREE
  pos3x1_slider.value(obj["box3"]["x1"]);
  pos3y1_slider.value(obj["box3"]["y1"]);
  tilt31_slider.value(obj["box3"]["tilt1"]);


  pos3x2_slider.value(obj["box3"]["x2"]);
  pos3y2_slider.value(obj["box3"]["y2"]);
  tilt32_slider.value(obj["box3"]["tilt2"]);
  
  pos3x3_slider.value(obj["box3"]["x3"]);
  pos3y3_slider.value(obj["box3"]["y3"]);
  tilt33_slider.value(obj["box3"]["tilt3"]);
  


//FOUR
  pos4x1_slider.value(obj["box4"]["x1"]);
  pos4y1_slider.value(obj["box4"]["y1"]);
  tilt41_slider.value(obj["box4"]["tilt1"]);


  pos4x2_slider.value(obj["box4"]["x2"]);
  pos4y2_slider.value(obj["box4"]["y2"]);
  tilt42_slider.value(obj["box4"]["tilt2"]);


  pos4x3_slider.value(obj["box4"]["x3"]);
  pos4y3_slider.value(obj["box4"]["y3"]);
  tilt43_slider.value(obj["box4"]["tilt3"]);

//FIVE
  pos5x1_slider.value(obj["box5"]["x1"]);
  pos5y1_slider.value(obj["box5"]["y1"]);
  tilt51_slider.value(obj["box5"]["tilt1"]);


  pos5x2_slider.value(obj["box5"]["x2"]);
  pos5y2_slider.value(obj["box5"]["y2"]);
  tilt52_slider.value(obj["box5"]["tilt2"]);


  pos5x3_slider.value(obj["box5"]["x3"]);
  pos5y3_slider.value(obj["box5"]["y3"]);
  tilt53_slider.value(obj["box5"]["tilt3"]);


  palmX_slider.value(obj["palm"]["x"]);
  palmY_slider.value(obj["palm"]["y"]);
  palmWidth_slider.value(obj["palm"]["width"]);
}

function letterChangedEvent() {
  var item = sel.value();
  dataObjectToSliders(savedValues[item]);
}

function buttonPressedEvent() {
  var obj = sliderToDataObject();
  json = JSON.stringify(obj, null, 2);
  alert(json);
}

var colorFront = [207, 222, 227];
var colorBack = '#ffffcc';

////////////////////////////////////////////////////DRAWING BIT LOOK
function drawFinger(x, y, tilt, colour, scale) {
  var middle_x = canvasWidth / 3*2;
  var middle_y = canvasHeight / 2;
  resetMatrix();
  push();
  translate(middle_x, middle_y);
  rotate(tilt);

  //var scale = 10;

  fill(colour);
  // rect(-100,-100,100,100);
  ellipse(x, y, 20*scale, 10*scale);
  pop();
  //ellipse(0,0,30,60)
}
	function drawPalm(Ox, Oy,Pwidth){
	 var middle_x = canvasWidth / 3*2;
  var middle_y = canvasHeight / 2;
  resetMatrix();
  push();
  translate(middle_x, middle_y);
		fill(0);
    width = Pwidth.value();
    var x = Ox.value();
    var y = Oy.value();
		ellipse(x,y,width,200);
		pop();
}

function drawFromSliders(x_offset, y_offset, tilt_slider,colour, scale) {
  var x, y, tilt;
  x = x_offset.value();
  y = y_offset.value();
  tilt = tilt_slider.value();
  drawFinger(x,y, tilt, colour, scale);
}

function draw () {
  background(colorBack);
  fill(colorFront);
  stroke(95, 52, 8);
  drawPalm(palmX_slider, palmY_slider, palmWidth_slider);

   //one
  drawFromSliders(pos1x1_slider, pos1y1_slider, tilt11_slider,'#666699', 5); // purple
  drawFromSliders(pos1x2_slider, pos1y2_slider, tilt12_slider,'#666699', 5);
  drawFromSliders(pos1x3_slider, pos1y3_slider, tilt13_slider,'#666699', 5);
  
  //two
  drawFromSliders(pos2x1_slider, pos2y1_slider, tilt21_slider, '#4ce600',3); // Green
  drawFromSliders(pos2x2_slider, pos2y2_slider, tilt22_slider, '#4ce600',3);
  drawFromSliders(pos2x3_slider, pos2y3_slider, tilt23_slider, '#4ce600',3);
  
  //three
  drawFromSliders(pos3x1_slider, pos3y1_slider, tilt31_slider, '#ffff33',3); // yellow
  drawFromSliders(pos3x2_slider, pos3y2_slider, tilt32_slider, '#ffff33',3);
  drawFromSliders(pos3x3_slider, pos3y3_slider, tilt33_slider, '#ffff33',3);
  

  //four
  drawFromSliders(pos4x1_slider, pos4y1_slider, tilt41_slider,'#ffa31a',3); // orange
  drawFromSliders(pos4x2_slider, pos4y2_slider, tilt42_slider,'#ffa31a',3);
  drawFromSliders(pos4x3_slider, pos4y3_slider, tilt43_slider,'#ffa31a',3);

  //five
  drawFromSliders(pos5x1_slider, pos5y1_slider, tilt51_slider, '#ff3300',2); //red 
  drawFromSliders(pos5x2_slider, pos5y2_slider, tilt52_slider, '#ff3300',2);
  drawFromSliders(pos5x3_slider, pos5y3_slider, tilt53_slider, '#ff3300',2);
  

}

function keyTyped() {
  if (key == '!') {
    saveBlocksImages();
  }
  else if (key == '@') {
    saveBlocksImages(true);
  }
}
