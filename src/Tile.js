'use strict';

class Tile {
	constructor(x, y) {
		this.position = new Vector(x, y);
		this.isClicked = false;
	}

	update() {
		this.position.y += 4*Tile.height()/60;
	}

	draw() {
		lineCap("round");

		strokeWeight(2);
		stroke(new Color(100));

		fill(new Color(52));

		rect(
			 this.absolutePosition().x,
			 this.absolutePosition().y,
			 Tile.width(),
			 Tile.height()
		    );
	}

	kill() {
		let killed = new KilledTile(this.absolutePosition().x + Tile.width()/2, this.absolutePosition().y + Tile.height()/2); 
		killedTiles.push(killed);

		setTimeout( () => killedTiles.splice(killedTiles.indexOf(killed), 1), 5000);
	}

	isPositionIn(position) {
		if( (position.x >= this.absolutePosition().x && position.x <= this.absolutePosition().x + Tile.width()) &&
		    (position.y >= this.absolutePosition().y && position.y <= this.absolutePosition().y + Tile.height()))
			return true;
		else
			return false;
	}

	absolutePosition() {
		return new Vector(gameBorderSize() + this.position.x*gameWidth/4 + Tile.shiftSize(), this.position.y);
	}

	static height() {
		return Tile.width()*1.618;
	}

	static width() {
		return gameWidth/4 - 2*Tile.shiftSize();
	}

	static shiftSize() {
		return gameWidth/80;
	}
}

function gameBorderSize() {
	return (width - gameWidth)/2
}

