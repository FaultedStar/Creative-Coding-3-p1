
var canvasWidth = 960;
var canvasHeight = 500;



// this is the variable that holds all character objects
var letterParams = null;
// the sliders will write to this location
var debugLetter = "9";


var initialDrawMode = "solo";
var curDrawMode;

// these variables are used for animation
var soloCurLetter = "A";
var soloPrevObj = null;
var soloIsAnimating = false;
var soloNumAnimationFrames = 60;
var soloCurAnimationFrame = 0;


var lettersJson; 
var letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";

function preload() {
  // sometimes when debugging, letterParams is initialized locally
  if(letterParams == null) {
    letterParams = loadJSON('letters.json');
  }
}





function setup () {
  // create the drawing canvas, save the canvas element
  main_canvas = createCanvas(canvasWidth, canvasHeight);

  // rotation in degrees (more slider friendly)
  angleMode(DEGREES);

  sel_char = createSelect();
  for (var i = 0, len = letters.length; i < len; i++) {
    sel_char.option(letters[i]);
  }
  sel_char.changed(letterChangedEvent);

  sel_mode = createSelect();
  sel_mode.option("alphabet");  
  sel_mode.option("solo");  
  sel_mode.changed(modeChangedEvent);
  sel_mode.value(initialDrawMode);
  curDrawMode = initialDrawMode;



  changeToLetter('D')
//  sel.changed(letterChangedEvent);

  button = createButton('show data');
  button.mousePressed(buttonPressedEvent);

  // x each element on the page
  main_canvas.parent('canvasContainer');      



  button.parent(buttonContainer);
}

function modeChangedEvent() {
  curDrawMode = sel_mode.value();
}

// Funcation called when DOM letter selector is changed
function letterChangedEvent() {
  var item = sel_char.value();
  dataObjectToSliders(letterParams[item]);
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
  currentLetter = sel.value;
  
 // dataObjectToSliders(savedValues[item]);

}

function changeToLetter(letter){
soloCurLetter = letter;

//dataObjectToSliders(savedValues[letter]);


}
function buttonPressedEvent() {
  var obj = sliderToDataObject();
  json = JSON.stringify(obj, null, 2);
  alert(json);
}

var colorFront = [207, 222, 227];
var colorBack = '#ffffcc';

