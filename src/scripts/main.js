'use strict';

// write your code here
document.addEventListener('DOMContentLoaded', () => {
  const table = document.querySelector('table');
  const rows = table.querySelectorAll('tr');

  rows.forEach((row) => {
    const secondCell = row.cells[1];
    const clonedCell = secondCell.cloneNode(true);

    row.insertBefore(clonedCell, row.cells[row.cells.length - 1]);
  });
});
