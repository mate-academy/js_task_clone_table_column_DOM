'use strict';

const rows = document.querySelectorAll('table tr');

rows.forEach((row) => {
  const cells = row.querySelectorAll('th, td');

  if (cells.length >= 2) {
    const clonedCell = cells[1].cloneNode(true);

    const lastCell = cells[cells.length - 1];

    row.insertBefore(clonedCell, lastCell);
  }
});