function computeCurrentSoloChar() {
  // now figure out what object to draw
  var obj;
  if (soloIsAnimating) {
    nextObj = letterParams[soloCurLetter];
    // interpolation logic here
    obj = {};
    obj["box1"] = {};
    obj["box1"]["x1"] = map(soloCurAnimationFrame, 0, soloNumAnimationFrames, soloPrevObj["box1"]["x1"], nextObj["box1"]["x1"])
    obj["box1"]["y1"] = map(soloCurAnimationFrame, 0, soloNumAnimationFrames, soloPrevObj["box1"]["y1"], nextObj["box1"]["y1"])
    obj["box1"]["tilt1"] = map(soloCurAnimationFrame, 0, soloNumAnimationFrames, soloPrevObj["box1"]["tilt1"], nextObj["box1"]["tilt1"])

    obj["box1"]["x2"] = map(soloCurAnimationFrame, 0, soloNumAnimationFrames, soloPrevObj["box1"]["x2"], nextObj["box1"]["x2"])
    obj["box1"]["y2"] = map(soloCurAnimationFrame, 0, soloNumAnimationFrames, soloPrevObj["box1"]["y2"], nextObj["box1"]["y2"])
    obj["box1"]["tilt2"] = map(soloCurAnimationFrame, 0, soloNumAnimationFrames, soloPrevObj["box1"]["tilt2"], nextObj["box1"]["tilt2"])

    obj["box1"]["x3"] = map(soloCurAnimationFrame, 0, soloNumAnimationFrames, soloPrevObj["box1"]["x3"], nextObj["box1"]["x3"])
    obj["box1"]["y3"] = map(soloCurAnimationFrame, 0, soloNumAnimationFrames, soloPrevObj["box1"]["y3"], nextObj["box1"]["y3"])
    obj["box1"]["tilt3"] = map(soloCurAnimationFrame, 0, soloNumAnimationFrames, soloPrevObj["box1"]["tilt3"], nextObj["box1"]["tilt3"])


    obj["box2"] = {};
    obj["box2"]["x1"] = map(soloCurAnimationFrame, 0, soloNumAnimationFrames, soloPrevObj["box2"]["x1"], nextObj["box2"]["x1"])
    obj["box2"]["y1"] = map(soloCurAnimationFrame, 0, soloNumAnimationFrames, soloPrevObj["box2"]["y1"], nextObj["box2"]["y1"])
    obj["box2"]["tilt1"] = map(soloCurAnimationFrame, 0, soloNumAnimationFrames, soloPrevObj["box2"]["tilt1"], nextObj["box2"]["tilt1"])

    obj["box2"]["x2"] = map(soloCurAnimationFrame, 0, soloNumAnimationFrames, soloPrevObj["box2"]["x2"], nextObj["box2"]["x2"])
    obj["box2"]["y2"] = map(soloCurAnimationFrame, 0, soloNumAnimationFrames, soloPrevObj["box2"]["y2"], nextObj["box2"]["y2"])
    obj["box2"]["tilt2"] = map(soloCurAnimationFrame, 0, soloNumAnimationFrames, soloPrevObj["box2"]["tilt2"], nextObj["box2"]["tilt2"])

    obj["box2"]["x3"] = map(soloCurAnimationFrame, 0, soloNumAnimationFrames, soloPrevObj["box2"]["x3"], nextObj["box2"]["x3"])
    obj["box2"]["y3"] = map(soloCurAnimationFrame, 0, soloNumAnimationFrames, soloPrevObj["box2"]["y3"], nextObj["box2"]["y3"])
    obj["box2"]["tilt3"] = map(soloCurAnimationFrame, 0, soloNumAnimationFrames, soloPrevObj["box2"]["tilt3"], nextObj["box2"]["tilt3"])


    obj["box3"] = {};
    obj["box3"]["x1"] = map(soloCurAnimationFrame, 0, soloNumAnimationFrames, soloPrevObj["box3"]["x1"], nextObj["box3"]["x1"])
    obj["box3"]["y1"] = map(soloCurAnimationFrame, 0, soloNumAnimationFrames, soloPrevObj["box3"]["y1"], nextObj["box3"]["y1"])
    obj["box3"]["tilt1"] = map(soloCurAnimationFrame, 0, soloNumAnimationFrames, soloPrevObj["box3"]["tilt1"], nextObj["box3"]["tilt1"])

    obj["box3"]["x2"] = map(soloCurAnimationFrame, 0, soloNumAnimationFrames, soloPrevObj["box3"]["x2"], nextObj["box3"]["x2"])
    obj["box3"]["y2"] = map(soloCurAnimationFrame, 0, soloNumAnimationFrames, soloPrevObj["box3"]["y2"], nextObj["box3"]["y2"])
    obj["box3"]["tilt2"] = map(soloCurAnimationFrame, 0, soloNumAnimationFrames, soloPrevObj["box3"]["tilt2"], nextObj["box3"]["tilt2"])

    obj["box3"]["x3"] = map(soloCurAnimationFrame, 0, soloNumAnimationFrames, soloPrevObj["box3"]["x3"], nextObj["box3"]["x3"])
    obj["box3"]["y3"] = map(soloCurAnimationFrame, 0, soloNumAnimationFrames, soloPrevObj["box3"]["y3"], nextObj["box3"]["y3"])
    obj["box3"]["tilt3"] = map(soloCurAnimationFrame, 0, soloNumAnimationFrames, soloPrevObj["box3"]["tilt3"], nextObj["box3"]["tilt3"])


       obj["box4"] = {};
    obj["box4"]["x1"] = map(soloCurAnimationFrame, 0, soloNumAnimationFrames, soloPrevObj["box4"]["x1"], nextObj["box4"]["x1"])
    obj["box4"]["y1"] = map(soloCurAnimationFrame, 0, soloNumAnimationFrames, soloPrevObj["box4"]["y1"], nextObj["box4"]["y1"])
    obj["box4"]["tilt1"] = map(soloCurAnimationFrame, 0, soloNumAnimationFrames, soloPrevObj["box4"]["tilt1"], nextObj["box4"]["tilt1"])

    obj["box4"]["x2"] = map(soloCurAnimationFrame, 0, soloNumAnimationFrames, soloPrevObj["box4"]["x2"], nextObj["box4"]["x2"])
    obj["box4"]["y2"] = map(soloCurAnimationFrame, 0, soloNumAnimationFrames, soloPrevObj["box4"]["y2"], nextObj["box4"]["y2"])
    obj["box4"]["tilt2"] = map(soloCurAnimationFrame, 0, soloNumAnimationFrames, soloPrevObj["box4"]["tilt2"], nextObj["box4"]["tilt2"])

    obj["box4"]["x3"] = map(soloCurAnimationFrame, 0, soloNumAnimationFrames, soloPrevObj["box4"]["x3"], nextObj["box4"]["x3"])
    obj["box4"]["y3"] = map(soloCurAnimationFrame, 0, soloNumAnimationFrames, soloPrevObj["box4"]["y3"], nextObj["box4"]["y3"])
    obj["box4"]["tilt3"] = map(soloCurAnimationFrame, 0, soloNumAnimationFrames, soloPrevObj["box4"]["tilt3"], nextObj["box4"]["tilt3"])


       obj["box5"] = {};
    obj["box5"]["x1"] = map(soloCurAnimationFrame, 0, soloNumAnimationFrames, soloPrevObj["box5"]["x1"], nextObj["box5"]["x1"])
    obj["box5"]["y1"] = map(soloCurAnimationFrame, 0, soloNumAnimationFrames, soloPrevObj["box5"]["y1"], nextObj["box5"]["y1"])
    obj["box5"]["tilt1"] = map(soloCurAnimationFrame, 0, soloNumAnimationFrames, soloPrevObj["box5"]["tilt1"], nextObj["box5"]["tilt1"])

    obj["box5"]["x2"] = map(soloCurAnimationFrame, 0, soloNumAnimationFrames, soloPrevObj["box5"]["x2"], nextObj["box5"]["x2"])
    obj["box5"]["y2"] = map(soloCurAnimationFrame, 0, soloNumAnimationFrames, soloPrevObj["box5"]["y2"], nextObj["box5"]["y2"])
    obj["box5"]["tilt2"] = map(soloCurAnimationFrame, 0, soloNumAnimationFrames, soloPrevObj["box5"]["tilt2"], nextObj["box5"]["tilt2"])

    obj["box5"]["x3"] = map(soloCurAnimationFrame, 0, soloNumAnimationFrames, soloPrevObj["box5"]["x3"], nextObj["box5"]["x3"])
    obj["box5"]["y3"] = map(soloCurAnimationFrame, 0, soloNumAnimationFrames, soloPrevObj["box5"]["y3"], nextObj["box5"]["y3"])
    obj["box5"]["tilt3"] = map(soloCurAnimationFrame, 0, soloNumAnimationFrames, soloPrevObj["box5"]["tilt3"], nextObj["box5"]["tilt3"])

      obj["palm"] = {};
      obj["palm"]["x"] = map(soloCurAnimationFrame, 0, soloNumAnimationFrames, soloPrevObj["palm"]["x"], nextObj["palm"]["x"])
    obj["palm"]["y"] = map(soloCurAnimationFrame, 0, soloNumAnimationFrames, soloPrevObj["palm"]["y"], nextObj["palm"]["y"])
    obj["palm"]["width"] = map(soloCurAnimationFrame, 0, soloNumAnimationFrames, soloPrevObj["palm"]["width"], nextObj["palm"]["width"])

  }
  else {
    obj = letterParams[soloCurLetter];
  }
  return obj;
}
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
    width = Pwidth;
    var x = Ox;
    var y = Oy;
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

