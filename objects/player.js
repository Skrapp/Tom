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
    this.color = "FF0000";
    this.keyUp = 0;
    this.keyDown = 0;
    this.keyLeft = 0;
    this.keyRight = 0;
    this.home = null;

 
    this.draw = function() {
        graphics.fill (this.color);
        graphics.ellipse (this.x,this.y,this.height/2);
    };
};