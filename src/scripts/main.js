'use strict';

// write your code here
const rows = document.querySelectorAll('tr');

rows.forEach((row) => {
  const cells = row.querySelectorAll('th, td');

  if (cells.length >= 2) {
    const secondCell = cells[1];
    const clonedCell = secondCell.cloneNode(true);
    const lastCell = cells[cells.length - 1];

    lastCell.parentNode.insertBefore(clonedCell, lastCell);
  }
});
