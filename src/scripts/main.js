'use strict';

const rows = document.querySelectorAll('table tr');

rows.forEach((row) => {
  const cells = row.children;

  if (cells.length < 2) {
    return;
  }

  const secondCell = cells[1];
  const clone = secondCell.cloneNode(true);

  row.insertBefore(clone, cells[cells.length - 1]);
});
