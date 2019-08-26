init();

var index = 0, index2 = 0;
var size = 500;

function draw(event) {
	var rectWidth = size;
	var rectHeight = size;

	if(draw)
		square(rectWidth, rectHeight, index/100, HSLToHex( index , 100, 50))
	
	
	if(index >= 150)
		draw = false;
	else
		index+= 10;
}

function updateOnMouseMove(event){
	draw(event);
}

function onClick(){
	//draw(event);
}
