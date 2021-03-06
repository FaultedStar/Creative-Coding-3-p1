var canvasWidth = 960;
var canvasHeight = 500;

var glyphSelector;
var modeSelector;
var sizeSelector;

var val_sliders = [];
function setup () {
  // create the drawing canvas, save the canvas element
  var main_canvas = createCanvas(canvasWidth, canvasHeight);
  main_canvas.parent('canvasContainer');

  // create two sliders
  for (i=0; i<8; i++) {
    var slider = createSlider(0, 100, 50);
    slider.parent("slider" + (i+1) + "Container")
    slider.changed(sliderUpdated);
    slider.mouseMoved(sliderUpdated);
    slider.touchMoved(sliderUpdated);
    val_sliders.push(slider);
  }

  modeSelector = createSelect();
  modeSelector.option('gradient');
  modeSelector.option('analogy');
  modeSelector.option('drive');
  modeSelector.option('random_grid');
  modeSelector.changed(modeChangedEvent);
  modeSelector.value('gradient');
  modeSelector.parent('selector1Container');

  glyphSelector = createSelect();
  glyphSelector.option('glyph4');
  glyphSelector.option('glyph8');
  glyphSelector.changed(modeChangedEvent);
  glyphSelector.parent('selector2Container');

  sizeSelector = createSelect();
  sizeSelector.option('64');
  sizeSelector.option('128');
  sizeSelector.option('256');
  sizeSelector.parent('selector3Container');
  sizeSelector.value('128');
  sizeSelector.changed(sizeChangedEvent);

  button = createButton('redo');
  button.mousePressed(buttonPressedEvent);
  button.parent('buttonContainer');

  noLoop();
  refreshGridData();
  modeChangedEvent();
}

function sliderUpdated() {
    redraw();
}

function mouseClicked() {
  analogyCycleStep = (analogyCycleStep + 1) % 3;
  if(analogyCycleStep == 0) {
    refreshAnalogyData();
  }
  redraw();
}

function dataInterpolate(data1, data2, val) {
  var d = new Array(8);
  for(var i=0; i<8; i++) {
    d[i] = lerp(data1[i], data2[i], val);
  }
  return d;
}

var numGridRows;
var numGridCols;
var gridValues; // row, col order
var gridOffsetX, gridOffsetY;
var gridSpacingX, gridSpacingY;
// Generate data for putting glyphs in a grid

var numAnalogyChoices = 5;
var analogyValues = new Array(4);
var analogyChoices = new Array(numAnalogyChoices);
var analogyAnswer;
var analogyCycleStep;

function clamp(num, min, max) {
  return Math.min(Math.max(num, min), max);
}

function refreshAnalogyData() {
  for (var i=0; i<4; i++) {
    analogyValues[i] = new Array(8);
  }
  for (var i=0; i<3; i++) {
    for (var j=0; j<8; j++) {
      analogyValues[i][j] = random(100);
    }
  }
  for (var j=0; j<8; j++) {
    analogyValues[3][j] = clamp(analogyValues[1][j] - analogyValues[0][j] + analogyValues[2][j], 0, 100);
    // handle overflow
    analogyValues[1][j] = clamp(analogyValues[3][j] - analogyValues[2][j] + analogyValues[0][j], 0, 100);
  }
  analogyAnswer = Math.floor(random(numAnalogyChoices))
  for (var i=0; i<numAnalogyChoices; i++) {
    analogyChoices[i] = new Array(8);
    for (var j=0; j<8; j++) {
      if (i == analogyAnswer) {
        analogyChoices[i][j] = analogyValues[3][j];
      }
      else {
        analogyChoices[i][j] = random(100);
      }
    }
  }
  analogyCycleStep = 0;
}

function refreshGridData() {
  var glyphSize = parseInt(sizeSelector.value(), 10);

  if(glyphSize == 128) {
    numGridCols = 7;
    numGridRows = 3;
    gridOffsetX = 10;
    gridSpacingX = 136;
    gridOffsetY = 20;
    gridSpacingY = 166;
  }
  else if(glyphSize == 256) {
    numGridCols = 3;
    numGridRows = 1;
    gridOffsetX = 20;
    gridSpacingX = 320;
    gridOffsetY = 100;
    gridSpacingY = 500;
  }
  else if(glyphSize == 64) {
    numGridCols = 14;
    numGridRows = 7;
    gridOffsetX = 3;
    gridSpacingX = 68;
    gridOffsetY = 6;
    gridSpacingY = 71;
  }
  gridValues = new Array(numGridRows);
  for (var i=0; i<numGridRows; i++) {
    gridValues[i] = new Array(numGridCols);
    for (var j=0; j<numGridCols; j++) {
      gridValues[i][j] = new Array(8);
    }
  }
  var mode = modeSelector.value();
  if (mode == "gradient") {
    var top_left = Array(8);
    var top_right = Array(8);
    var bottom_left = Array(8);
    var bottom_right = Array(8);
    for (var k=0; k<8; k++) {
      top_left[k] = random(100);
      top_right[k] = random(100);
      bottom_left[k] = random(100);
      bottom_right[k] = random(100);
    }
    for (var i=0; i<numGridRows; i++) {
      if(numGridRows == 0) {
        var frac_down = 0;
      }
      else {
        var frac_down = i / (numGridRows - 1.0);
      }
      d_left = dataInterpolate(top_left, bottom_left, frac_down);
      d_right = dataInterpolate(top_right, bottom_right, frac_down);
      for (var j=0; j<numGridCols; j++) {
        if(numGridCols == 0) {
          var frac_over = 0;
        }
        else {
          var frac_over = j / (numGridCols - 1.0);
        }
        gridValues[i][j] = dataInterpolate(d_left, d_right, frac_over);
      }
    }
  }
  else {
    for (var i=0; i<numGridRows; i++) {
      for (var j=0; j<numGridCols; j++) {
        for (var k=0; k<8; k++) {
          gridValues[i][j][k] = random(100);
        }
      }
    }
  }
  refreshAnalogyData();
}

