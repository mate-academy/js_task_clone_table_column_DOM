'use strict';

const table = document.querySelector('table');
const insertToIndex = 4;
const copyFromIndex = 1;

for (const row of table.rows) {
  row.children[insertToIndex].before(row.cells[copyFromIndex].cloneNode(true));
}
