var Player = function(){
    this.x = 111;
    this.y = 30;
    this.height = 20;
    this.width = 20;
    this.speedx = 2.5;
    this.speedy = 2.5;
    this.hasFlag = false;
    this.isHome = false;
    this.points = 0;
    this.color = "FF0000";
    this.keyUp = 0;
    this.keyDown = 0;
    this.keyLeft = 0;
    this.keyRight = 0;
    this.home = null;
    this.shootButton = null;
    this.isShooting = false;
    this.direction = null;
    this.life = 1;
	this.rotation = 0;
	
 
    this.draw = function() {
			graphics.img(this.rotation,plimg,this.x,this.y,this.width,this.height+9);
    };
};

var plimg = new Image();
plimg.src = 'image/player-tom.png';

var Direction =  
    {
        up: 0,
        down: 1,
        right: 2, 
        left: 3
    }
			