var Graphics = function()
{
	this.ctx = document.getElementById("gameCanvas").getContext("2d");

	this.ellipse = function(x,y,radius)
	{
		this.ctx.beginPath();
		this.ctx.arc(x,y,radius,0,2*Math.PI);
		this.ctx.fill ();
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