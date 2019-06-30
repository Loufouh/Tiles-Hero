'use strict';

class Particle {
	constructor(x, y, speedX, speedY, radius) {
		this.position = new Vector(x, y);
		this.velocity = new Vector(speedX, speedY);

		this.radius = radius;
		this.opacity = 1;
	}

	update() {
		this.position.x += this.velocity.x;
		this.position.y += this.velocity.y;

		this.radius -= 0.05;
		this.opacity -= 0.01;
	}

	draw() {
		if(this.radius <= 0)
			return;

		noStroke();
		fill(new Color(255 - backgroundColor.r, 255 - backgroundColor.g, 255 - backgroundColor.b, this.opacity));

		circle(this.position.x, this.position.y, this.radius);
	}
}
