'use strict';

const rows = document.querySelectorAll('tr');

rows.forEach((row) => {
  const cells = row.children;

  if (cells.length > 1) {
    const secondCell = cells[1];
    const clone = secondCell.cloneNode(true);

    row.insertBefore(clone, cells[cells.length - 1]);
  }
});
