'use strict';

const table = document.querySelector('table');
const columnIndexFrom = 1;
const columnIndexTo = 4;
let count = 0;

for (const row of table.rows) {
  const i = table.rows[count].cells[columnIndexFrom];

  row.insertBefore(i.cloneNode(true), row.children[columnIndexTo]);
  count++;
}
