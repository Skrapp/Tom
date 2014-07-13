var Solid = function(x,y,width,height) {
    this.x = x;
    this.y = y;
    this.height = height;
    this.width = width;

    
    this.draw = function() {
		
		
        graphics.img(bye,this.x,this.y,this.width,this.height);
    };
};

var bye = new Image();
bye.src = 'image/tom-solids-purpel%201.jpeg';