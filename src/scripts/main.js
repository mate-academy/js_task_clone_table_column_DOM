'use strict';

const table = document.querySelector('table');

for (const row of table.rows) {
  const position = row.cells[1];
  const clone = position.cloneNode(true);

  row.insertBefore(clone, row.cells[row.cells.length - 1]);
}
