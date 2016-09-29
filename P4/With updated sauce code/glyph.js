/*
 * val4 is an array of 4 numbers that range from [0,100]
 * size is the number of pixels for width and height
 * use p5.js to draw a round grawscale glpyh within the bounding box
 */ 
function glyph4(values, size) {

  //balls
  //size change
  var color1 = map(values[0], 0, 100, 10, 70)
  stroke(color1);
  fill(color1)
  var s2 = size/2;
  ellipse(s2/2, s2, size/2);
  ellipse(s2/2+s2, s2, size/2);


//penis
  //length change
  //width change

  var inner_size = 0.2 + 0.4 * values[2] / 100.0;
  var s3 = size * inner_size;

  var color2 = map(values[1], 0, 100, color1+20, 240)
  fill(color2);
  stroke(color2);

  var shift_frac = (values[3] - 50.0) / 50.0;
  var max_shift = 0.5 * (size - s3);
  var x_shift = shift_frac * max_shift;
  ellipse(s2, s2+s3, s3+x_shift, s3*3);  
}

/*
 * val8 is an array of 8 numbers that range from [0,100]
 * size is the number of pixels for width and height
 * use p5.js to draw a square color glpyh within the bounding box
 */
function glyph8(values, size) {

  //vulva////

//vestibule
  //labia magora 
  fill(255, 0, 0);
  var s1 = size/2;
  ellipse(s1, s1, size/2, size);
 
 //labia manora
 fill(200, 60, 0);

  ellipse(s1, s1, size/3, size/2);

 // done in two parts 


//clit
//clithood

//ureathral opening

//vagina


  //var red = [255, 0, 0];
 // var green = [0, 255, 0];
  //var blue = [0, 0, 255];
  //var white = [255, 255, 255];
  //var colors = [red, green, blue, white, red, green, blue, white];
  //stroke(0);
  //fill(0);
 // rect(0, 0, size, size);
 // for(var i=0; i<8; i++) {
  //  stroke(colors[i]);
  //  fill(colors[i]);
  //  offsety = i * size / 8;
  //  offsetx = (size * values[i]) / 100;
  //  rect(0, offsety, offsetx, size/8);
  //}
}
