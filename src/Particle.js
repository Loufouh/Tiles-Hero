'use strict';

class Particle {
	constructor(x, y, speedX, speedY) {
		this.position = new Vector(x, y);
		this.velocity = new Vector(speedX, speedY);

		this.radius = randomInt(1, 5);
	}

	update() {
		this.position.x += this.velocity.x;
		this.position.y += this.velocity.y;

		this.radius -= 0.05;
	}

	draw() {
		if(this.radius <= 0)
			return;
		strokeWeight(2);
		stroke(new Color(255, 255, 52));
		fill(new Color(255, 255, 100));

		circle(this.position.x, this.position.y, this.radius);
	}
}
