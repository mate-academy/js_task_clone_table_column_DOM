'use strict';

// write your code here
function cloneAndInsertColumn() {
  const table = document.querySelector('table');
  const rows = table.rows;

  for (const row of rows) {
    const cells = row.cells;

    if (cells.length > 1) {
      const clonnedCell = cells[1].cloneNode(true);

      row.insertBefore(clonnedCell, cells[cells.length - 1]);
    }
  }
}

cloneAndInsertColumn();
