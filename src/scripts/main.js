'use strict';

const table = document.querySelector('table');

const rows = table.rows;

for (const row of rows) {
  const secondCell = row.cells[1];

  const clone = secondCell.cloneNode(true);

  row.cells[row.cells.length - 1].before(clone);
}
