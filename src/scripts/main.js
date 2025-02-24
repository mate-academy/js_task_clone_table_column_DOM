'use strict';

function cloneSecondColumn(tableId) {
  const table = document.querySelector(tableId);

  for (const row of table.rows) {
    const secondCell = row.cells[1];
    const clonedCell = secondCell.cloneNode(true);

    const lastCellIndex = row.cells.length - 1;

    row.insertBefore(clonedCell, row.cells[lastCellIndex]);
  }
}

cloneSecondColumn('table');
