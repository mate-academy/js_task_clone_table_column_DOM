'use strict';

const rows = document.querySelectorAll('table tr');

rows.forEach((row) => {
  const cells = row.children;

  if (cells.length >= 2) {
    const position = cells[1];
    const clonedPosition = position.cloneNode(true);

    const lastCell = cells[cells.length - 1];

    row.insertBefore(clonedPosition, lastCell);
  }
});
