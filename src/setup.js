'use strict';

let scoreText;

let originalBackgroundColor = new Color(100, 100, 255);
let targetBackgroundColor = originalBackgroundColor;
let backgroundColor = originalBackgroundColor;

let width, height;
let gameWidth, gameHeight;

let tiles = [];
let killedTiles = [];

let killed;

function setup() {
	scoreText = document.getElementById('scoreText');
	initCanvas();

	document.body.addEventListener('keydown', (evt) => {
		if(tiles.length === 0)
			return;

		if(evt.key === 'h' && tiles[0].position.x === 0) {
			tiles[0].kill();
			tiles.shift();
		} else if(evt.key === 'j' && tiles[0].position.x === 1) {
			tiles[0].kill();
			tiles.shift();
		} else if(evt.key === 'k' && tiles[0].position.x === 2) {
			tiles[0].kill();
			tiles.shift();
		} else if(evt.key === 'l' && tiles[0].position.x === 3) {
			tiles[0].kill();
			tiles.shift();
		}
	});

	alert('To play with a keyboard, you can use "h, j, k, l" keys');

	setInterval( () => tiles.push(new Tile(randomInt(0, 4), -width/2)), 1000/3);
	setInterval( () => {
		let colors = [ 
				new Color(100, 100, 255), new Color(100, 255, 100), new Color(100, 255, 255),
				new Color(255, 100, 100), new Color(255, 100, 255), new Color(255, 255, 100),
				new Color(255, 255, 255)
			     ]

		backgroundColor = originalBackgroundColor = targetBackgroundColor;
		targetBackgroundColor = randomElement(colors);

		document.body.style.backgroundColor = 'rgb(' + ( (targetBackgroundColor.r === 255)? 100: 52) + ','
						      + ( (targetBackgroundColor.g === 255)? 100: 52) + ','
						      + ( (targetBackgroundColor.b === 255)? 100: 52) + ')';
	}, 20000);

}

function initCanvas() {
	if(window.innerHeight > window.innerWidth) {
		width = canvas.width = 95*window.innerWidth/100;
		height = canvas.height = canvas.width*1.618;
	} else {
		height = canvas.height = 95*window.innerHeight/100;
		width = canvas.width = canvas.height/1.618;
	}

	gameWidth = 95*canvas.width/100;
	gameHeight = 95*canvas.height/100;

	canvas.addEventListener('mousedown', gameClick);
}

function gameClick(evt) {
	let rectangle = evt.target.getBoundingClientRect();
	let position = new Vector(evt.clientX - rectangle.left, evt.clientY - rectangle.top);

	for(let i = tiles.length - 1; i >= 0; i--) {
		if(tiles[i].isPositionIn(position)) {
			tiles[i].kill();
			tiles.splice(i, 1);
			i++;
			break;
		}
	}
}
