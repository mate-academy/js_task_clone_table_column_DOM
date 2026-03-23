'use strict';

const table = document.querySelector('table');
const rows = table.rows;

for (const row of rows) {
  const cells = row.cells;

  if (cells.length > 1) {
    const secondCell = cells[1];
    const clone = secondCell.cloneNode(true);

    row.insertBefore(clone, cells[cells.length - 1]);
  }
}
