'use strict';

const table = document.querySelector('table');
const rows = table.rows;

for (const row of rows) {
  const secondCell = row.cells[1];
  const lastCell = row.cells[row.cells.length - 1];

  const clonedCell = secondCell.cloneNode(true);

  row.insertBefore(clonedCell, lastCell);
}
