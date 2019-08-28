init();

var rotation = 0;
var sizeDifference = 0.5;
let drawRectangle = true;

let squareList = [
	{ x: 0, y: 0 }, { x: 1, y: 0 },
	{ x: 0, y: 1 }, { x: 1, y: 1 }
];
let originalSquareList = [...squareList];

function custemRectangle(squareList, scale, moveX = 0, moveY = 0) {
	line(squareList[0].x * scale + moveX, squareList[0].y * scale + moveY, squareList[1].x * scale + moveX, squareList[1].y * scale + moveY);
	line(squareList[1].x * scale + moveX, squareList[1].y * scale + moveY, squareList[3].x * scale + moveX, squareList[3].y * scale + moveY);
	line(squareList[3].x * scale + moveX, squareList[3].y * scale + moveY, squareList[2].x * scale + moveX, squareList[2].y * scale + moveY);
	line(squareList[2].x * scale + moveX, squareList[2].y * scale + moveY, squareList[0].x * scale + moveX, squareList[0].y * scale + moveY);
}
function editCord(A, B, sizeDifference) {
	let C = { x: A.x, y: B.x };


	let AB = Math.sqrt( Math.pow((A.x - B.x), 2) + Math.pow((A.y - B.y), 2)); 
	let AC = Math.sqrt( Math.pow((A.x - C.x), 2 ) + Math.pow((A.y - C.y), 2)); 
	let BC = Math.sqrt( Math.pow((B.x - C.x), 2) + Math.pow((B.y - C.y), 2));

	let ABAC = AC / AB;
	let ABBC = BC / AB;
	
	let Output = {x: B.x - ( sizeDifference * ABBC ), y: B.y - ( sizeDifference * ABAC ) };
	console.log(Output);
	return Output;
}
function editCords(squareList, sizeDifference) {


	squareList[0] = editCord(squareList[1], squareList[0], sizeDifference);
	squareList[1] = editCord(squareList[0], squareList[1], sizeDifference);
	squareList[2] = editCord(squareList[0], squareList[2], sizeDifference);
	squareList[3] = editCord(squareList[2], squareList[3], -sizeDifference);
	
	console.log(squareList);
	
	return squareList;
}

function draw(event) {
	//clear();
	custemRectangle(squareList, 100, 500, 100);
	editCords(squareList, 0.1)
	
	//if (drawRectangle)
	//	custemRectangle(squareList, 100, 700, 300)

	//squareList = editCords(squareList, sizeDifference);
}	