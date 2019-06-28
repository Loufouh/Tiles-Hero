"use strict"

let width, height;

let yTile1 = 0;
let yTile2 = 100;

let isTileClicked = [false, false];

function loop() {
	background( new Color(100, 100, 255) );

	drawTile(0, yTile1, 0);
	drawTile(2, yTile2, 1);

	drawSeparators();

	yTile1 += 2;
	yTile2 += 2;
}

function drawTile(x, y, id) {
	noStroke();

	if(isTileClicked[id])
		fill(new Color(88));
	else 
		fill(new Color(52));

	rect(x*width/4, y, width/4, width/3);
}

function drawSeparators() {
	stroke(new Color(52));
	strokeWeight(3);

	line(width/4, 0, width/4, height);
	line(width/2, 0, width/2, height);
	line(3*width/4, 0, 3*width/4, height);
}

