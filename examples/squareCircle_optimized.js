init();

var rotation = 0;
var rectangleSize = 200;
let drawRectangle = true;

function draw(event) {


	if(drawRectangle)
		square(rectangleSize, rectangleSize, degrees = rotation, HSLToHex( rotation*100 , 100, 50))
	
	if(rotation >= 1.5) // 
		drawRectangle = false;
	else
		rotation+= 0.1;
}