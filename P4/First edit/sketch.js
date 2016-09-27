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
    val_sliders.push(slider);
  }

  glyphSelector = createSelect();
  glyphSelector.option('glyph4');
  glyphSelector.option('glyph8');
  glyphSelector.changed(modeChangedEvent);
  glyphSelector.parent('selector1Container');

  modeSelector = createSelect();
  modeSelector.option('drive');
  modeSelector.option('random_grid');
  // modeSelector.option('sorttest');
  modeSelector.changed(modeChangedEvent);
  modeSelector.parent('selector2Container');

  sizeSelector = createSelect();
  sizeSelector.option('64');
  sizeSelector.option('128');
  sizeSelector.option('256');
  sizeSelector.parent('selector3Container');
  sizeSelector.value('256');
  sizeSelector.changed(sizeChangedEvent);

  button = createButton('redo');
  button.mousePressed(buttonPressedEvent);
  button.parent('buttonContainer');

  refreshGridData();
  modeChangedEvent();
}

var numGridRows;
var numGridCols;
var gridValues; // row, col order
var gridOffsetX, gridOffsetY;
var gridSpacingX, gridSpacingY;
// Generate data for putting glyphs in a grid 
function refreshGridData() {
  numGridCols = 7;
  numGridRows = 3;
  gridOffsetX = 10;
  gridSpacingX = 136;
  gridOffsetY = 20;
  gridSpacingY = 166;
  gridValues = new Array(numGridRows);
  for (var i=0; i<numGridRows; i++) {
    gridValues[i] = new Array(numGridCols);
    for (var j=0; j<numGridCols; j++) {
      gridValues[i][j] = new Array(8);
      for (var k=0; k<8; k++) {
        gridValues[i][j][k] = random(100);
      }
    }
  }
}

function sizeChangedEvent() {
  var mode = modeSelector.value();
  if (mode != "drive") {
    refreshGridData();
  }
}

function modeChangedEvent() {
  var mode = modeSelector.value();
  var glyph = glyphSelector.value();

  // enable/disable sliders
  if (mode === "drive") {
    // disable the button
    button.attribute('disabled','');

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
    // disable the button
    button.removeAttribute('disabled');

    // disable the sliders
    for(i=0; i<8; i++) {
      val_sliders[i].attribute('disabled','');
    }
  }
}

function buttonPressedEvent() {
  refreshGridData();
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
    rect(-1, -1, glyphSize+1, glyphSize+2);
    glyph8(val, glyphSize)    
  }
}

function drawSortMode() {
  var glyph_fn = glyph4;
  if(glyphSelector.value() === "glyph8")
    glyph_fn = glyph8;

  background(colorBack);
  for (var i=0; i<numGridRows; i++) {
    for (var j=0; j<numGridCols; j++) {
      resetMatrix();
      translate(gridOffsetX + j * gridSpacingX, gridOffsetY + i * gridSpacingY);
      for (var k=0; k<8; k++) {
        glyph_fn(gridValues[i][j], 128);
      }
    }
  }
}

function draw () {
  var mode = modeSelector.value();

  if (mode == "drive") {
    drawDriveMode();
  }
  else {
    drawSortMode();
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
