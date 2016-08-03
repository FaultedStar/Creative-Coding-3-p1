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
        "position": -200,
        "tilt": 90
      },
      "box2": {
        "position": -154,
        "tilt": 93
      },
      "box3": {
        "position": -114,
        "tilt": 93
      },
      "box4": {
        "position": -124,
        "tilt": 66
      },
      "box5": {
        "position": -93,
        "tilt": 96
      }

    },
  "B":
    {
  "box1": {
    "position": -199,
    "tilt": 90
  },
  "box2": {
    "position": -157,
    "tilt": 93
  },
  "box3": {
    "position": -114,
    "tilt": 93
  },
  "box4": {
    "position": -13,
    "tilt": 51
  },
  "box5": {
    "position": -93,
    "tilt": 96
  }
},
  "C":
    {
  "box1": {
    "position": 154,
    "tilt": -9
  },
  "box2": {
    "position": 118,
    "tilt": 1
  },
  "box3": {
    "position": -200,
    "tilt": 114
  },
  "box4": {
    "position": -13,
    "tilt": 26
  },
  "box5": {
    "position": -93,
    "tilt": 91
  }
}
}

function setup () {
  // create the drawing canvas, save the canvas element
  main_canvas = createCanvas(canvasWidth, canvasHeight);

  // rotation in degrees (more slider friendly)
  angleMode(DEGREES);

  // create two sliders
  pos1_slider = createSlider(-200, 200, 0);
  tilt1_slider = createSlider(-180, 180, 0);
  pos2_slider = createSlider(-200, 200, 0);
  tilt2_slider = createSlider(-180, 180, 0);
  pos3_slider = createSlider(-200, 200, 0);
  tilt3_slider = createSlider(-180, 180, 0);
  pos4_slider = createSlider(-200, 200, 0);
  tilt4_slider = createSlider(-180, 180, 0);
  pos5_slider = createSlider(-200, 200, 0);
  tilt5_slider = createSlider(-180, 180, 0);
  sel = createSelect();
  sel.option('A');
  sel.option('B');
  sel.option('C');
  sel.changed(letterChangedEvent);

  button = createButton('show data');
  button.mousePressed(buttonPressedEvent);

  // position each element on the page
  main_canvas.parent('canvasContainer');
  pos1_slider.parent('slider1Container');
  tilt1_slider.parent('slider2Container');
  pos2_slider.parent('slider3Container');
  tilt2_slider.parent('slider4Container');
  pos3_slider.parent('slider5Container');
  tilt3_slider.parent('slider6Container');
   pos4_slider.parent('slider7Container');
   tilt4_slider.parent('slider8Container');
	pos5_slider.parent('slider9Container');
  	tilt5_slider.parent('slider10Container');


  sel.parent(selectorContainer);
  button.parent(buttonContainer);
}

function sliderToDataObject() {
  var obj = {};
  obj["box1"] = {};
  obj["box1"]["position"] = pos1_slider.value();
  obj["box1"]["tilt"] = tilt1_slider.value();
  obj["box2"] = {};
  obj["box2"]["position"] = pos2_slider.value();
  obj["box2"]["tilt"] = tilt2_slider.value();
  obj["box3"] = {};
  obj["box3"]["position"] = pos3_slider.value();
  obj["box3"]["tilt"] = tilt3_slider.value();
    obj["box4"] = {};
  obj["box4"]["position"] = pos4_slider.value();
  obj["box4"]["tilt"] = tilt4_slider.value();
    obj["box5"] = {};
  obj["box5"]["position"] = pos5_slider.value();
  obj["box5"]["tilt"] = tilt5_slider.value();
  return obj;
}

function dataObjectToSliders(obj) {
  pos1_slider.value(obj["box1"]["position"]);
  tilt1_slider.value(obj["box1"]["tilt"]);
  pos2_slider.value(obj["box2"]["position"]);
  tilt2_slider.value(obj["box2"]["tilt"]);
  pos3_slider.value(obj["box3"]["position"]);
  tilt3_slider.value(obj["box3"]["tilt"]);
    pos4_slider.value(obj["box4"]["position"]);
  tilt4_slider.value(obj["box4"]["tilt"]);
    pos5_slider.value(obj["box5"]["position"]);
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
function drawPart(y_offset, pos, tilt) {
  var middle_x = 2 * canvasWidth / 3;
  var middle_y = canvasHeight / 4*3;
  resetMatrix();
  translate(middle_x + pos, middle_y + y_offset);
  rotate(tilt);

  var scale = 10;

  fill(colorFront);
  // rect(-100,-100,100,100);
  ellipse(-20*scale, -3*scale, 20*scale, 3*scale);
}

function drawFromSliders(y_offset, pos_slider, tilt_slider) {
  var pos, tilt;
  pos = pos_slider.value();
  tilt = tilt_slider.value();
  drawPart(y_offset, pos, tilt);
}

function draw () {
  background(colorBack);
  fill(colorFront);
  stroke(95, 52, 8);

  drawFromSliders(-50, pos1_slider, tilt1_slider);
  drawFromSliders(  0, pos2_slider, tilt2_slider);
  drawFromSliders( 50, pos3_slider, tilt3_slider);
    drawFromSliders( 100, pos4_slider, tilt4_slider);
      drawFromSliders( 150, pos5_slider, tilt5_slider);
}

function keyTyped() {
  if (key == '!') {
    saveBlocksImages();
  }
  else if (key == '@') {
    saveBlocksImages(true);
  }
}
