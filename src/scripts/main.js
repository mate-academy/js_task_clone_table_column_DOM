'use strict';

// write your code here
const table = document.querySelector('table');
const rows = table.rows;

for (const row of rows) {
  const secondCell = row.cells[1];
  const clonedCell = secondCell.cloneNode(true);
  const lastCell = row.cells[row.cells.length - 1];

  row.insertBefore(clonedCell, lastCell);
}
