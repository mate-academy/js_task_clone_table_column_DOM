'use strict';

const table = document.querySelector('table');
const rows = table.querySelectorAll('tr');

for (const row of rows) {
  if (row.cells.length < 2) {
    continue;
  }

  const secondCell = row.cells[1];
  const clonedCell = secondCell.cloneNode(true);
  const lastCell = row.cells[row.cells.length - 1];

  row.insertBefore(clonedCell, lastCell);
}
