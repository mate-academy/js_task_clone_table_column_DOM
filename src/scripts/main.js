'use strict';

const table = document.querySelector('table');

for (const row of table.rows) {
  const cells = row.cells;

  if (cells.length >= 2) {
    const cloned = cells[1].cloneNode(true);

    row.insertBefore(cloned, cells[cells.length - 1]);
  }
}
