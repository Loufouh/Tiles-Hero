"use strict"

function loop() {
	background( new Color(100, 100, 255) );
	drawSeparators();

	if(tiles.length > 0 && tiles[0].position.y >= height) {
		tiles.shift();
	}

	tiles.forEach( tile => {
		tile.update();
		tile.draw();
	});
}

function drawSeparators() {
	stroke(new Color(52));
	strokeWeight(3);

	line(2.5*width/100 + gameWidth/4, 0, 2.5*width/100 + gameWidth/4, height);
	line(2.5*width/100 + gameWidth/2, 0, 2.5*width/100 + gameWidth/2, height);
	line(2.5*width/100 + 3*gameWidth/4, 0, 2.5*width/100 + 3*gameWidth/4, height);
}

