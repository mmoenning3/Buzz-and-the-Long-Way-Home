import { playerLocation } from './player.js';

var loopOne = [
    [1,6],
    [1,7],
    [1,8],
    [1,9],
    [2,9],
    [3,9],
    [4,9],
    [4,8],
    [4,7],
    [4,6],
    [4,5],
    [4,4],
    [4,3],
    [3,3],
    [3,4],
    [3,5],
    [3,6],
    [3,7],
    [3,8],
    [2,8],
    [2,7],
    [2,6]
];

var loopThree = [
	[7, 9],
	[8, 9],
	[8, 10],
	[8, 11],
	[7, 11],
	[7, 10]
]

var loopTwo = [
	[5,1],
	[6,1],
	[7,1],
	[8,1],
	[9,1],
	[10,1],
	[11,1],
	[12,1],
	[13,1],
	[14,1],
	[14,2],
	[13,2],
	[12,2],
	[11,2],
	[10,2],
	[9,2],
	[8,2],
	[7,2],
	[6,2],
	[5,2]
]

var loopFour = [
	[8,13],
	[9,13],
	[10,13],
	[9, 13]
]

var loopFive = [
	[9,19],
	[9,20],
	[9,21],
	[10,21],
	[11,21],
	[11,20],
	[11,19],
	[10,19]
]

var loopSix = [
	[17,1],
	[17,2],
	[17,3],
	[17,4],
	[17,3],
	[17,2]
]

var loopSeven = [
	[18,3],
	[19,3],
	[20,3],
	[21,3],
	[21,4],
	[21,5],
	[21,6],
	[20,6],
	[19,6],
	[18,6],
	[17,6],
	[17,5],
	[18,5],
	[18,4]
]

var loopEight = [
	[17,7],
	[17,8],
	[17,9],
	[18,9],
	[19,9],
	[20,9],
	[21,9],
	[21,8],
	[21,7],
	[20,7],
	[19,7],
	[18,7]
]

var loopNine = [
	[17,13],
	[18,13],
	[19,13],
	[20,13],
	[21,13],
	[20,13],
	[19,13],
	[18,13]
]

var loopTen = [
	[15,16],
	[16,16],
	[17,16],
	[17,15],
	[18,15],
	[19,15],
	[20,15],
	[21,15],
	[21,16],
	[20,16],
	[19,16],
	[18,16],
	[18,17],
	[17,17],
	[16,17],
	[15,17]
]

var loopLast = [
	[20,19],
	[19,19],
	[18,19],
	[18,20],
	[18,21],
	[18,20],
	[18,19],
	[19,19],
]

var loops = [
	[loopOne, -1],
	[loopTwo, -1],
	[loopThree, -1],
	[loopFour, -1],
	[loopFive, -1],
	[loopSix,-1],
	[loopSeven, -1],
	[loopEight, -1],
	[loopNine, -1],
	[loopTen, -1],
	[loopLast, -1]
]

var x;
var y;
var idx;
var buzz;
var count;
var loc;
var i;
var currLoop;
var currLocations = new Array(loops.length);

export function drawLoops(gameBoard) {
	
	for (i = 0; i < loops.length; i++) {
		currLoop = loops[i][0];
		count = loops[i][1];
	
		if (count == currLoop.length - 1) {
			count = 0;
		} else {
			count++;
		}
		loc = currLoop[count];
		currLocations[i] = loc;
		loops[i][1] = count;
		
		var loop = document.createElement('div');
		loop.style.gridRowStart = loc[1];
		loop.style.gridColumnStart = loc[0];
		loop.classList.add('Loop');
		gameBoard.appendChild(loop);

		const image = document.createElement('img');
		image.src  = "pics/UgaWithShirt.png";
		image.classList.add('paper');
		loop.appendChild(image);
	}
	collision();
}


function indexedAt(buzz, coords) {
	x = buzz[0];
	y = buzz[1];
	for (i = 0; i < coords.length; i++) {
		if ((x == coords[i][0]) && (y == coords[i][1])) {
			return i;
		}
	}
	return -1;
}

function collision() {
	buzz = playerLocation();
	idx = indexedAt(buzz, currLocations);
	if (idx != -1) {
		window.location.href= "loseScreen.html";
	}
}


