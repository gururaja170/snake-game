import config from './config.js';
import {
  draw as drawSnake,
  update as updateSnake,
  getSnakeHead,
  snakeIntersection,
} from './snake.js';
import { draw as drawFood, update as updateFood } from './food.js';
import { outsideGrid } from './grid.js';
const { GRID_SIZE, SNAKE_SPEED } = config;

const gameboard = document.getElementById('game-board');
gameboard.style.setProperty('--grid-size', GRID_SIZE);

let gameOver = false;
let previousTime = 0;
function gameRunner(currentTime) {
  if (gameOver) {
    if (confirm('Game Over !!. Restart?')) {
      window.location.reload();
    }
    return;
  }

  window.requestAnimationFrame(gameRunner);
  const secondsSinceLastRender = (currentTime - previousTime) / 1000;
  if (secondsSinceLastRender < 1 / SNAKE_SPEED) return;

  //   Update the gameboard based on snake speed
  update();
  draw();

  previousTime = currentTime;
}

window.requestAnimationFrame(gameRunner);

function update() {
  updateSnake();
  updateFood();
  checkDeath();
}

function draw() {
  gameboard.innerHTML = '';
  drawSnake(gameboard);
  drawFood(gameboard);
}

function checkDeath() {
  gameOver = outsideGrid(getSnakeHead()) || snakeIntersection();
}
