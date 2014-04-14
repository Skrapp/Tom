//v0.1 start controls made
//v0.2 collisions works... almost
//v0.2.1 collisions works... yes, it does... well just a little bit more
//v0.2.2 Now the collision works
//v0.2.2.1 Small design upgrade
//Idea: Catch the flag game, bomberman based but the goal is to capture three flags and bring them to your home base, collect every flag and you win, you can catch flags from others home bases, can shoot them when they are in your area.
//v0.2.3 flag capturing success
//v0.2.3.1 map layout
//v0.2.4 homebase now existing
//v0.2.5 Homebase now work, I hope...
//v0.2.5.1 New variables for player/tom.
//v0.2.6 Points are now added.

//Variabler
var flagx=185;
var flagy=185;
var flag=null;
var homex=20;
var homey=20;
var M=false;
var starWidth=0;
var starHeight=0;

var isCollidingCB = function(first,second)
{
    return first.y + first.height/2 > second.y && first.x + first.width/2 > second.x  && first.x - first.width/2 < second.x + second.width && first.y - first.height/2< second.y + second.height;
};

//basic stuff
var Player = function(){
    this.x = 111;
    this.y = 30;
    this.height = 19;
    this.width = 19;
    this.speedx = 2.5;
    this.speedy = 2.5;
    this.hasFlag = false;
    this.isHome = false;
    this.points = 0;
    
    this.draw = function() {
        //ellipse (this.x,this.y,this.height,this.width);
    };
};

//Block
var Solid = function(x,y,width,height) {
    this.x = x;
    this.y = y;
    this.height = height;
    this.width = width;
    
    this.draw = function() {
        //fill (94, 94, 94);
        //rect (this.x,this.y,this.width,this.height);
    };
};

var solids = [
    new Solid(43,43,20,20),
    new Solid(337,43,20,20),
    new Solid(337,337,20,20),
    new Solid(43,337,20,20),
    new Solid(89,20,20,43),
    new Solid(291,20,20,43),
    new Solid(89,337,20,43),
    new Solid(291,337,20,43),
    new Solid(20,89,43,20),
    new Solid(20,294,43,20),
    new Solid(337,294,43,20),
    new Solid(337,89,43,20),
    new Solid(0,0,400,20),
    new Solid(0,0,20,400),
    new Solid(0,380,400,20),
    new Solid(380,0,20,400),
    new Solid(89,89,96,20),
    new Solid(218,89,96,20),
    new Solid(89,294,96,20),
    new Solid(218,294,96,20),
    new Solid(132,43,40,20),
    new Solid(228,43,40,20),
    new Solid(197,43,6,20),
    new Solid(197,337,6,20),
    new Solid(228,337,40,20),
    new Solid(132,337,40,20),
    new Solid(67,135,80,20),
    new Solid(20,135,20,43),
    new Solid(360,135,20,43),
    new Solid(253,135,80,20),
    new Solid(253,251,80,20),
    new Solid(360,228,20,43),
    new Solid(67,251,80,20),
    new Solid(20,228,20,43),
    new Solid(40,178,20,10),
    new Solid(340,218,20,10),
    new Solid(340,178,20,10),
    new Solid(40,218,20,10),
    new Solid(147,219,20,32),
    new Solid(147,155,20,32),
    new Solid(233,155,20,32),
    new Solid(233,219,20,32),
    new Solid(88,188,34,30),
    new Solid(278,188,34,30),
    new Solid(190,251,20,20),
    new Solid(190,135,20,20)
    ];

var tom = new Player();
tom.x =32;
tom.y = 32;

var ola = new Player();
ola.x = 346;
ola.y = 100;

//Flag spot
var flagSpot = function(x,y,width,height){
    this.x = x;
    this.y = y;
    this.height = width;
    this.width = height;

    this.draw = function() {
       // fill(51, 51, 51);
        //rect(this.x, this.y, this.width, this.height);
    };
};

var flagSpots = [
    new flagSpot(flagy,flagx,30,30)
    ];
    
//Home
var Home = function(){
    this.x = homex;
    this.y = homey;
    this.height = 23;
    this.width = 23;
    
    this.draw = function() {
        //rect(this.x, this.y, this.width, this.height);
    };
};

var homes = [
    new Home()
    ];

var update = function() {
    /*
//Control
    //Stearing
    if (keyIsPressed){
        
        if (keyCode === RIGHT) {
            tom.x += tom.speedx;
        }
        if (keyCode === LEFT) {
            tom.x -= tom.speedx;
        }
        if (keyCode === DOWN) {
            tom.y += tom.speedy;
        }
        if (keyCode=== UP) {
            tom.y -= tom.speedy;
        }
    }
    
    
    for(var i=0;i<solids.length;i++) {
        var blocket = solids[i];
        //Collision with block
       if (isCollidingCB(tom, blocket)){
            if (keyCode === DOWN) {
                tom.y -= tom.speedy;
            }
            if (keyCode === UP) {
                tom.y += tom.speedy;
            }
            if (keyCode === LEFT) {
                tom.x += tom.speedx;
            }
            if (keyCode === RIGHT) {
                tom.x -= tom.speedx;
            }
        }
        

    }
    var house = homes[0];
    var flag = flagSpots[0];
    
//Flag capture
    if(isCollidingCB(tom,flag))
    {
        debug("du");
       tom.hasFlag=true;
    }
 
//Flag collecting
    if (isCollidingCB(tom,house)){
    tom.isHome=true;
    //tom.hasFlag=false;
    }
    else{
        tom.isHome=false;
    }
    
if (tom.isHome&&tom.hasFlag){
    tom.points += 1;
    tom.hasFlag=false;
}
*/
};

   

var draw = function() {
	/*
    background (210, 212, 210);
    for(var i=0;i<flagSpots.length;i++) {
        flagSpots[i].draw();
    }
    fill(252, 88, 88);
    for(var o=0;o<1;o+=1) {
        homes[o].draw();
    }
    fill(255, 0, 0);
    tom.draw();
    //ola.draw();
    
    for(var j=0;j<solids.length;j++) {
        solids[j].draw();
    }
  if (tom.hasFlag){
      starWidth=12;
      starHeight=19;
      image(flag,tom.x+-10,tom.y+-16,starWidth,starHeight);
  }
  else if (!tom.hasFlag) {
      starWidth=0;
      starHeight=0;
  }
  
  if (tom.isHome&&tom.hasFlag){
      ellipse(20,20,20,20);
  }
  
  fill(0, 0, 0);
  textSize(22);
  text(tom.points,6,23);
    */
    graphics.rectangle(0,0,500,500);
    if(input.keyIsPressed(38) && input.keyIsPressed(40))
    {
    	graphics.circle(20,20,20);
    }

};


var loop = function() {
	update();
	draw();
	setTimeout(function()
	{
		loop();
	}, 100);
};

loop();