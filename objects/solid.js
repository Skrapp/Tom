var Solid = function(x,y,width,height,kind) {
    this.x = x;
    this.y = y;
    this.height = height;
    this.width = width;
	this.kind = kind;

    
    this.draw = function() {
			graphics.img(0,this.kind,this.x,this.y,this.width,this.height);
    };
};

