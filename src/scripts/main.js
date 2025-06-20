'use strict';

const table = document.querySelector('table');

for (const row of table.rows) {
  const secondCell = row.cells[1].cloneNode(true);

  row.insertBefore(secondCell, row.cells[row.cells.length - 1]);
}
