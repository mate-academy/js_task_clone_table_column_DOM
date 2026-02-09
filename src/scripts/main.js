'use strict';

const rows = document.querySelectorAll('table tr');

rows.forEach((row) => {
  const cells = row.children;

  if (cells.length > 1) {
    const positionCell = cells[1];

    const clonedCell = positionCell.cloneNode(true);

    const referenceCell = cells[cells.length - 1];

    row.insertBefore(clonedCell, referenceCell);
  }
});
