

init(2, 2);

var index = 0, index2 = 0;

function draw(event) {
	
	pixel(index, index2, HSLToHex((index^index2)%360, 100, 50));
	

	if( index > c.width){
		index = 0;
		if(index2 > c.heght)
			index2 = 0;
		else
			index2++;
	}
	else{
		index++;
	}
}

function updateOnMouseMove(event){
	for( var n = 0; n <c.width; n++){
		draw(event);
	}
}