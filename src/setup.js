'use strict';

let width, height;
let gameWidth, gameHeight;

let tiles = [];

function setup() {
	initCanvas();

	tiles.push(new Tile(0, 0));
	tiles.push(new Tile(1, -width/2));
	tiles.push(new Tile(2, -width));
	tiles.push(new Tile(3, -3*width/2));

	tiles.push(new Tile(3, -2*width));
	tiles.push(new Tile(2, -5*width/2));
	tiles.push(new Tile(1, -3*width));
	tiles.push(new Tile(0, -7*width/2));
}

function initCanvas() {
	if(window.innerHeight > window.innerWidth) {
		width = canvas.width = 95*window.innerWidth/100;
		height = canvas.height = canvas.width*1.618;
	} else {
		height = canvas.height = 95*window.innerHeight/100;
		width = canvas.width = canvas.height/1.618;
	}

	gameWidth = 95*canvas.width/100;
	gameHeight = 95*canvas.height/100;

	canvas.addEventListener('click', gameClick);
}

function gameClick(evt) {
	let rectangle = evt.target.getBoundingClientRect();
	let position = new Vector(evt.clientX - rectangle.left, evt.clientY - rectangle.top);

	for(let i = 0; i < tiles.length; i++) {
		if(tiles[i].isPositionIn(position)) {
			tiles.splice(i, 1);
			i--;
		}
	}
}
