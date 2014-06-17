var Shot = function(x,y,color,direction, player) {
    this.x = x;
    this.y = y;
    this.height = 3;
    this.width = 5;
    this.speed = 5;
    this.direction = direction;
    this.color = color;
    this.owner = player;
    
    this.draw = function() {
        graphics.fill (this.color);
        graphics.ellipse (this.x,this.y,this.width,this.height);
    };
};