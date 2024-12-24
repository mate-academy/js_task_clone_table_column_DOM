'use strict';

// write your code here
const table = document.querySelector('table');

for (const row of table.rows) {
  const cellToClone = row.cells[1];
  const clonedCell = cellToClone.cloneNode(true);
  const lastCellIndex = row.cells.length - 1;

  row.insertBefore(clonedCell, row.cells[lastCellIndex]);
}
