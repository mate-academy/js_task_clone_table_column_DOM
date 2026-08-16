'use strict';

const table = document.querySelector('table');

function duplicateSecondColumn(tableElement) {
  if (!tableElement) {
    return;
  }

  for (const row of tableElement.rows) {
    const secondCell = row.cells[1];
    const lastCell = row.cells[row.cells.length - 1];

    if (secondCell && lastCell) {
      const clonedCell = secondCell.cloneNode(true);

      row.insertBefore(clonedCell, lastCell);
    }
  }
}

duplicateSecondColumn(table);
