var Shot = function(x,y,color) {
    this.x = x;
    this.y = y;
    this.height = 3;
    this.width = 5;
    this.speed = 5;
    this.color = color;
    
    this.draw = function() {
        graphics.fill (this.color);
        graphics.ellipse (this.x,this.y,this.width,this.height);
    };
};