'use strict';

// write your code here
const table = document.querySelector('table');
const rows = table.rows;

for (let i = 0; i < rows.length; i++) {
  const currentRow = rows[i];

  const targetCell = currentRow.cells[1];
  const lastCell = currentRow.cells[currentRow.cells.length - 1];

  const clone = targetCell.cloneNode(true);

  lastCell.before(clone);
}
