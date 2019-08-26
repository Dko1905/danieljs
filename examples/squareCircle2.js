init();

var index = 0, index2 = 0;
var mode = 0;
var size = 100;

function draw(event) {
	var rectWidth = 0;
	var rectHeight = 0;

	if(mode === 1){
		rectWidth = (100+180)+(180-index);
		rectHeight = (100+180)+(180-index);
		square(rectWidth, rectHeight, index/100)
		console.log('yes');
		
	}
	else{
		rectWidth = size+index;
		rectHeight = size+index;
		square(rectWidth, rectHeight, index/100)
	}
	console.log(index);
	console.log(mode);
	
	
	if(index > 180){
		mode = 1;
	}
	index+= 10;
}

function updateOnMouseMove(event){
	draw(event);
}

function onClick(){
	//draw(event);
}
