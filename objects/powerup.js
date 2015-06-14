var powerup = function(x,y,height,width,type) {
    this.x = x;
    this.y = y;
    this.height = height;
    this.width = width;
    this.type = null;
    this.exsist = true;
    
    this.draw = function() {
        graphics.fill ("00,00,00");
        graphics.rect (this.x, this.y, this.height, this.width)
    };
};
