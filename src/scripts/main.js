'use strict';

// write your code here
const rows = document.querySelectorAll('tr');

rows.forEach((row) => {
  const cells = row.children;

  if (cells.length > 1) {
    const secondCell = cells[1];
    const cloneCell = secondCell.cloneNode(true);
    const lastCell = cells[cells.length - 1];

    row.insertBefore(cloneCell, lastCell);
  }
});
