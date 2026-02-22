'use strict';

const table = document.querySelector('table');

for (const row of table.rows) {
  if (row.cells.length > 1) {
    const clone = row.cells[1].cloneNode(true);
    const lastCell = row.cells[row.cells.length - 1];

    row.insertBefore(clone, lastCell);
  }
}
