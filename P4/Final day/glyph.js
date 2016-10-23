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
  var ballSize = map(values[0],0, 100, 70,150);
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

  var width = map(values[3], 0 , 100, 15,60)*length/100;

//ellipse(x,y+length/3,width,length);
    rect(x-width/2,y,width,length,30);

    stroke(color1);
     fill(color1);

     arc(x, y+length-width/2, width+width/5, width+width/5, 0, PI, CHORD);
   // rect(x-width/2,y+length/1.6,width+width/5,width+width/5,30);
  
}

/*
 * val8 is an array of 8 numbers that range from [0,100]
 * size is the number of pixels for width and height
 * use p5.js to draw a square color glpyh within the bounding box
 */
function glyph8(values, size) {

  //vulva////
  //8 Variables

  //PINK (255,192,203)
  //LIGHT PINK (255,182,193)
  //PALE VIOLET (219,112,147)
  //HOTT PINK (255,105,180)
  noStroke();
  var x, y;
 x=size/2;
 y=size/2;
 var clitX,clitY;
var labiaMinx, labiaMinY;
var vagX,vagY;
var blueness = map(values[7], 0 ,100,110,180);
  var width = map(values[0], 0 , 100, 25,75); // width of magora
  var length = map(values[1],0,100,60,80); //length of magora



clitX = x-width/12;
clitY = y-length/2;
vagX = x;
vagY = y+length/10;

labiaMinX = x; //top of manora
labiaMinY = (y-length/3)-20;

labiaMinXB = x; //bottom of manora
labiaMinYB = vagY+30;

  
labiaWidth1 = size/2 -map(values[2], 0 , 100, 30,65);
labiaWidth1Y = map(values[4], 0 , 100, 15,60);
labiaWidth2 = size/2 + map(values[3], 0 , 100, 30,65);
labiaWidth2Y =  map(values[5], 0 , 100, 15,60);


// Vagina size
var VaginaSize = map(values[6], 0, 100, 15,35);
//vestibule
  //labia magora 
  fill(255,192,203);
  //fill(255,105,203);
  ellipse(x,y,width+width/2, length+length/2);

 
 //labia manora  clitX,y+length/10, width/4,length/10
 
   stroke(255,105,blueness);
   fill(255,105,blueness);
   
   //Left Labia
bezier(labiaMinX, labiaMinY, labiaWidth1,labiaWidth1Y, labiaWidth1,vagY, labiaMinXB,labiaMinYB);


//Right Labia
bezier(labiaMinX, labiaMinY, labiaWidth2,labiaWidth2Y, labiaWidth2,vagY, labiaMinXB,labiaMinYB);


 // done in two parts 


//clit
//rectMode(CENTER);
noStroke();
 fill(153,15,blueness-50);
 var clitSize = VaginaSize/4 ;
 rect(x-clitSize/2,clitY,clitSize,clitSize,2);
 
//clithood
fill(255,105,blueness);

rect(x-(clitSize/2)*1.4,clitY-clitSize/2,clitSize*1.4,(clitSize/2)*1.4,2);
 fill(153,15,15);
//ureathral opening
// fill(0);
 ellipse(x,y-length/5,VaginaSize/6,VaginaSize/6);
//vagina


//fill(0);
ellipse(vagX,vagY,VaginaSize,VaginaSize);


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
