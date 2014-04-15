var Solid = function(x,y,width,height) {
    this.x = x;
    this.y = y;
    this.height = height;
    this.width = width;

    
    this.draw = function() {
        graphics.fill ("696969");
        graphics.rect (this.x,this.y,this.width,this.height);
    };
};