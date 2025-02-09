'use strict';

function copyColumn(colIndex) {
  const table = document.querySelector('table');

  for (const row of table.rows) {
    if (colIndex < row.cells.length) {
      const cell = row.cells[colIndex].cloneNode(true);
      const lastCell = row.cells[row.cells.length - 1];

      row.insertBefore(cell, lastCell);
    }
  }
}

copyColumn(1);
