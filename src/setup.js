'use strict';

function setup() {
	initCanvas();
}

function initCanvas() {
	if(window.innerHeight > window.innerWidth) {
		width = canvas.width = 90*window.innerWidth/100;
		height = canvas.height = canvas.width*1.5;
	} else {
		height = canvas.height = 90*window.innerHeight/100;
		width = canvas.width = canvas.height/1.5;
	}

	canvas.addEventListener('click', gameClick);
}

function gameClick(evt) {
	let rect = evt.target.getBoundingClientRect();
	let pos = new Vector(evt.clientX - rect.left, evt.clientY - rect.top);
		
	if( (pos.x >= 0 && pos.x <= width/4) && (pos.y >= yTile1 && pos.y <= (yTile1 + width/3)))
		isTileClicked[0] = true;
	
	else if( (pos.x >= width/2 && pos.x <= 3*width/4) && (pos.y >= yTile2 && pos.y <= (yTile2 + width/3)))
		isTileClicked[1] = true;
}
