'use strict';

// write your code here
const rows = document.querySelectorAll('table tr');

rows.forEach((row) => {
  const targetCell = row.cells[1];

  if (targetCell) {
    const clone = targetCell.cloneNode(true);
    const lastCell = row.cells[row.cells.length - 1];

    row.insertBefore(clone, lastCell);
  }
});
