'use strict';

const table = document.querySelector('table');
const rows = table.rows;

for (const row of rows) {
  const cells = row.cells;
  const cloneCell = cells[1].cloneNode(true);

  cells[cells.length - 1].before(cloneCell);
}
