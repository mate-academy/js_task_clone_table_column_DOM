'use strict';

const table = document.querySelector('table');

for (const row of table.rows) {
  const positionCell = row.cells[1];
  const lastCell = row.cells[row.cells.length - 1];

  const clonedCell = positionCell.cloneNode(true);

  lastCell.before(clonedCell);
}