function sizeChangedEvent() {
  var mode = modeSelector.value();
  if (mode != "drive") {
    refreshGridData();
  }
  redraw();
}

function modeChangedEvent() {
  var mode = modeSelector.value();
  var glyph = glyphSelector.value();

  // enable/disable sliders
  if (mode === "drive") {
    // disable the button
    button.attribute('disabled','');

    // enable the size selector
    sizeSelector.removeAttribute('disabled');

    // enable the first four sliders
    for(i=0; i<4; i++) {
      val_sliders[i].removeAttribute('disabled');  
    }
    if(glyph === "glyph4") {
      for(i=4; i<8; i++) {
        val_sliders[i].attribute('disabled','');
      }
    }
    else {
      for(i=4; i<8; i++) {
        val_sliders[i].removeAttribute('disabled');  
      }
    }
  }
  else {
    // enable the button
    button.removeAttribute('disabled');

    // disable the sliders
    for(i=0; i<8; i++) {
      val_sliders[i].attribute('disabled','');
    }

    if (mode == "analogy") {
      // enable the size selector
      sizeSelector.attribute('disabled','');
    }
    else {
      // enable the size selector
      sizeSelector.removeAttribute('disabled');
    }

    // refresh data
    refreshGridData();
  }
  redraw();
}

function buttonPressedEvent() {
  analogyCycleStep = 0;
  refreshGridData();
  redraw();
}

var colorBack = [128, 128, 128];
var colorFront = [200, 200, 200];

function drawDriveMode() {
  var glyph_is_glyph4 = true;
  if(glyphSelector.value() === "glyph8")
    glyph_is_glyph4 = false;

  var glyphSize = parseInt(sizeSelector.value(), 10);
  var halfSize = glyphSize / 2;

  background(colorBack);
  var halfSize = glyphSize / 2;
  var middle_x = canvasWidth / 2;
  var middle_y = canvasHeight / 2;
  resetMatrix();
  translate(middle_x - halfSize, middle_y - halfSize);
  var val = [0,0,0,0,0,0,0,0];
  for(i=0; i<8; i++) {
    val[i] = val_sliders[i].value();
  }
  stroke(128, 128, 192);
  noFill();
  if(glyph_is_glyph4) {
    ellipse(halfSize, halfSize, glyphSize+2);
    glyph4(val, glyphSize)
  }
  else {
    rect(-1, -1, glyphSize+2, glyphSize+2);
    glyph8(val, glyphSize)    
  }
}

function drawGridMode() {
  var glyph_fn = glyph4;
  if(glyphSelector.value() === "glyph8")
    glyph_fn = glyph8;

  var glyphSize = parseInt(sizeSelector.value(), 10);
  background(colorBack);
  for (var i=0; i<numGridRows; i++) {
    for (var j=0; j<numGridCols; j++) {
      resetMatrix();
      translate(gridOffsetX + j * gridSpacingX, gridOffsetY + i * gridSpacingY);
      for (var k=0; k<8; k++) {
        glyph_fn(gridValues[i][j], glyphSize);
      }
    }
  }
}

var analogyOffsetX = 350;
var analogyOffsetY = 40;
var analogySpacingX = 160;
var analogySpacingY = 160;
var analogyChoiceOffsetX = 260;
var analogyChoiceOffsetY = 380;
var analogyChoiceSpacingX = 100;

function drawAnalogy() {
  background(colorBack);

  var glyph_fn = glyph4;
  if(glyphSelector.value() === "glyph8")
    glyph_fn = glyph8;

  resetMatrix();
  translate(analogyOffsetX + 0 * analogySpacingX, analogyOffsetY + 0 * analogySpacingY);
  glyph_fn(analogyValues[0], 128);
  resetMatrix();
  translate(analogyOffsetX + 1 * analogySpacingX, analogyOffsetY + 0 * analogySpacingY);
  glyph_fn(analogyValues[1], 128);
  resetMatrix();
  translate(analogyOffsetX + 0 * analogySpacingX, analogyOffsetY + 1 * analogySpacingY);
  glyph_fn(analogyValues[2], 128);
  resetMatrix();
  translate(analogyOffsetX + 1 * analogySpacingX, analogyOffsetY + 1 * analogySpacingY);
  if(analogyCycleStep == 2) {
    glyph_fn(analogyValues[3], 128);
  }
  else {
    stroke(64, 64, 192);
    noFill();
    if(glyph_fn === glyph4) {
      ellipse(64, 64, 128+2);
    }
    else {
      rect(-1, -1, 128+2, 128+2);
    }
  }

  if(analogyCycleStep != 0) {
    for(var i=0; i<numAnalogyChoices; i++) {
      resetMatrix();
      translate(analogyChoiceOffsetX + i * analogyChoiceSpacingX, analogyChoiceOffsetY);
      if(analogyCycleStep == 2 && analogyAnswer == i) {
        stroke(64, 64, 192);
        fill(64, 64, 192);
        rect(-6, -6, 64+12, 64+12);
      }
      glyph_fn(analogyChoices[i], 64);
    }
  }
}

function draw () {
  var mode = modeSelector.value();

  if (mode == "drive") {
    drawDriveMode();
  }
  else if (mode == "analogy") {
    drawAnalogy();
  }
  else {
    drawGridMode();
  }
}

function keyTyped() {
  if (key == '!') {
    saveBlocksImages();
  }
  else if (key == '@') {
    saveBlocksImages(true);
  }
}