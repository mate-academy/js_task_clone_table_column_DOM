'use strict';

function cloneColumn() {
  const table = document.querySelector('table');

  if (!table) {
    return;
  }

  for (const row of table.rows) {
    if (row.cells.length > 1) {
      const clone = row.cells[1].cloneNode(true);
      const lastCell = row.cells[row.cells.length - 1];

      row.insertBefore(clone, lastCell);
    }
  }
}

cloneColumn();
