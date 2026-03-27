'use strict';

const table = document.querySelector('table');

for (let i = 0; i < table.rows.length; i++) {
  const row = table.rows[i];

  const cellToClone = row.cells[1];

  if (cellToClone) {
    const clonedCell = cellToClone.cloneNode(true);
    const lastCell = row.cells[row.cells.length - 1];

    row.insertBefore(clonedCell, lastCell);
  }
}
