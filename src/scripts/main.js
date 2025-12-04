'use strict';

const rows = document.querySelectorAll('tr');

rows.forEach((row) => {
  const secondCell = row.cells[1];
  const lastCell = row.cells[row.cells.length - 1];

  if (!secondCell || !lastCell) {
    return;
  }

  const cloneCell = secondCell.cloneNode(true);

  row.insertBefore(cloneCell, lastCell);
});
