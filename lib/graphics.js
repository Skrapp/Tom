var Graphics = function()
{
	this.ctx = document.getElementById("gameCanvas").getContext("2d");

	this.ellipse = function(x, y, rx, ry)
    {
        
        this.ctx.save(); // save state
        this.ctx.beginPath();

        this.ctx.translate(x, y);
        this.ctx.scale(rx/2, ry/2);
        this.ctx.arc(1, 1, 1, 0, 2 * Math.PI, false);

        this.ctx.restore(); // restore to original state
        this.ctx.fill();
    }

	this.rect = function(x,y,width,height)
	{
		this.ctx.fillRect(x,y,width,height);
	}

	this.fill = function(color)
	{
		this.ctx.fillStyle = "#"+color; 
	}

	this.text = function (text,x,y)
	{
		this.ctx.font="20px Georgia";
		this.ctx.fillText(text,x,y);
	}
}

var graphics = new Graphics();