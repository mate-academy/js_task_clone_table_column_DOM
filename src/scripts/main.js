'use strict';

document.addEventListener('DOMContentLoaded', () => {
  const table = document.querySelector('table');

  if (!table) {
    return;
  }

  const rows = table.querySelectorAll('thead tr, tbody tr, tfoot tr');

  rows.forEach((row) => {
    const cells = row.children;

    if (cells.length < 2) {
      return;
    }

    const secondCol = cells[1];
    const clone = secondCol.cloneNode(true);

    const lastCell = cells[cells.length - 1];

    row.insertBefore(clone, lastCell);
  });
});
