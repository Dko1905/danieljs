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

function editCords(squareList, sizeDifference) {
	function editCord(x1, y1, x2, y2, sizeDifference) {
		
	}

	squareList[0] = editCord(squareList[0].x, squareList[0].y, squareList[1].x, squareList[1].y, sizeDifference);
	return squareList;
}

function draw(event) {


	if (drawRectangle)
		custemRectangle(squareList, 100, 700, 300)

	squareList = editCords(squareList, sizeDifference);
}	