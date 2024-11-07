const score = document.querySelector('.score');
const highScore = document.querySelector('.high-score');
const playBoard = document.querySelector('play-board');
const controls = document.querySelectorAll('.controls');

let intervalId;
let headX = 15, headY = 15;
let foodX = 10, foodY = 10;
let velocityX = 0, velocityY = 0;
let gameOver = false;
const GAME_FPS = 125;

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
    foodX = Math.floor(Math.random()*30)+1
    foodY = Math.floor(Math.random()*30)+1
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

    
};

intervalId = setInterval(loopGame, GAME_FPS);
document.addEventListener('keydown', changeDirection);