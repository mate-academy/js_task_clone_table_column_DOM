'use strict';

const table = document.querySelector('table');

for (const row of table.rows) {
  const clonedCell = row.cells[1].cloneNode(true);

  row.insertBefore(clonedCell, row.cells[row.cells.length - 1]);
}
