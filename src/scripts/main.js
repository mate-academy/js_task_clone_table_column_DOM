'use strict';

const table = document.querySelector('table');

const rows = table.rows;
const cellFromIndex = 1;
const cellToIndex = rows[0].cells.length - 1;

for (let i = 0; i < rows.length; i++) {
  const td = rows[i].cells[cellFromIndex];
  const clonedTd = td.cloneNode(true);

  rows[i].insertBefore(clonedTd, rows[i].cells[cellToIndex]);
}
