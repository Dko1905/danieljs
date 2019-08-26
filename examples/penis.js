init(1, 1);

var index = 0, index2 = 0;
var number = -4;

function penis(x) {
	return Math.cos(x) + Math.cos(2*x);
}

function draw(event) {
	console.log((penis(number)+50)*10);
	
	circle((number+50)*10, (penis(number)+10)*30, 5);
	

	number+=0.1;
}
