'use strict';

const table = document.querySelector('table');

if (!table) {
}

const rows = table.querySelectorAll('tr');

rows.forEach((row) => {
  const cells = row.children;

  if (!cells || cells.length < 2) {
    return;
  }

  const secondCell = cells[1];
  const lastCell = cells[cells.length - 1];

  if (!secondCell || !lastCell) {
    return;
  }

  const clonedCell = secondCell.cloneNode(true);

  row.insertBefore(clonedCell, lastCell);
});
