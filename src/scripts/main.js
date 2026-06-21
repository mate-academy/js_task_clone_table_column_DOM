'use strict';

const table = document.querySelector('table');

for (const row of table.rows) {
  const cellToClone = row.cells[1];

  const clonedCell = cellToClone.cloneNode(true);

  const lastCell = row.cells[row.cells.length - 1];

  row.insertBefore(clonedCell, lastCell);
}
