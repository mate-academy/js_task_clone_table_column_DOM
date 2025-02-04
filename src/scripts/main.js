'use strict';

const table = document.querySelector('table');

function clone(indexClone, insertIndex) {
  const rows = table.rows;

  for (const row of rows) {
    const cellClone = row.cells[indexClone];

    if (!cellClone) {
      continue;
    }

    const cloneCell = cellClone.cloneNode(true);

    row.insertBefore(cloneCell, row.cells[insertIndex]);
  }
}

clone(1, 4);
