'use strict';

const table = document.querySelector('table');

for (const row of table.rows) {
  const cells = row.cells;

  if (cells.length < 2) {
    continue;
  }

  const rowSecons = cells[1].cloneNode(true);

  const rowF = cells[cells.length - 1];

  row.insertBefore(rowSecons, rowF);
}
