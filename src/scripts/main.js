'use strict';

// write your code here
const toClone = document.querySelector('table');

[...toClone.rows].forEach((row) => {
  const cells = row.cells;
  const copiedCell = cells[1].cloneNode(true);
  const lastCell = cells[cells.length - 1];

  lastCell.before(copiedCell);
});
