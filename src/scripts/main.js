'use strict';

// write your code here
const table = document.querySelector('table');
const rows = table.rows;

for (const row of rows) {
  const copyOfColumn = [];

  copyOfColumn.push(row.cells[1]);

  for (const cell of copyOfColumn) {
    row.cells[4].insertAdjacentHTML('beforebegin', cell.outerHTML);
  }
}
