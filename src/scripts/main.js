'use strict';

const table = document.querySelector('table');

for (const row of table.rows) {
  const tableRowCopy = row.cells[1].cloneNode(true);

  row.insertBefore(tableRowCopy, row.cells[row.cells.length - 1]);
}
