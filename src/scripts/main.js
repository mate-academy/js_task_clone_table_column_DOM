'use strict';

document.addEventListener('DOMContentLoaded', () => {
  const table = document.querySelector('table');
  const rows = table.querySelectorAll('thead tr, tbody tr, tfoot tr');

  rows.forEach((row) => {
    const cells = Array.from(row.children);
    const secondCell = cells[1];
    const clonedCell = secondCell.cloneNode(true);

    row.insertBefore(clonedCell, cells[cells.length - 1]);
  });
});
