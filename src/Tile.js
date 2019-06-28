'use strict';

class Tile {
	constructor(x, y) {
		this.position = new Vector(x, y);
		this.isClicked = false;
	}

	click() {
		this.clicked = true;
	}

	update() {
		this.position.y += 4;
	}

	draw() {
		lineCap("round");

		if(this.isClicked) {
			noStroke();
			fill(new Color(88));
		} else {
			strokeWeight(2);
			stroke(new Color(100));

			fill(new Color(52));
		}

		let shiftSize = gameWidth/80
		rect((width - gameWidth)/2 + this.position.x*gameWidth/4 + shiftSize, this.position.y, gameWidth/4 - 2*shiftSize, gameWidth/3);
	}
}
