import { checkLeft, checkRight, checkUp, checkDown } from './walls.js';
let inputDirection = { x: 0, y: 0 };
export const PLAYER_SPEED = 0.35;
const playerBody = [{ x: 1, y: 1 }];

window.addEventListener('keydown', e => {
    inputDirection = {x: 0 , y: 0 };
    switch (e.key) {
        case 'ArrowUp':
			if (!checkUp(playerBody[0].x,playerBody[0].y)) {
            	inputDirection = {x:0, y:-1};
			}
			break;
        case 'ArrowDown':
			if (!checkDown(playerBody[0].x,playerBody[0].y)) {
            	inputDirection = {x:0, y:1};
			}
			break;
        case 'ArrowLeft':
			if (!checkLeft(playerBody[0].x,playerBody[0].y)) {
            	inputDirection= {x:-1, y:0};
			}
            break;
        case 'ArrowRight':
			if (!checkRight(playerBody[0].x,playerBody[0].y)) { 
            	inputDirection = {x:1, y:0};
			}
            break;    
    }
})

export function getInputDirection() {
    return inputDirection;
}

export function update() {
    const inputDirection = getInputDirection();
   
    for(let i = playerBody.length - 2; i >=0; i--) {
        playerBody[i + 1] = { ...playerBody[i] };
    }
   
    playerBody[0].x += inputDirection.x;
    playerBody[0].y += inputDirection.y;
    inputDirection.x = 0;
    inputDirection.y = 0;
	
}

export function playerLocation() {
	return [playerBody[0].x, playerBody[0].y];
}

export function draw(gameBoard) {
   playerBody.forEach(segment => {   
       const playerElement = document.createElement('div');
            
       playerElement.style.gridRowStart = segment.y;
       playerElement.style.gridColumnStart = segment.x;
       playerElement.classList.add('player');
       gameBoard.appendChild(playerElement);
       
       const image = document.createElement('img');
       image.src  = 'pics/buzz.png';
	   image.classList.add('buzz');
	   
       document.querySelector('.player').appendChild(image);
   });
}
