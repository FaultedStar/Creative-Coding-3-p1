/*
 * val4 is an array of 4 numbers that range from [0,100]
 * size is the number of pixels for width and height
 * use p5.js to draw a round grawscale glpyh within the bounding box
 */ 

 // canvasWidth = 960;
//var canvasHeight = 500;

function glyph4(values, size) {

  //balls
  //size change
 // var color1 = map(values[0], 0, 100, 10, 70)
 var x, y;
 x=size/2;
 y=size/2;


 var color1 = map(values[1], 0, 100, 20, 240)-30;
  stroke(color1);
  fill(color1);
  var ballSize = map(values[0],0, 100, 50,150);
  ellipse(x/2+(ballSize/6),y, ballSize/2);
  ellipse(x/2*3-(ballSize/6),y, ballSize/2);


//penis
  //length change
  //width change
  //penis colour
var color2 = map(values[1], 0, 100, 20, 240)
  fill(color2);
  stroke(color2);

    var max_length = size-20 ;
  var length = map(values[2], 0,100, 50,max_length);
  //var s3 = length;

  var width = map(values[3], 0 , 100, 15,70)*length/100;

//ellipse(x,y+length/3,width,length);
    rect(x-width/2,y,width,length,30);

    stroke(color1);
     fill(color1);
    rect(x-width/2,y+length/1.6,width+width/5,width+width/5,30);
  
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
