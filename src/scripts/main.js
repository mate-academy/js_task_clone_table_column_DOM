'use strict';

// write your code here

const table = document.querySelector('table');
const rows = table.rows;

for (const row of rows) {
  const cloneCell = row.cells[1].cloneNode(true);

  row.insertBefore(cloneCell, row.children[4]);
}