// NEVER TOUCHES SLIDERS
function drawFromDataObject(x, y, s, obj) {
  push();
  translate(x, y);
  scale(s, s);
    drawPalm(obj['palm']['x'], obj['palm']['y'], obj['palm']['width']);
  drawFinger(obj["box1"]["x1"], obj["box1"]["y1"], obj["box1"]["tilt1"],'#666699',s+1);
  drawFinger(obj["box1"]["x2"], obj["box1"]["y2"], obj["box1"]["tilt2"],'#666699',s+1);
  drawFinger(obj["box1"]["x3"], obj["box1"]["y3"], obj["box1"]["tilt3"],'#666699',s+1)

  drawFinger(obj["box2"]["x1"], obj["box2"]["y1"], obj["box2"]["tilt1"],'#4ce600',s);
  drawFinger(obj["box2"]["x2"], obj["box2"]["y2"], obj["box2"]["tilt2"],'#4ce600',s);
  drawFinger(obj["box2"]["x3"], obj["box2"]["y3"], obj["box2"]["tilt3"],'#4ce600',s);

  drawFinger(obj["box3"]["x1"], obj["box3"]["y1"], obj["box3"]["tilt1"],'#ffff33',s);
  drawFinger(obj["box3"]["x2"], obj["box3"]["y2"], obj["box3"]["tilt2"],'#ffff33',s);
  drawFinger(obj["box3"]["x3"], obj["box3"]["y3"], obj["box3"]["tilt3"],'#ffff33',s);

  drawFinger(obj["box4"]["x1"], obj["box4"]["y1"], obj["box4"]["tilt1"],'#ffa31a',s);
  drawFinger(obj["box4"]["x2"], obj["box4"]["y2"], obj["box4"]["tilt2"],'#ffa31a',s);
  drawFinger(obj["box4"]["x3"], obj["box4"]["y3"], obj["box4"]["tilt3"],'#ffa31a',s);

  drawFinger(obj["box5"]["x1"], obj["box5"]["y1"], obj["box5"]["tilt1"],'#ff3300',s-1);
  drawFinger(obj["box5"]["x2"], obj["box5"]["y2"], obj["box5"]["tilt2"],'#ff3300',s-1);
  drawFinger(obj["box5"]["x3"], obj["box5"]["y3"], obj["box5"]["tilt3"],'#ff3300',s-1);



  pop();
}

function draw () {
  background(colorBack);
  fill(colorFront);
  stroke(95, 52, 8);
  var o = 40
  var w2 = width - 2 * o
  var h2 = height - 2 * o

  if (curDrawMode == "solo") {
    // see if animation should be turned off
    if(soloIsAnimating && soloCurAnimationFrame >= soloNumAnimationFrames) {
      soloIsAnimating = false;
    }
    // if we are animating, increment the number of animation frames
    if(soloIsAnimating) {
      soloCurAnimationFrame = soloCurAnimationFrame + 1;
    }
    var obj = computeCurrentSoloChar();
    drawFromDataObject(o + w2/2.0, o + h2/2.0, 3, obj)
  }
//drawSliderMethod();
}

function drawSliderMethod(){


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
    } else {
         upper_key = key.toUpperCase();
    if (upper_key in letterParams) {
      if(curDrawMode == "solo") {
        soloPrevObj = computeCurrentSoloChar();
        soloCurLetter = upper_key;
        soloIsAnimating = true;
        soloCurAnimationFrame = 0;        
      }
      else if(curDrawMode == "alphabet") {
        sel_char.value(upper_key);
        dataObjectToSliders(letterParams[upper_key]);
      }
    }
  }

}