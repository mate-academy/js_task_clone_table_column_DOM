'use strict';

const table = document.querySelector('table');

for (const row of table.rows) {
  const cellClone = row.cells[1].cloneNode(true);

  row.insertBefore(cellClone, row.cells[row.cells.length - 1]);
}
