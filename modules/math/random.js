"use strict";

function randomElement(list) {
	return list[randomInt(0, list.length)];
}

function randomInt(min, max) {
	return Math.floor(random(min, max));
}

function random(min, max) {
	return Math.random() * (max - min) + min; 
}

function randomChar() {
	return String.fromCharCode(randomInt(100, 500));
}

