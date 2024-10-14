'use strict';

const table = document.querySelector('table');

const rows = Array.from(table.rows);

rows.forEach(row => {
  if (row.cells.length > 1) {
    const secondCell = row.cells[1];
    if (secondCell) {
      const clonedCell = secondCell.cloneNode(true);
      if (row.cells.length > 2) {
        const lastCell = row.cells[row.cells.length - 1];
        if (lastCell) {
          row.insertBefore(clonedCell, lastCell);
        } else {
          row.appendChild(clonedCell);
        }
      } else {
        row.appendChild(clonedCell);
      }
    }
  }
});
