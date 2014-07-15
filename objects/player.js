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
	this.fire = 9;
	this.imgname = null;
	
 
    this.draw = function() {
			graphics.img(this.rotation,this.imgname,this.x-this.fire,this.y-this.fire,this.width+this.fire*2,this.height+this.fire*2);
    };
};

var Direction =  
    {
        up: 0,
        down: 1,
        right: 2, 
        left: 3
    }
			