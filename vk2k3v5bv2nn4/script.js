const playBoard = document.querySelector('.play-board');

let foodX = 20, foodY = 2;
let snakeX = 15, snakeY = 15;
let velocityX = 0, velocityY = 0;
const snakeBody = [[snakeX, snakeY]];

const changeDirection = (e) => {
    const key = e.key;

    // Extract velocity from input
    switch (key) {
        case 'ArrowLeft':
            velocityY = -1;
            velocityX = 0;
            break;

        case 'ArrowRight':
            velocityY = 1;
            velocityX = 0;
            break;

        case 'ArrowUp':
            velocityY = 0;
            velocityX = -1;
            break;

        case 'ArrowDown':
            velocityY = 0;
            velocityX = 1;
            break;

        default:
            velocityY = 0;
            velocityX = 0;
            break;
    }

    // Redraw changes on screen
    initGame();
};

const changeFoodPosition = () => {
    foodX = Math.floor(Math.random() * 30) + 1
    foodY = Math.floor(Math.random() * 30) + 1

    if (foodX == 15 && foodY == 15) {
        foodX = 10;
        foodY = 10;
    }
};

const initGame = () => {
    let htmlMarkup = `<div class="food" style="grid-area: ${foodX} / ${foodY};"></div>`;

    // Update all the body parts execpt head
    for(let i=snakeBody.length-1; i>0; i++) {
        console.log(i);
        snakeBody[i] = snakeBody[i-1];
    }
    
    // Update only the head body part
    snakeX += velocityX;
    snakeY += velocityY;
    snakeBody[0] = [snakeX, snakeY];

    // Snake eats food
    if (snakeX == foodX && snakeY == foodY) {
        changeFoodPosition();
        snakeBody.push([1, 1])
    }
    
    // Draw the whole snake body
    snakeBody.forEach(pos => {
        htmlMarkup += `<div class="head" style="grid-area: ${pos[0]} / ${pos[1]};"></div>`;
    });

    playBoard.innerHTML = htmlMarkup;

};

changeFoodPosition();
initGame();
document.addEventListener('keydown', changeDirection);