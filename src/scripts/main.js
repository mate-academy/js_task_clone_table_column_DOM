'use strict';

const table = document.querySelector('table');

for (const row of table.rows) {
  const copy = row.cells[1].cloneNode(true);
  const pos = row.cells[row.cells.length - 1];

  row.insertBefore(copy, pos);
}
