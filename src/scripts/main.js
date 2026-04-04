'use strict';

document.addEventListener('DOMContentLoaded', () => {
  const table = document.querySelector('table');
  const rows = table.querySelectorAll('tr');

  rows.forEach((row) => {
    const cells = row.children;

    if (cells.length > 1) {
      const secondCell = cells[1];
      const clone = secondCell.cloneNode(true);
      const lastCell = cells[cells.length - 1];

      row.insertBefore(clone, lastCell);
    }
  });
});
