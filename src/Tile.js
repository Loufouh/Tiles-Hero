'use strict';

class Tile {
	constructor(x, y) {
		this.position = new Vector(x, y);
		this.isClicked = false;
	}

	update() {
		this.position.y += 10;
	}

	draw() {
		lineCap("round");

		strokeWeight(2);
		stroke(new Color(100));

		fill(new Color(52));

		rect(
			 this.absolutePosition().x,
			 this.absolutePosition().y,
			 Tile.tileWidth(),
			 Tile.tileHeight()
			);
	}

	isPositionIn(position) {
		if( (position.x >= this.absolutePosition().x && position.x <= this.absolutePosition().x + Tile.tileWidth()) &&
		    (position.y >= this.absolutePosition().y && position.y <= this.absolutePosition().y + Tile.tileHeight()))
			return true;
		else
			return false;
	}

	absolutePosition() {
		return new Vector(gameBorderSize() + this.position.x*gameWidth/4 + Tile.shiftSize(), this.position.y);
	}

	static tileHeight() {
		return Tile.tileWidth()*1.618;
	}

	static tileWidth() {
		return gameWidth/4 - 2*Tile.shiftSize();
	}

	static shiftSize() {
		return gameWidth/80;
	}
}

function gameBorderSize() {
	return (width - gameWidth)/2
}

