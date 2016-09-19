
  var CrayonColours;
     var crayonName;
var orig_colour_options= [
	"color(89,214,255)",
	"color(255,241,89)",
	"color(255,89,186)"
]

var colour_options = [
	{"red": 255, "green": 255, "blue": 255},
	{"red": 89, "green": 214, "blue": 255},
	{"red": 255, "green": 241, "blue": 89},
	{"red": 255, "green": 89, "blue": 186}

]

// 10 day high temperature forecast
var closed_data = [
  [20, 22, 24, 22, 24, 22, 20, 15, 10, 15],
  [30, 29, 27, 25, 25, 23, 22, 22, 23, 20],
  [10, 12, 10, 12, 10, 12, 10, 12, 10, 12]
]

function bot() {

var colRand;
	var baseColour= randomColour();
       this.colour = randomColour();
var testColour = color(255,89,186);
  // make this true once image has been drawn
  this.have_drawn = false;

  // helper function to draw an owl
  this.bug = function(x, y, g, s) {
    push();
    translate(x, y);
    scale(s);  // Set the createCanvas
    stroke(g); // Set the gray value
    strokeWeight(70);
    line(0, -35, 0, -65); // Body
    noStroke();
    fill(255-g);
    //ellipse(-17.5, -65, 35, 35); // Left eye dome
   // ellipse(17.5, -65, 35, 35);  // Right eye dome
   // arc(0, -65, 70, 70, 0, PI);  // Chin
    fill(g);
    ellipse(-14, -65, 8, 8);  // Left eye
    ellipse(14, -65, 8, 8);   // Right eye
   // quad(0, -58, 4, -51, 0, -44, -4, -51); // Beak
    pop();
  }

  // return true if image has been drawn
  this.isDone = function() {
    return this.have_drawn;
  }

  // load all external images or data
  this.preload = function() {
     CrayonColours = loadJSON('crayon.json');
  
  }

  function RandomCrayon(){
    var crayon = random(CrayonColours);
    crayonName = crayon.color;
    console.log(crayonName);
    var c = color("\""+ crayon.hex +"\"");
     console.log(c);
    return c;
 //    console.log(crayon["colour"]);0
   // var  c = color(crayon.hex);

   // return c;
  }

//this is just closed data from the top
  function randomColour(){
    var c = random(colour_options);
    var colour = color(c.red, c.green, c.blue);
  	return colour;
  }

  function Gradient(x, y, w, h, c1, c2){

   for (var i = y; i <= y+h; i++) { var inter = map(i, y, y+h, 0, 1);
    var c = lerpColor(c1, c2, inter); stroke(c); line(x, i, x+w, i); } 
  }


  this.setup = function() {
    // chose a random set of data from the list of data
    this.temperatures = random(closed_data);
 //   this.colour = randomColour();

    
  }

  this.respond = function() {
  this.colour =  RandomCrayon();
    Gradient(0,0,440,220,baseColour,this.colour);

    

    // set have_drawn to true since we have completed
    this.have_drawn = true;

    // return the message
  //  var message = "Current " + num_owls.toString() + " day weather owl forecast";
  var message = "beep beep " + crayonName;
    return message;
  }
}

