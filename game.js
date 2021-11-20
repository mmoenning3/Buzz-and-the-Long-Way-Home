import { update as updatePlayer, draw as drawPlayer, PLAYER_SPEED } from './player.js';
import { drawGrades } from './collisions.js';
import { drawLoops } from './dawgs.js';

let lastRenderTime = 0;
const gameBoard = document.getElementById("game-board");
var gameState = 0;

function main(currentTime) {
    window.requestAnimationFrame(main);
    const secondsSinceLastRender = (currentTime - lastRenderTime) / 100;
    
    if (secondsSinceLastRender < 1 / PLAYER_SPEED) {
        return;
    }

    lastRenderTime = currentTime;
    
    update();
    draw();
}

window.requestAnimationFrame(main);

function update() {
    updatePlayer();
}

function draw() {
    gameBoard.innerHTML = '';
    drawPlayer(gameBoard);
	drawGrades(gameBoard);
	drawLoops(gameBoard);
}

function wait(ms)
{
    var d = new Date();
    var d2 = null;
    do { d2 = new Date(); }
    while(d2-d < ms);
}
