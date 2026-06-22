'use strict';

const table = document.querySelector('table');
const rows = table.rows;

for (const row of rows) {
  const copiedCell = row.cells[1].cloneNode(true);
  const lastCell = row.cells[row.cells.length - 1];

  lastCell.before(copiedCell);
}
