'use strict';

// write your code here
const table = document.querySelector('table');

for (const row of [...table.rows]) {
  const copyCell = row.cells[1];

  row.insertBefore(copyCell.cloneNode(true), row.cells[4]);
}
