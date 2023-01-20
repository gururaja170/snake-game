let inputDirection = { row: 0, col: 0 };

export function getInputDirection() {
  return inputDirection;
}

window.addEventListener('keydown', (e) => {
  switch (e.key) {
    case 'ArrowUp':
      if (inputDirection.row !== 0) break;
      inputDirection = { row: -1, col: 0 };
      break;
    case 'ArrowDown':
      if (inputDirection.row !== 0) break;
      inputDirection = { row: 1, col: 0 };
      break;
    case 'ArrowLeft':
      if (inputDirection.col != 0) break;
      inputDirection = { row: 0, col: -1 };
      break;
    case 'ArrowRight':
      if (inputDirection.col != 0) break;
      inputDirection = { row: 0, col: 1 };
      break;
  }
});
