import { getInputDirection } from './input.js';
import config from './config.js';

const { GRID_SIZE } = config;
let newSegments = 0;
const center = Math.ceil(GRID_SIZE / 2);
const snakeSegments = [{ row: center, col: center }];

export function update() {
  addSegments();
  const inputDirection = getInputDirection();
  for (let i = snakeSegments.length - 2; i >= 0; --i) {
    snakeSegments[i + 1] = { ...snakeSegments[i] };
  }

  snakeSegments[0].row += inputDirection.row;
  snakeSegments[0].col += inputDirection.col;
}

export function draw(gameboard) {
  snakeSegments.forEach((segment, index) => {
    const snakeSegment = document.createElement('div');
    snakeSegment.style.gridRowStart = segment.row;
    snakeSegment.style.gridColumnStart = segment.col;
    snakeSegment.classList.add(index === 0 ? 'snake-head' : 'snake');
    gameboard.appendChild(snakeSegment);
  });
}

export function onSnake(position, ignoreHead = false) {
  return snakeSegments.some((segment, index) => {
    if (ignoreHead && index === 0) return false;
    return equalPositions(position, segment);
  });
}

export function expandSnake(rate) {
  newSegments += rate;
}

function equalPositions(position1, position2) {
  return position1.row === position2.row && position1.col === position2.col;
}

function addSegments() {
  for (let i = 0; i < newSegments; i++) {
    snakeSegments.push({ ...snakeSegments[snakeSegments.length - 1] });
  }
  newSegments = 0;
}

export function getSnakeHead() {
  return snakeSegments[0];
}

export function snakeIntersection() {
  return onSnake(getSnakeHead(), true);
}
