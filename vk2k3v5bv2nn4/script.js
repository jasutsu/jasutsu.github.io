const score = document.querySelector('.score');
const highScore = document.querySelector('.high-score');
const playBoard = document.querySelector('play-board');
const controls = document.querySelectorAll('.controls');

let intervalId;
let headX = 15, headY = 15;
let foodX = 10, foodY = 10;
let gameOver = false;
const GAME_FPS = 125;

const changeDirection = (e) => {
    console.log(e);
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