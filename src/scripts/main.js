'use strict';

const table = document.querySelector('table');

const rows = table.rows;
const cellsLength = rows[0].children.length - 1;

for (const row of rows) {
  const copiedCell = row.cells[1];
  const lastCell = row.cells[cellsLength];

  row.insertBefore(copiedCell.cloneNode(true), lastCell);
}
