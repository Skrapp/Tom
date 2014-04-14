var Graphics = function()
{
	this.ctx = document.getElementById("gameCanvas").getContext("2d");

	this.circle = function(x,y,radius)
	{
		this.ctx.beginPath();
		this.ctx.arc(x,y,radius,0,2*Math.PI);
		this.ctx.stroke();
	}

	this.rectangle = function(x,y,width,height)
	{
		this.ctx.fillStyle = "#FF0000";
		this.ctx.fillRect(x,y,width,height);
	}
}

var graphics = new Graphics();