'use strict';

const table = document.querySelector('table');
const columnIndexFrom = 1;
const columnIndexTo = 4;
let count = 0;

for (const row of table.rows) {
  const cell = table.rows[count].cells[columnIndexFrom];

  row.insertBefore(cell.cloneNode(true), row.children[columnIndexTo]);
  count++;
}
