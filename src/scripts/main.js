'use strict';

// write your code here
document.querySelectorAll('table tr').forEach((row) => {
  const secondCell = row.cells[1];
  const copy = secondCell.cloneNode(true);
  const cells = row.cells;

  if (cells.length >= 2) {
    row.insertBefore(copy, cells[cells.length - 1]);
  }
});
