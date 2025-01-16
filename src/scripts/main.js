'use strict';

// write your code here
document.addEventListener('DOMContentLoaded', () => {
  const table = document.querySelector('table');

  if (table) {
    const rows = table.rows;

    for (const row of rows) {
      const cells = row.cells;

      if (cells.length > 1) {
        const secondCell = cells[1].cloneNode(true);

        const lastCellIndex = cells.length - 1;

        row.insertBefore(secondCell, cells[lastCellIndex]);
      }
    }
  }
});
