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
    "x": -25,
    "y": 65,
    "tilt": -58
  },
  "box2": {
    "x": 0,
    "y": -26,
    "tilt": 93
  },
  "box3": {
    "x": 0,
    "y": 5,
    "tilt": 90
  },
  "box4": {
    "x": 0,
    "y": 37,
    "tilt": 90
  },
  "box5": {
    "x": 5,
    "y": 66,
    "tilt": 90
  }
}

    ,
  "B":
    {
  "box1": {
    "x": -11,
    "y": 8,
    "tilt": 45
  },
  "box2": {
    "x": -120,
    "y": -26,
    "tilt": 93
  },
  "box3": {
    "x": -125,
    "y": 5,
    "tilt": 90
  },
  "box4": {
    "x": -117,
    "y": 37,
    "tilt": 90
  },
  "box5": {
    "x": -100,
    "y": 66,
    "tilt": 82
  }
},
  "C":
    {
  "box1": {
    "x": 11,
    "y": 61,
    "tilt": -13
  },
  "box2": {
    "x": 0,
    "y": -81,
    "tilt": -3
  },
  "box3": {
    "x": 14,
    "y": -75,
    "tilt": 0
  },
  "box4": {
    "x": 0,
    "y": -64,
    "tilt": 0
  },
  "box5": {
    "x": -11,
    "y": -59,
    "tilt": 0
  }
}
}

function setup () {
  // create the drawing canvas, save the canvas element
  main_canvas = createCanvas(canvasWidth, canvasHeight);

  // rotation in degrees (more slider friendly)
  angleMode(DEGREES);

  // create two sliders
  pos1x_slider = createSlider(-200, 200, 0);
  pos1y_slider = createSlider(-200, 200, 0);
  tilt1_slider = createSlider(-180, 180, 0);
  pos2x_slider = createSlider(-200, 200, 0);
  pos2y_slider = createSlider(-200, 200, 0);
  tilt2_slider = createSlider(-180, 180, 0);
  pos3x_slider = createSlider(-200, 200, 0);
  pos3y_slider = createSlider(-200, 200, 0);
  tilt3_slider = createSlider(-180, 180, 0);
  pos4x_slider = createSlider(-200, 200, 0);
  pos4y_slider = createSlider(-200, 200, 0);
  tilt4_slider = createSlider(-180, 180, 0);
  pos5x_slider = createSlider(-200, 200, 0);
  pos5y_slider = createSlider(-200, 200, 0);
  tilt5_slider = createSlider(-180, 180, 0);
  sel = createSelect();
  sel.option('A');
  sel.option('B');
  sel.option('C');
  sel.changed(letterChangedEvent);

  button = createButton('show data');
  button.mousePressed(buttonPressedEvent);

  // x each element on the page
  main_canvas.parent('canvasContainer');
  pos1x_slider.parent('slider1xContainer');
  pos1y_slider.parent('slider1yContainer');
  tilt1_slider.parent('slider1tContainer');
  pos2x_slider.parent('slider2xContainer');
  pos2y_slider.parent('slider2yContainer');
  tilt2_slider.parent('slider2tContainer');
  pos3x_slider.parent('slider3xContainer');
  pos3y_slider.parent('slider3yContainer');
  tilt3_slider.parent('slider3tContainer');
  pos4x_slider.parent('slider4xContainer');
  pos4y_slider.parent('slider4yContainer');
  tilt4_slider.parent('slider4tContainer');
	pos5x_slider.parent('slider5xContainer');
  pos5y_slider.parent('slider5yContainer');
  tilt5_slider.parent('slider5tContainer');


  sel.parent(selectorContainer);
  button.parent(buttonContainer);
}

function sliderToDataObject() {
  var obj = {};
  obj["box1"] = {};
  obj["box1"]["x"] = pos1x_slider.value();
  obj["box1"]["y"] = pos1y_slider.value();
  obj["box1"]["tilt"] = tilt1_slider.value();
  obj["box2"] = {};
  obj["box2"]["x"] = pos2x_slider.value();
  obj["box2"]["y"] = pos2y_slider.value();
  obj["box2"]["tilt"] = tilt2_slider.value();
  obj["box3"] = {};
  obj["box3"]["x"] = pos3x_slider.value();
  obj["box3"]["y"] = pos3y_slider.value();
  obj["box3"]["tilt"] = tilt3_slider.value();
   obj["box4"] = {};
  obj["box4"]["x"] = pos4x_slider.value();
  obj["box4"]["y"] = pos4y_slider.value();
  obj["box4"]["tilt"] = tilt4_slider.value();
  obj["box5"] = {};
  obj["box5"]["x"] = pos5x_slider.value();
  obj["box5"]["y"] = pos5y_slider.value();
  obj["box5"]["tilt"] = tilt5_slider.value();
  return obj;
}

function dataObjectToSliders(obj) {
  pos1x_slider.value(obj["box1"]["x"]);
  pos1y_slider.value(obj["box1"]["y"]);
  tilt1_slider.value(obj["box1"]["tilt"]);
  pos2x_slider.value(obj["box2"]["x"]);
  pos2y_slider.value(obj["box2"]["y"]);
  tilt2_slider.value(obj["box2"]["tilt"]);
  pos3x_slider.value(obj["box3"]["x"]);
  pos3y_slider.value(obj["box3"]["y"]);
  tilt3_slider.value(obj["box3"]["tilt"]);
  pos4x_slider.value(obj["box4"]["x"]);
  pos4y_slider.value(obj["box4"]["y"]);
  tilt4_slider.value(obj["box4"]["tilt"]);
  pos5x_slider.value(obj["box5"]["x"]);
  pos5y_slider.value(obj["box5"]["y"]);
  tilt5_slider.value(obj["box5"]["tilt"]);
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
  ellipse(x, y, 20*scale, 3*scale);
  pop();
  //ellipse(0,0,30,60)
}
	function drawPalm(){
		push();
		fill(0);
		ellipse(canvasWidth/3*2,canvasHeight/3*2, 200,200);
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

  drawFromSliders(pos1x_slider, pos1y_slider, tilt1_slider,'#666699', 12);
  drawFromSliders(pos2x_slider, pos2y_slider, tilt2_slider, '#4ce600',10);
  drawFromSliders(pos3x_slider, pos3y_slider, tilt3_slider, '#ffff33',10);
  drawFromSliders(pos4x_slider, pos4y_slider, tilt4_slider,'#ffa31a',10);
  drawFromSliders(pos5x_slider, pos5y_slider, tilt5_slider, '#ff3300',8);
  drawPalm();

}

function keyTyped() {
  if (key == '!') {
    saveBlocksImages();
  }
  else if (key == '@') {
    saveBlocksImages(true);
  }
}
