'use strict';

// write your code here
const table = document.querySelector('table');

[...table.rows].forEach(row => {
  const lastCell = row.cells[row.cells.length - 1];

  lastCell.before(row.cells[1].cloneNode(true));
});
