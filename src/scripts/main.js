'use strict';

document.addEventListener('DOMContentLoaded', () => {
  const table = document.querySelector('table');

  for (const row of table.rows) {
    const cells = row.cells;
    const clone = cells[1].cloneNode(true);
    const insertIndex = cells.length - 1;

    row.insertBefore(clone, cells[insertIndex]);
  }
});
