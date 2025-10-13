'use strict';

// write your code here
const rows = document.querySelectorAll('table tr');

rows.forEach(row => {
  const cells = Array.from(row.querySelectorAll('th, td'));

  const currentCell = cells.find((cell, index) => index === 1);
  const lastCell = cells[cells.length - 1];

  if (currentCell && lastCell) {
    // Клонуємо другу комірку (з вмістом)
    const clonedCell = currentCell.cloneNode(true);

    // Вставляємо перед останньою
    row.insertBefore(clonedCell, lastCell);
  }
});
