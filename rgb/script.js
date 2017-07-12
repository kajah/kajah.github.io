var red = document.getElementById("red");
var blue = document.getElementById("blue");
var green = document.getElementById("green");
var choices = document.querySelectorAll("td"); // array of squares
var newColors = document.getElementById("newColors");
var msg = document.getElementById("message");
var difficulty = document.getElementsByClassName("difficulty"); // easy and hard buttons
var answer;
var numChoices;

startGame();

function startGame() {
	numChoices = 6;
	reset();
	initDifficulty();
	newColors.addEventListener("click", reset);
}

function reset() {
	msg.textContent = "";
	newColors.textContent = "New Colors";
	document.querySelector("h1").style.backgroundColor = "steelblue";
	var randomR = getRandomInt(0, 251);
	var randomG = getRandomInt(0, 251);
	var randomB = getRandomInt(0, 251);
	red.textContent = randomR;
	green.textContent = randomG;
	blue.textContent = randomB;
	answer = formatRGB(randomR, randomG, randomB);
	for (var i = 0; i < choices.length; i ++) {
		choices[i].style.visibility = "hidden";
	}
	initColors(answer);
}

function initColors(answer) {
	var randomAnswerChoice = getRandomInt(0, numChoices);
	for (var i = 0; i < numChoices; i++) {
		choices[i].style.visibility = "visible";
		var randomR = getRandomInt(0, 251);
		var randomG = getRandomInt(0, 251);
		var randomB = getRandomInt(0, 251);
		if (i == randomAnswerChoice) {
			choices[i].style.backgroundColor = answer;
		} else {
			choices[i].style.backgroundColor = formatRGB(randomR, randomG, randomB);
		}
		choices[i].addEventListener("click", function() {
			if (this.style.backgroundColor == answer) {
				win();
			} else {
				this.style.visibility = "hidden";
				msg.textContent = "Try Again!";
			}
		});
	}
}

function initDifficulty() {
	for (var i = 0; i < difficulty.length; i ++) {
		difficulty[i].addEventListener("click", function() {
			difficulty[0].classList.remove("selected");
			difficulty[1].classList.remove("selected");
			this.classList.add("selected");
			this.textContent === "Easy" ? numChoices = 3: numChoices = 6;
			reset();
		});
	}
}

function win() {
	msg.textContent = "You Win!";
	document.querySelector("h1").style.backgroundColor = answer;
	for (var i = 0; i < numChoices; i ++) {
		choices[i].style.backgroundColor = answer;
		choices[i].style.visibility = "visible";
	}
	newColors.textContent = "Play Again?";
}

function getRandomInt(min, max) {
	min = Math.ceil(min); // inclusive
	max = Math.floor(max); // exclusive
	return Math.floor(Math.random() * (max - min)) + min;
}

function formatRGB(r, g, b) {
	return "rgb(" + r + ", " + g + ", " + b + ")";
}
