'use strict';

const table = document.querySelector('table');
const rows = table.rows;

for (const row of rows) {
  const cells = row.cells;
  const cloneSecondCell = cells[1].cloneNode(true);

  row.insertBefore(cloneSecondCell, cells[cells.length - 1]);
}
