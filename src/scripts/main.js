'use strict';

const rows = document.querySelectorAll('tr');

rows.forEach((row) => {
  const cells = row.children;

  if (cells.length >= 2) {
    const secondCell = cells[1];
    const lastCell = cells[cells.length - 1];

    const clonedCell = secondCell.cloneNode(true);

    row.insertBefore(clonedCell, lastCell);
  }
});
