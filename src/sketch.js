"use strict"

let width, height;

let yTile1 = 0;
let yTile2 = 100;

let isTileClicked = [false, false];

function setup() {
	width = canvas.width;
	height = canvas.height;

	canvas.addEventListener('click', gameClick);
}

function loop() {
	background( new Color(100, 100, 255) );

	stroke(new Color(52));
	strokeWeight(3);

	line(width/4, 0, width/4, height);
	line(width/2, 0, width/2, height);
	line(3*width/4, 0, 3*width/4, height);

	fill(new Color(52));

	drawTile(0, yTile1, 0);
	drawTile(2, yTile2, 1);

	yTile1 += 2;
	yTile2 += 2;
}

function gameClick(evt) {
	let rect = evt.target.getBoundingClientRect();
	let pos = new Vector(evt.clientX - rect.left, evt.clientY - rect.top);
		
	if( (pos.x >= 0 && pos.x <= width/4) && (pos.y >= yTile1 && pos.y <= (yTile1 + width/3)))
		isTileClicked[0] = true;
	
	else if( (pos.x >= width/2 && pos.x <= 3*width/4) && (pos.y >= yTile2 && pos.y <= (yTile2 + width/3)))
		isTileClicked[1] = true;
}

function drawTile(x, y, id) {
	if(isTileClicked[id])
		fill(new Color(100));
	else 
		fill(new Color(52));

	rect(x*width/4, y, width/4, width/3);
}

