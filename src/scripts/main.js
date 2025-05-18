'use strict';

// write your code here

const table = document.querySelector('table');
const indexCopyColumn = 1;

for (const row of table.rows) {
  const cells = row.cells;

  if (indexCopyColumn >= cells.length) {
    continue;
  }

  const ourCell = cells[indexCopyColumn];

  const newCell = ourCell.cloneNode(true);

  if (cells.length >= 1) {
    row.insertBefore(newCell, cells[cells.length - 1]);
  } else {
    row.appendChild(newCell);
  }
}
