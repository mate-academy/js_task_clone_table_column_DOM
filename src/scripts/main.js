'use strict';

document.addEventListener('DOMContentLoaded', () => {
  const table = document.querySelector('table');
  const rows = table.rows;

  for (let i = 0; i < rows.length; i++) {
    let cells = rows[i].cells;

    let clonedCells = cells[1].cloneNode(true);
    rows[i].insertBefore(clonedCells, cells[cells.length - 1]);
  }
})
