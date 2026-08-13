'use strict';

// write your code here
const table = document.querySelector('table');

for (const row of table.rows) {
  const secondCell = row.cells[1];
  const clonedCell = secondCell.cloneNode(true);

  row.insertBefore(clonedCell, row.lastElementChild);
}
