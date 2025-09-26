'use strict';

// write your code here
const tableRow = document.querySelectorAll('tr');

tableRow.forEach((row) => {
  const cells = row.cells;
  const secondCell = cells[1];

  if (cells.length < 2) {
    return;
  }

  const clone = secondCell.cloneNode(true);
  const lastCell = cells[cells.length - 1];

  row.insertBefore(clone, lastCell);
});
