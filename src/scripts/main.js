'use strict';

const table = document.querySelector('table');

function addColumn(tb) {
  if (!tb) {
    return;
  }

  for (const row of tb.rows) {
    const sourseCell = row.cells[1];

    if (!sourseCell) {
      continue;
    }

    const newCell = sourseCell.cloneNode(true);
    const lastCell = row.cells[row.cells.length - 1];

    row.insertBefore(newCell, lastCell);
  }
}

addColumn(table);
