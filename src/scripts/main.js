'use strict';

const table = document.querySelector('table');

for (const row of table.rows) {
  if (row.length < 2) {
    continue;
  }

  const cells = row.cells;
  const clone = cells[1].cloneNode(true);

  row.insertBefore(clone, cells[cells.length - 1]);
}
