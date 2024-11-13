'use strict';

// write your code here

function formatCells(partOfTable) {
  const rows = [...document.querySelector(partOfTable).rows];

  if (rows.length <= 0) {
    return;
  }

  for (const row of rows) {
    const clonedCell = row.cells[1].cloneNode(true);

    row.insertBefore(clonedCell, row.cells[row.cells.length - 1]);
  }
}

formatCells('thead');
formatCells('tbody');
formatCells('tfoot');
