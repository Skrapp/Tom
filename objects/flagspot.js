var flagSpot = function(x,y,width,height){
    this.x = x;
    this.y = y;
    this.height = width;
    this.width = height;

    this.draw = function() {
        graphics.fill("474747");
        graphics.rect(this.x, this.y, this.width, this.height);
    };
};