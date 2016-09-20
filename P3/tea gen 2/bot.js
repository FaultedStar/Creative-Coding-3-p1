var CrayonColours;
var GemstoneList;
var TeaList;
     var crayonName;

      // setting up imdb
     var closed_companies = {
  "horror" : ["co0137447", //Twisted pictures
              "co0098315",  //Blumhouse
              "co0084207"], //Vertigo
  "scifi" : ["co0009119", //Amblin entertainment
              "co0159111"],
  "romcom" : ["co0005073"] //Universal (Will produce inconsistent results)
};



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
  // make this true once image has been drawn
  this.have_drawn = false;

  
  // return true if image has been drawn
  this.isDone = function() {
    return this.have_drawn;
  }

  // load all external images or data
  this.preload = function() {
     this.crayonColours = loadJSON('crayon.json');
     this.GemstoneList = loadJSON('gemstone.json');
     this.TeaList = loadJSON('tea.json');
  
  }
   //Locates a random movie from a company that specialises in the appropriate genre. and pulls its review http://imdb.wemakesites.net/ using this api
   // this is coped code from tom lewis.
  this.getReview = function( genre ) {
    var bot = this;
    $.ajax({
        url: "http://imdb.wemakesites.net/api/" + random( closed_companies[ genre ] ),
        crossDomain: true,
        dataType: "jsonp",
        success: function(data) {
          $.ajax({
              url: "http://imdb.wemakesites.net/api/" + random( data.data.filmography ).id,
              crossDomain: true,
              dataType: "jsonp",
              success: function(data) {
                bot.titleID = data.data.id;
                bot.generatebitlyLink();
                bot.review = data.data.review;
              }
          });
        }
    });
  }

// also stolen from Tom Lewis
  this.generatebitlyLink = function(){
    var imdbURL = "http://www.imdb.com/title/" + this.titleID + "/";
    var bot = this;
    var func = function(response){
      bot.shortURL = response;
      bot.shortURL = bot.shortURL.substring(7)
    }
    $.getJSON(
        "http://api.bitly.com/v3/shorten?callback=?", 
        { 
            "format": "json",
            "apiKey": "R_97be122193404c19a84555a90e98cc0d",
            "login": "o_6v25k0dh8d",
            "longUrl": imdbURL
        },
        function(response)
        {
            func(response.data.url);
        }
    );
  }

  this.randomCrayon = function(){
    var c = this.crayonColours;
    c = random(c);
   // c = color( c.hex.toString() );
    return c;
  }

//this is just closed data from the top
  this.randomColour = function(){
    var c = random(colour_options);
    var colour = color(c.red, c.green, c.blue);
   return colour;
  }

  this.Gradient = function(x, y, w, h, c1, c2){

   for (var i = y; i <= y+h; i++) { var inter = map(i, y, y+h, 0, 1);
    var c = lerpColor(c1, c2, inter); stroke(c); line(x, i, x+w, i); } 
  }


  this.setup = function() {
    this.temperatures = random(closed_data);
    this.baseColour

    
  }
	this.setGradent = function(){

    var crayon1 = this.randomCrayon();
    this.colour1 = color(crayon1.hex.toString());
    this.crayonName1 = crayon1.color;
     var crayon2 = this.randomCrayon();
    this.colour2 = color(crayon2.hex.toString());
    this.crayonName2 = crayon2.color;

	}

	this.getGem = function(){
		var gem = this.GemstoneList;
		gem = random(gem.gemstones);

		return gem;
	}

	this.getTea = function(){

		var tea = this.TeaList;
		tea = random(tea.teas);
		console.log(tea);
		return tea;
	}
	

	this.drawCup = function(){
			push();
    translate(220, 110);
   // scale(s);  // Set the createCanvas
  //  stroke(g); // Set the gray value
    strokeWeight(70);
 
    noStroke();
    fill(this.colour2);
    ellipse(0, 0, 100, 100);  // Left eye
   
   // quad(0, -58, 4, -51, 0, -44, -4, -51); // Beak
    pop();


	}
 this.respond = function() {
 	this.setGradent();

  	this.getGem();
  	

    this.Gradient(0,0,440,220,this.colour1,this.colour2);

    this.drawCup();
    //this.getReview();
    //console.log()
    // set have_drawn to true since we have completed
    this.have_drawn = true;

    // return the message
  //  var message = "Current " + num_owls.toString() + " day weather owl forecast";


   var message = "#TeacupGeneration recommends: " + this.crayonName1 + " " + this.crayonName2 + " with " + this.getTea() +" tea in a " + this.getGem() + " cup!";
   if (message.length > 140){


   }

  return message;

  }
}