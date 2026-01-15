'use strict';

const table = document.querySelector('table');
const rows = table.rows;

for (const row of rows) {
  const cells = row.cells;
  const secondCell = cells[1];

  const clonedCell = secondCell.cloneNode(true);

  row.insertBefore(clonedCell, cells[cells.length - 1]);
}
