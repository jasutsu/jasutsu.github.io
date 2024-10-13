var inputField = document.querySelector('.input-field');
var para = document.querySelector('.wrapper.text-wrapper .typing-text p');
var tryAgainBtn = document.querySelector('.wrapper.text-wrapper button');
var stats = document.querySelector('.wrapper.stats-wrapper');
var time = document.querySelector('.time-button-container .time span b');
var mistake = document.querySelector('.result-details .mistake span b');
var wpm = document.querySelector('.result-details .wpm span b');
var cpm = document.querySelector('.result-details .cpm span b');

var startGame = true;
var gameFinished = false;
var inputCharacters = '';
var tryAgainBtnPressed = false;

var maxTime = 30;
var timeLeft = maxTime;
var timer;

function setRandomParagraph() {
	var n = paragraphs.length;
	var randomIndex = Math.floor(Math.random() * n);
	randomIndex = Math.max(0, randomIndex);
	randomIndex = Math.min(n - 1, randomIndex);

	var randomParagraph = paragraphs[randomIndex].paragraph;
	var spanParagraph = '';
	var firstSpan = true;
	randomParagraph.split('').forEach(ch => {
		var span = `<span>${ch}</span>`;
		if (firstSpan) {
			firstSpan = false;
			span = `<span class="active">${ch}</span>`;
		}
		spanParagraph += span;
	});
	para.innerHTML = spanParagraph;
}

function resetGame() {
	clearInterval(timer);
	timer = setInterval(() => {
		timeLeft -= 1;
		time.innerText = timeLeft;
		if (timeLeft <= 0) {
			clearInterval(timer);
			finishGame();
		}
	}, 1000);
	inputField.value = '';
	inputField.focus();
	gameFinished = false;
	inputCharacters = '';
	tryAgainBtnPressed = true;
	timeLeft = maxTime;
	time.innerText = timeLeft;

	if (startGame) {
		startGame = false;
		tryAgainBtn.innerHTML = 'Try Again';
	} else {
		setRandomParagraph();
	}
}

function typingHandler() {
	// Check finish game condition
	if (gameFinished) {
		inputField.value = inputCharacters;
		return;
	}

	// Calculate charMatch
	inputCharacters = inputField.value;
	var charSize = inputCharacters.length;
	var actualCharacters = para.querySelectorAll('span');
	var maxCharSize = actualCharacters.length;
	var charMatch = Array(charSize).fill(0);

	for (var i = 0; i < charSize; i += 1) {
		if (inputCharacters[i] === actualCharacters[i].innerText) {
			charMatch[i] = 1;
		}
	}

	// Reset classes in para
	for (var i = 0; i < actualCharacters.length; i += 1) {
		var element = actualCharacters[i];
		while (element.classList.length > 0) {
			element.classList.remove(element.classList.item(0));
		}
	}

	// Set that one character with 'active' class
	if (charSize < maxCharSize) {
		actualCharacters[charSize].classList.add('active');
	}

	// Process charMatch
	for (var i = 0; i < charSize; i += 1) {
		if (charMatch[i] === 1) {
			actualCharacters[i].classList.add('correct');
		} else {
			actualCharacters[i].classList.add('incorrect');
		}
	}

	// Update stats
	var correctCount = charMatch.reduce((accumulator, num) => {
		return accumulator + num;
	}, 0);
	var incorrectCount = charSize - correctCount;
	var timeSpannedInMinutes = (maxTime - timeLeft) / 60;
	mistake.innerText = incorrectCount;
	cpm.innerText = correctCount / timeSpannedInMinutes;
	wpm.innerText = correctCount / (5 * timeSpannedInMinutes);

	// Reached at the end of para
	if (charSize === maxCharSize) {
		finishGame();
	}
}

function finishGame() {
	gameFinished = true;
	inputField.blur();
	console.log('Game Finished!');
	scrollToStats();
}

function scrollToStats() {
	var rect = stats.getBoundingClientRect();
	window.scrollTo({
		top: rect.top + window.scrollY,
		behavior: 'smooth'
	});
}

function clickHandler() {
	if (tryAgainBtnPressed && !gameFinished) {
		inputField.focus();
	}
}

setRandomParagraph();
document.addEventListener('click', clickHandler);
tryAgainBtn.addEventListener('click', resetGame);
inputField.addEventListener('input', typingHandler);