'use strict';

const table = document.body.firstElementChild;
const rows = table.querySelectorAll('tr');

rows.forEach((row) => {
  const cells = row.children;

  if (cells.length > 1) {
    const secondCell = cells[1];
    const clonedCell = secondCell.cloneNode(true);

    row.insertBefore(clonedCell, cells[cells.length - 1]);
  }
});
