'use strict';

// write your code here

const table = document.querySelector('table');

for (const row of table.rows) {
  const clonedCell = row.cells[1].cloneNode(true);

  const lastCell = row.cells[row.cells.length - 1];

  row.insertBefore(clonedCell, lastCell);
}
