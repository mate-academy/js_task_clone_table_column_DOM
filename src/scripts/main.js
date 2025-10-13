'use strict';

// write your code here
document.addEventListener('DOMContentLoaded', () => {
  const table = document.querySelector('table');

  if (!table) {
    return;
  }

  table.querySelectorAll('thead, tbody, tfoot').forEach((section) => {
    section.querySelectorAll('tr').forEach((row) => {
      if (row.cells.length < 2) {
        return;
      }

      const secondCell = row.cells[1];
      const clonedCell = secondCell.cloneNode(true);
      const referenceCell = row.cells[row.cells.length - 1];

      row.insertBefore(clonedCell, referenceCell);
    });
  });
});
