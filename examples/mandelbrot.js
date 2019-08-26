

init(2, 2);

var index = 0, index2 = 0;

function draw(event) {
	var i=0;
	var cx=-2+index/700;
	var cy=-2+index2/700;
	var zx=0;
	var zy=0;                        
	
	do
	{
		var xt=zx*zy;
		zx=zx*zx-zy*zy+cx;
		zy=2*xt+cy;
		i++;
	}
	while(i<255&&(zx*zx+zy*zy)<4);	
	pixel(index, index2, HSLToHex((i*10)%360, 100, 50));
	

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