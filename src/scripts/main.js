'use strict';

const table = document.querySelector('table');

for (const row of table.rows) {
  const cells = row.cells;

  const secondColumnCell = cells[1];

  const clonedCell = secondColumnCell.cloneNode(true);

  const lastCell = cells[cells.length - 1];

  row.insertBefore(clonedCell, lastCell);
}
