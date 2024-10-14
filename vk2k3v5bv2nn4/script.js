var inputField = document.querySelector('.input-field');
var para = document.querySelector('.wrapper.text-wrapper .typing-text p');
var tryAgainBtn = document.querySelector('.wrapper.text-wrapper button');
var stats = document.querySelector('.wrapper.stats-wrapper');
var time = document.querySelector('.time-button-container .time span b');
var mistake = document.querySelector('.result-details .mistake span b');
var wpm = document.querySelector('.result-details .wpm span b');
var cpm = document.querySelector('.result-details .cpm span b');
var timeOptionsButtons = document.querySelectorAll('.wrapper.time-wrapper .content button');

var startGame = true;
var gameFinished = false;
var inputCharacters = '';
var tryAgainBtnPressed = false;
var charHeight = 0;
var currentInputWidth = 0;

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
	setMaxTime(maxTime);
	scrollInputField(0);

	mistake.innerText = '0';
	cpm.innerText = '0';
	wpm.innerText = '0';

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
		currentInputWidth += actualCharacters[i].getBoundingClientRect().width;
	}

	// Scroll Behaviour
	var paraWidth = para.getBoundingClientRect().width;
	var scrollValue = Math.floor(currentInputWidth/paraWidth);
	console.log(scrollValue);
	scrollInputField(scrollValue);

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
	mistake.innerText = Math.floor(incorrectCount);
	var cpmValue = 0;
	if(timeSpannedInMinutes > 0) {
		cpmValue = correctCount / timeSpannedInMinutes;
	}
	cpm.innerText = Math.floor(cpmValue);
	wpm.innerText = Math.floor(cpmValue/5);

	// Reached at the end of para
	if (charSize === maxCharSize) {
		finishGame();
	}
}

function finishGame() {
	addToStatsList(mistake.innerText, cpm.innerText, wpm.innerText, maxTime);
	gameFinished = true;
	inputField.blur();
	console.log('Game Finished!');
	scrollToElement(stats);
}

function scrollToElement(elem) {
	var rect = elem.getBoundingClientRect();
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

function setMaxTime(t) {
	timeLeft = t;
	maxTime = t;
	time.innerText = t;
}

function scrollInputField(scrollValue) {
	console.log('Scroll next line in para');
	currentInputWidth = 0;
	var scrollDiv = document.querySelector('.wrapper.text-wrapper .typing-text');
	var ch = scrollDiv.querySelector('span');
	var lineHeight = window.getComputedStyle(ch).lineHeight;
	console.log(scrollDiv.scrollTop);
	scrollDiv.scrollTop = scrollValue*parseFloat(lineHeight);
}

setRandomParagraph();
document.addEventListener('click', clickHandler);
tryAgainBtn.addEventListener('click', resetGame);
inputField.addEventListener('input', typingHandler);

let timeOptions = [5, 10, 30, 60];
for(let i = 0; i < 4; i += 1) {
	timeOptionsButtons[i].addEventListener('click', () => {
		setMaxTime(timeOptions[i]);
		resetGame();
	});
}