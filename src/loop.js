"use strict"

function loop() {
	updateBackground();
	background(backgroundColor);

	drawSeparators();

	if(tiles.length > 0 && tiles[0].position.y >= height) {
		tiles.shift();
	}

	tiles.forEach( tile => {
		tile.update();
		tile.draw();
	});
	
	killedTiles.forEach( tile => {
		tile.update();
		tile.draw();
	});
}

function updateBackground() {
	if(backgroundColor.r !== targetBackgroundColor.r)
		backgroundColor.r += (targetBackgroundColor.r - originalBackgroundColor.r)/240;
	if(backgroundColor.g !== targetBackgroundColor.g)
		backgroundColor.g += (targetBackgroundColor.g - originalBackgroundColor.g)/240;
	if(backgroundColor.b !== targetBackgroundColor.b)
		backgroundColor.b += (targetBackgroundColor.b - originalBackgroundColor.b)/240;
}

function drawSeparators() {
	stroke(new Color(52));
	strokeWeight(3);

	line(2.5*width/100 + gameWidth/4, 0, 2.5*width/100 + gameWidth/4, height);
	line(2.5*width/100 + gameWidth/2, 0, 2.5*width/100 + gameWidth/2, height);
	line(2.5*width/100 + 3*gameWidth/4, 0, 2.5*width/100 + 3*gameWidth/4, height);
}

