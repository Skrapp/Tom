var Solid = function(x,y,width,height) {
    this.x = x;
    this.y = y;
    this.height = height;
    this.width = width;

    
    this.draw = function() {
        graphics.img(0,pur1,this.x,this.y,this.width,this.height);
    };
};

var pur1 = new Image();
pur1.src = 'image/tom-solids-purpel%201.jpeg';