'use strict';

const rows = document.querySelectorAll('tr');

rows.forEach((row) => {
  if (row.cells.length > 1) {
    const tableLine = row.cells[1];
    const newCell = tableLine.cloneNode(true);

    const lastCell = row.cells[row.cells.length - 1];

    if (lastCell) {
      row.insertBefore(newCell, lastCell);
    }
  }
});
