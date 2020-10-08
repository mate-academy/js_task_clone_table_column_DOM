'use strict';

const table = document.querySelector('table');
const insertIndex = 4;
const columnIndex = 1;

for (const row of table.rows) {
  row.children[insertIndex].before(row.cells[columnIndex].cloneNode(true));
}
