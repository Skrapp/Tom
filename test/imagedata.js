var im = new Image();
im.src= "bana1.png";

var thoas = document.createElement('canvas');

im.onload = function (){
	
thoas.width = im.width;
thoas.height = im.height;

var ctx = thoas.getContext('2d');
	
var y = 0;
	
ctx.drawImage(im,0,0,im.width,im.height);

var imgData = ctx.getImageData(0,0,im.width, im.height);
	
for (var i=0;i<imgData.data.length;i+=4)
	{
		red=imgData.data[i];
		green=imgData.data[i+1];
		blue=imgData.data[i+2];
		alpha=imgData.data[i+3];
		if ((i/4 % 6 == 0 && ! (i == 0))) {
			y++;
		}
		console.log("Pixel "+(i/4)+": "+red+" "+green+" "+blue);
		console.log("x: "+(i/4 % 6)+" y: "+y);
		
	}
	
}