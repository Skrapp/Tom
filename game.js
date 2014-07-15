/*
v0.1 start controls made
v0.2 collisions works... almost
v0.2.1 collisions works... yes, it does... well just a little bit more
v0.2.2 Now the collision works
v0.2.2.1 Small design upgrade
Idea: Catch the flag game, bomberman based but the goal is to capture three flags and bring them to your home base, collect every flag and you win, you can catch flags from others home bases, can shoot them when they are in your area.
v0.2.3 flag capturing success
v0.2.3.1 map layout
v0.2.4 homebase now existing
v0.2.5 Homebase now work, I hope...
v0.2.5.1 New variables for player/tom.
v0.2.6 Points are now added.
*/

//Variabler
var flagx = 185;
var flagy = 185;
var flag = null;
var homex = 20;
var homey = 20;
var M = false;
var starWidth = 0;
var starHeight = 0;


//basic stuff  
//Home
var homes = [
    new Home(homex, homey, "FFA3A3"),
    new Home(357, homey, "A3A3FF")
];

//players
var tom = new Player();
    tom.color = "FF0000";
    tom.x = 22;
    tom.y = 22;
    tom.keyUp = input.keyCodes.up;
    tom.keyDown = input.keyCodes.down;
    tom.keyLeft = input.keyCodes.left;
    tom.keyRight = input.keyCodes.right;
    tom.home = homes [0];
    tom.shootButton = input.keyCodes.shift;
	tom.imgname = imgTom;

var ola = new Player();
    ola.color = "0000FF";
    ola.x = 359;
    ola.y = 22;
    ola.keyUp = input.keyCodes.w;
    ola.keyDown = input.keyCodes.s;
    ola.keyLeft = input.keyCodes.a;
    ola.keyRight = input.keyCodes.d;
    ola.home = homes [1];
    ola.shootButton = input.keyCodes.space;
	ola.imgname = imgOla;

var players = [
    tom,
    ola
];

//Block
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
    new Solid(89,89,93,20),
    new Solid(218,89,93,20),
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

//Flag spot
var flagSpots = [
    new flagSpot(flagy,flagx,30,30)
];

var update = function() {
    
//Control
//Steering

for (i in players){
    var player = players [i];
    if (input.keyIsPressed(player.keyDown)) {
        player.y += player.speedy;
         player.direction = Direction.down;
		player.rotation = 180;
        
        for (s in solids)
        {
            var solid = solids [s];
             if (isCollidingCB(player, solid))
             {
                 player.y -= player.speedy;
             }
        }
    }
    if (input.keyIsPressed(player.keyUp)) {
        player.y -= player.speedy;
        player.direction = Direction.up;
		player.rotation = 0;
        
          for (s in solids)
        {
            var solid = solids [s];
             if (isCollidingCB(player, solid))
             {
                 player.y += player.speedy;
             }
        }
    }
    if (input.keyIsPressed(player.keyLeft)) {
        player.x -= player.speedx;
        player.direction = Direction.left;
		player.rotation = 270;
        
          for (s in solids)
        {
            var solid = solids [s];
             if (isCollidingCB(player, solid))
             {
                 player.x += player.speedx;
             }
        }
    }
    if (input.keyIsPressed(player.keyRight)) {
        player.x += player.speedx;
        player.direction = Direction.right;
		player.rotation = 90;
        
          for (s in solids)
        {var solid = solids [s];
            var solid = solids [s];
             if (isCollidingCB(player, solid))
             {
                 player.x -= player.speedx;
             }
        }
    }
}
    
var flag = flagSpots[0];
        
//Flag capture
for (p in players){
       var player = players [p];
    if(isCollidingCB(player,flag))
    {
       player.hasFlag=true;
    }
 
//Flag collecting
    if (isCollidingCB(player,player.home)){
        player.isHome=true;
    }
    else{
        player.isHome=false;
    }
    
    if (player.isHome&&player.hasFlag){
        player.points += 1;
        player.hasFlag=false;
    }
}

//Shooting   
for (p in players){
    var player = players [p];
    
    if(input.keyIsPressed(player.shootButton) && ! player.isShooting)
        {
            shots.push(new Shot (player.x + (player.width-6), player.y + (player.height/2) - 1.5, "FFFFFF", player.direction, player));
            player.isShooting = true;
        }

        if (! input.keyIsPressed(player.shootButton))
        {
            player.isShooting = false;
        } 
    
        if (player.life <= 0)
        {
            console.log("dead");

            player.life ++;
        }
}
    
     for (o in shots) 
        {
            var shot = shots [o];

            if (shot.direction == Direction.down)
            {
            shot.y += shot.speed;
            }

            if (shot.direction == Direction.up)
            {
            shot.y -= shot.speed;
            }

            if (shot.direction == Direction.right)
            {
            shot.x += shot.speed;
            }

            if (shot.direction == Direction.left)
            {
            shot.x -= shot.speed;
            }

            for (l in solids)
            {
            var solid = solids [l];
                if (isCollidingCB(shot, solid))
                {
                    console.log("hit");
                    shots.splice(o, 1);
                } 
            }
            
            for (p in players){
                var player = players [p];

                if (isCollidingCB(shot, player) && ! (player == shot.owner))
                   {
                        shots.splice(o, 1);
                        player.life --;
                        player.x = player.home.x + 3;
                        player.y = player.home.y + 3;
                        player.hasFlag = false;
                        console.log(ola.life);
                        console.log(tom.life);
                    }
            }  
        }
};

var shots = [ 
];
   
//Draw out
var draw = function() {
	graphics.fill("CCCCCC");
    graphics.rect(0,0,800,600);

    for(var i=0;i<flagSpots.length;i++) {
        flagSpots[i].draw();
    }
    
    for(var o=0;o<homes.length;o+=1) {
        homes[o].draw();
    } 
    for(var j=0;j<solids.length;j++) {
        solids[j].draw();
    }

    for (p in players){
       var player = players [p];
        player.draw();
        
        if (player.hasFlag){
            starWidth=4;
            starHeight=4;
            graphics.fill("FFF700");
            graphics.ellipse(player.x+4,player.y+4,starWidth,starHeight);
        }
        
    }
    
    
        for (b in shots){
            var shot = shots [b];
            shot.draw (0);
        }
    
    graphics.fill("000000");
        graphics.text(tom.points,5,20);
        graphics.text(ola.points,384,20);
    
};


var loop = function() {
	update();
	draw();
	setTimeout(function()
	{
		loop();
	}, 30);
};

loop();