//y1 and y2 / x1 and x2 are inclusive

var cantGoRight = [];
var cantGoLeft = [];
var cantGoUp = [];
var cantGoDown = [];
createCantGoLists();

function VertEdge(x, y1, y2) {
	this.x = x;
	this.y1 = y1;
	this.y2 = y2;
}

function HorizEdge(y, x1, x2) {
	this.y = y;
	this.x1 = x1;
	this.x2 = x2;
}

//instantiate all edges - hardcoding
function createCantGoLists() {
	var verticalEdges = [];
	var horizontalEdges = [];
	
	verticalEdges.push(new VertEdge(0, 0, 22));
	verticalEdges.push(new VertEdge(2, 2, 7));
	verticalEdges.push(new VertEdge(2, 9, 19));
	verticalEdges.push(new VertEdge(4, 0, 2));
	verticalEdges.push(new VertEdge(4, 3, 9));
	verticalEdges.push(new VertEdge(4, 12, 22));
	verticalEdges.push(new VertEdge(4, 12, 22));
	verticalEdges.push(new VertEdge(5, 2, 3));
	verticalEdges.push(new VertEdge(6, 5, 19));
	verticalEdges.push(new VertEdge(8, 2, 5));
	verticalEdges.push(new VertEdge(8, 6, 8));
	verticalEdges.push(new VertEdge(8, 10, 11));
	verticalEdges.push(new VertEdge(8, 13, 22));
	verticalEdges.push(new VertEdge(10, 4, 9));
	verticalEdges.push(new VertEdge(10, 12, 16));
	verticalEdges.push(new VertEdge(11, 18, 20));
	verticalEdges.push(new VertEdge(12, 2, 4));
	verticalEdges.push(new VertEdge(12, 8, 11));
	verticalEdges.push(new VertEdge(12, 13, 18));
	verticalEdges.push(new VertEdge(13, 19, 22));
	verticalEdges.push(new VertEdge(14, 0, 6));
	verticalEdges.push(new VertEdge(14, 10, 13));
	verticalEdges.push(new VertEdge(14, 15, 17));
	verticalEdges.push(new VertEdge(15, 17, 19));
	verticalEdges.push(new VertEdge(16, 3, 8));
	verticalEdges.push(new VertEdge(16, 12, 15));
	verticalEdges.push(new VertEdge(21, 0, 22));
	
	horizontalEdges.push(new HorizEdge(0, 0, 21));
	horizontalEdges.push(new HorizEdge(2, 2, 5));
	horizontalEdges.push(new HorizEdge(2, 8, 12));
	horizontalEdges.push(new HorizEdge(3, 4, 5));
	horizontalEdges.push(new HorizEdge(5, 6, 8));
	horizontalEdges.push(new HorizEdge(6, 10, 14));
	horizontalEdges.push(new HorizEdge(8, 8, 10));
	horizontalEdges.push(new HorizEdge(8, 12, 16));
	horizontalEdges.push(new HorizEdge(9, 2, 4));
	horizontalEdges.push(new HorizEdge(10, 14, 21));
	horizontalEdges.push(new HorizEdge(11, 6, 12));
	horizontalEdges.push(new HorizEdge(12, 16, 19));
	horizontalEdges.push(new HorizEdge(13, 12, 14));
	horizontalEdges.push(new HorizEdge(14, 18, 21));
	horizontalEdges.push(new HorizEdge(15, 14, 16));
	horizontalEdges.push(new HorizEdge(16, 8, 10));
	horizontalEdges.push(new HorizEdge(16, 18, 21));
	horizontalEdges.push(new HorizEdge(17, 14, 15));
	horizontalEdges.push(new HorizEdge(18, 10, 12));
	horizontalEdges.push(new HorizEdge(18, 15, 17));
	horizontalEdges.push(new HorizEdge(19, 13, 15));
	horizontalEdges.push(new HorizEdge(19, 18, 21));
	horizontalEdges.push(new HorizEdge(21, 0, 21));

	// instantiate cantGo lists
	// cantGoRight/Left[y][x], cantGoUp/Down[x][y]
	var i;
	for (i = 0; i < 22; i++) {
		cantGoRight.push([]);
		cantGoLeft.push([]);
		cantGoUp.push([]);
		cantGoDown.push([]);
	}

	var j;
	var leftx;
	var rightx;
	for (i = 0; i < verticalEdges.length; i++) {
		for (j = verticalEdges[i].y1 + 1; j <= verticalEdges[i].y2; j++) {
			rightx = verticalEdges[i].x;
			leftx = rightx + 1;
			if (leftx < 22) {
				cantGoLeft[leftx].push(j);
			}
			if (rightx > -1) {
				cantGoRight[rightx].push(j);
			}
		}
	}
	
	var lowery;
	var uppery;
	
	for (i = 0; i < horizontalEdges.length; i++) {
		for (j = horizontalEdges[i].x1 + 1; j <= horizontalEdges[i].x2; j++) {
			lowery = horizontalEdges[i].y;
			uppery = lowery + 1;
			if (uppery < 22) {
				cantGoUp[uppery].push(j);
			}
			if (lowery > -1) {
				cantGoDown[lowery].push(j);
			}
		}
	}
}

export function checkRight(x, y) {
	if (x < 22) {
		return cantGoRight[x].includes(y);
	}
	return true;
}

export function checkLeft(x, y) {
	 if (x < 22) {
		return cantGoLeft[x].includes(y);
	}
	return true;
}

export function checkUp(x, y) {
	 if (y < 22) {
	 	return cantGoUp[y].includes(x);
	}
	return true;
}

export function checkDown(x, y) {
	if (y < 22) {
	 	return cantGoDown[y].includes(x);
	}
	return true;
}





