const scoreElement = document.querySelector('.score');
const highScoreElement = document.querySelector('.high-score');
const playBoard = document.querySelector('.play-board');
const controls = document.querySelectorAll('.controls');

const GAME_FPS = 125;
let intervalId;
let gameOver = false;
let hasJustEaten = false;

let headX = 15, headY = 15;
let foodX = 10, foodY = 10;
let velocityX = 0, velocityY = 0;
const snakeBody = [[headX, headY]];

let score = 0;
let highScore = Number(localStorage.getItem('high-score') || 0);
highScoreElement.innerText = `High Score: ${highScore}`;

const changeDirection = (e) => {
    const key = e.key;

    if (key === 'ArrowLeft' && velocityX != 1) {
        velocityX = -1;
        velocityY = 0;
    } else if (key === 'ArrowRight' && velocityX != -1) {
        velocityX = 1;
        velocityY = 0;
    } else if (key === 'ArrowUp' && velocityY != 1) {
        velocityX = 0;
        velocityY = -1;
    } else if (key === 'ArrowDown' && velocityY != -1) {
        velocityX = 0;
        velocityY = 1;
    }
};

const changeFoodPosition = () => {
    foodX = Math.floor(Math.random() * 30) + 1
    foodY = Math.floor(Math.random() * 30) + 1
};

const handleGameOver = () => {
    clearInterval(intervalId);
    alert('Game Over! Press OK to restart...');
    location.reload();
};

const loopGame = () => {
    if (gameOver) {
        return handleGameOver();
    }

    // Make the snake body follow head
    for (let i = snakeBody.length - 1; i > 0; i -= 1) {
        snakeBody[i] = snakeBody[i-1];
    }

    // Update head position
    headX += velocityX;
    headY += velocityY;
    snakeBody[0] = [headX, headY];

    // Game over when snake hits boundaries
    if (headX <= 0 || headX > 30 || headY <= 0 || headY > 30) {
        gameOver = true;
    }

    // Snake eats food
    hasJustEaten = false;
    if (headX === foodX && headY === foodY) {
        snakeBody.push([foodX, foodY]);
        changeFoodPosition();
        hasJustEaten = true;

        // Update Score
        score++;
        scoreElement.innerText = `Score: ${score}`;
        if (score > highScore) {
            highScore = score;
            highScoreElement.innerText = `High Score: ${highScore}`;
            localStorage.setItem('high-score', highScore)
        }
    }

    // Draw snake body
    let playBoardMarkup = `<div class="food" style="grid-area: ${foodY} / ${foodX};"></div>`;
    snakeBody.forEach(([posX, posY], i) => {
        // Game over when snake bites itself
        if (i !== 0 && !hasJustEaten && posX === headX && posY === headY) {
            gameOver = true;
        }

        playBoardMarkup += `<div class="head" style="grid-area: ${posY} / ${posX};"></div>`;
    });

    playBoard.innerHTML = playBoardMarkup;
};

// Game Init
changeFoodPosition();

// Game Loop
intervalId = setInterval(loopGame, GAME_FPS);
document.addEventListener('keydown', changeDirection);