'use strict';

const tableElement = document.querySelector('table');

const columnIndex = 1;

for (const row of tableElement.rows) {
  const cell = row.cells[columnIndex];

  if (cell) {
    const cloneCell = cell.cloneNode(true);
    const lastCell = row.cells[row.cells.length - 1];

    row.insertBefore(cloneCell, lastCell);
  }
}
