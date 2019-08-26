init();

let rotation = 0; // the current rotation of the rectangle
let rectangleSize = 600; // size of rectangle
let distanceBetweenRectangles = 2; // distance between the rectangles in degrees, not radians
let drawRectangle = true; // goes false when done doing 90 degrees
let colorScale = 4; // the scaling og colors in the circle 		(MAX 4!)

function draw() {

	if(drawRectangle)
		square(rectangleSize, rectangleSize, degrees = rotation, color = HSLToHex( rotation*colorScale , 100, 50), useDegrees = true, fill = false) // draw the rectangle with color using HSL
	
	if(rotation+distanceBetweenRectangles >= 90) // Go rotation unti 90 degrees
		drawRectangle = false; // Then stop drawing
	else
		rotation += distanceBetweenRectangles;
}
