var Home = function(x,y,color){
    this.x = x;
    this.y = y;
    this.height = 23;
    this.width = 23;
    this.color = color;
    
    this.draw = function() {
        graphics.fill (this.color);
        graphics.rect(this.x, this.y, this.width, this.height);
    };
};
