'use strict';

const table = document.querySelector('table');

for (const row of table.rows) {
  const cells = row.cells;

  const secondColumnCell = cells[1];

  const clonedCell = secondColumnCell.cloneNode(true);

  row.insertBefore(clonedCell, cells[cells.length - 1]);
}
