import config from './config.js';

const { GRID_SIZE } = config;

export function randomGridPosition() {
  return {
    row: Math.floor(Math.random() * GRID_SIZE) + 1,
    col: Math.floor(Math.random() * GRID_SIZE) + 1,
  };
}

export function outsideGrid(position) {
  return (
    position.row < 1 ||
    position.row > GRID_SIZE ||
    position.col < 1 ||
    position.col > GRID_SIZE
  );
}
