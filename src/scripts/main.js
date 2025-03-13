'use strict';

document.addEventListener('DOMContentLoaded', () => {
  const table = document.querySelector('table');

  if (!table) {
    return;
  }

  const rows = table.rows;

  for (const row of rows) {
    const clonedCell = row.cells[1].cloneNode(true);

    row.insertBefore(clonedCell, row.cells[row.cells.length - 1]);
  }
});
