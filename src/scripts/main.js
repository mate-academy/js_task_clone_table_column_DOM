'use strict';

const table = document.querySelector('table');

for (const row of table.rows) {
  const rowCloned = row.cells[1].cloneNode(true);

  row.insertBefore(rowCloned, row.cells[row.cells.length - 1]);
}
