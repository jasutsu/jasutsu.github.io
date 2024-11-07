const playBoard = document.querySelector('.play-board');

let foodX = 20, foodY = 2;
let snakeX = 15, snakeY = 15;
let velocityX = 0, velocityY = 0;
const snakeBody = [[snakeX, snakeY]];
let gameOver = false;
let intervalId;

const changeDirection = (e) => {
    const key = e.key;

    // default
    velocityX = 0;
    velocityY = 0;

    // Extract velocity from input
    if(key === 'ArrowLeft' && velocityX != 1) {
        velocityY = 0;
        velocityX = -1;
    } else if (key === 'ArrowRight' && velocityX != -1) {
        velocityY = 0;
        velocityX = 1;
    } else if (key === 'ArrowUp' && velocityY != 1) {
        velocityY = -1;
        velocityX = 0;
    } else if (key === 'ArrowDown' && velocityY != -1) {
        velocityY = 1;
        velocityX = 0;
    }
};

const changeFoodPosition = () => {
    foodX = Math.floor(Math.random() * 30) + 1
    foodY = Math.floor(Math.random() * 30) + 1
};

const handleGameOver = () => {
    clearInterval(intervalId);
    alert('Game Over! Press OK to replay...');
    location.reload();
};

const initGame = () => {
    if(gameOver) {
        return handleGameOver();
    }
    
    // Update all the body parts execpt head
    for(let i=snakeBody.length-1; i>0; i--) {
        snakeBody[i] = snakeBody[i-1];
    }
    
    // Update only the head body part
    snakeX += velocityX;
    snakeY += velocityY;
    snakeBody[0] = [snakeX, snakeY];

    // Game Over
    if (snakeX <= 0 || snakeX > 30 || snakeY <= 0 || snakeY > 30) {
        gameOver = true;
    }

    // Snake eats food
    if (snakeX === foodX && snakeY === foodY) {
        snakeBody.push([foodX, foodY])
        changeFoodPosition();
    }
    let htmlMarkup = `<div class="food" style="grid-area: ${foodY} / ${foodX};"></div>`;
    
    // Draw the whole snake body
    snakeBody.forEach(pos => {
        htmlMarkup += `<div class="head" style="grid-area: ${pos[1]} / ${pos[0]};"></div>`;
    });

    playBoard.innerHTML = htmlMarkup;

};

changeFoodPosition();
intervalId = setInterval(initGame, 125);
document.addEventListener('keydown', changeDirection);