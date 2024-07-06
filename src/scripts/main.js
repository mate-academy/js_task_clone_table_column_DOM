'use strict';

const table = document.querySelector('table');

function cloneSecondColumn() {
  const rows = table.rows;

  for (const row of rows) {
    const cells = row.cells;

    if (cells.length > 1) {
      const clonedCell = cells[1].cloneNode(true);

      row.insertBefore(clonedCell, cells[cells.length - 1]);
    }
  }
}

cloneSecondColumn();
