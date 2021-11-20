import { playerLocation } from './player.js';

var aLocations = [
	[3, 1],
	[20, 1],
	[5, 3],
	[19, 5],
	[9, 8],
	[13, 9],
	[9, 16],
	[21, 16],
	[3, 18],
	[15, 19]
];

var fLocations = [
	[1, 11],
	[1, 17],
	[2, 14],
	[4, 15],
	[5, 10],
	[7, 4],
	[10, 5],
	[11, 12],
	[13, 7],
	[14, 13],
	[15, 18],
	[17, 12],
];

var score = 0.0;
var gameScore;
var x;
var y;
var Aidx;
var	Fidx;
var i;

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

export function collision() {
	var buzz = playerLocation();
	Aidx = indexedAt(buzz, aLocations);
	Fidx = indexedAt(buzz, fLocations);
	//collided
	
	if (Aidx != -1) {
		aLocations.splice(Aidx, 1);
		gameScore = document.querySelector('.GPA');
		score += .4;
		score = Math.round(score * 10) / 10;
		gameScore.innerHTML = 'GPA: ' + score.toString();
		Aidx = -1;
	} else if (Fidx != -1) {
		fLocations.splice(Fidx, 1);
		gameScore = document.querySelector('.GPA');
		score -= .5;
		score = Math.round(score * 10) / 10;
		gameScore.innerHTML = 'GPA: ' + score.toString();
		Fidx = -1;
	} else if ((buzz[0] == 20 && buzz[1] == 20) || (buzz[0] == 20 && buzz[1] == 21)) {
		winGame();
	} 
}

export function drawGrades(gameBoard) {
	collision();
   	aLocations.forEach(segment => {   
       var gradeA = document.createElement('div');
            
       gradeA.style.gridRowStart = segment[1];
       gradeA.style.gridColumnStart = segment[0];
       gradeA.classList.add('gradeA');
       gameBoard.appendChild(gradeA);
       
       const image = document.createElement('img');
       image.src  = 'pics/PaperA.png';
	   image.classList.add('paper');
	   
       gradeA.appendChild(image);
	});
		
	fLocations.forEach(segment => {   
       var gradeF = document.createElement('div');
            
       gradeF.style.gridRowStart = segment[1];
       gradeF.style.gridColumnStart = segment[0];
       gradeF.classList.add('gradeF');
       gameBoard.appendChild(gradeF);
       
       const image = document.createElement('img');
       image.src  = 'pics/PaperF.png';
	   image.classList.add('paper');
	   
       gradeF.appendChild(image);
   	});
}

function winGame() {
	if (score < 1) {
		window.location.href= "win0.html";
	} else if (score < 2) {
		window.location.href= "win10.html";
	} else if (score < 3) {
		window.location.href= "win20.html";
	} else if (score < 4) {
		window.location.href= "win30.html";
	} else {
		window.location.href= "win40.html";
	}
}

