'use strict';

const table = document.querySelector('table');
const indexOfCopiedColumn = 1;
const indexOfInsertedColumn = 4;
let count = 0;

for (const row of table.rows) {
  const cell = table.rows[count].cells[indexOfCopiedColumn];

  row.insertBefore(cell.cloneNode(true), row.children[indexOfInsertedColumn]);
  count++;
}
