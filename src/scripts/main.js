'use strict';

const rows = document.querySelectorAll('tr');

rows.forEach((row) => {
  const cells = row.children;
  const secondCell = cells[1];

  if (secondCell) {
    const clonedCell = secondCell.cloneNode(true);
    const lastCell = row.lastElementChild;

    row.insertBefore(clonedCell, lastCell);
  }
});
