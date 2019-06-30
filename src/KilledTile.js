'use strict';

class KilledTile {
	constructor(x, y) {
		this.position = new Vector(x, y);
		this.particles = [];

		for(let i = 0; i < randomInt(40, 50); i++) {
			this.particles.push(new Particle(this.position.x + random(-10, 10), this.position.y + random(-10, 10), random(-1, 1), random(-1, 1)));
		}
	}

	update() {
		this.particles.forEach( particle => particle.update() );

	}

	draw() {
		this.particles.forEach( particle => particle.draw() );
	}
}

