'use strict';

const table = document.querySelector('table');
const rows = table.rows;

for (const row of rows) {
  const secondCell = row.cells[1];

  if (secondCell) {
    const clone = secondCell.cloneNode(true);

    row.insertBefore(clone, row.cells[row.cells.length - 1]);
  }
}
