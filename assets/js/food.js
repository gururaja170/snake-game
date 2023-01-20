import { expandSnake, onSnake } from './snake.js';
import { randomGridPosition } from './grid.js';
import config from './config.js';

const { EXPANSION_RATE } = config;
let food = getRandomFoodPosition();

export function update() {
  if (onSnake(food)) {
    expandSnake(EXPANSION_RATE);
    food = getRandomFoodPosition();
  }
}

export function draw(gameboard) {
  const foodElement = document.createElement('div');
  foodElement.classList.add('food');
  foodElement.style.gridRowStart = food.row;
  foodElement.style.gridColumnStart = food.col;
  gameboard.appendChild(foodElement);
}

function getRandomFoodPosition() {
  let newFoodPosition;
  while (newFoodPosition == null || onSnake(newFoodPosition)) {
    newFoodPosition = randomGridPosition();
  }
  return newFoodPosition;
}
