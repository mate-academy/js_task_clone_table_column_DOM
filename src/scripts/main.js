'use strict';

const table = document.querySelector('table');

for (const row of table.rows) {
  const secondCell = row.cells[1];

  const cloneCell = secondCell.cloneNode(true);

  const lastCell = row.cells[row.cells.length - 1];

  lastCell.before(cloneCell);
}
