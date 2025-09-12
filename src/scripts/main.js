'use strict';

document.addEventListener('DOMContentLoaded', () => {
  // take a static array of rows
  const rows = Array.from(document.querySelectorAll('table tr'));

  rows.forEach(row => {
    const cells = Array.from(row.cells); // static snapshot

    if (cells.length > 1) {
      const secondCell = cells[1];                // original second cell
      const lastCell = cells[cells.length - 1];   // original last cell
      const clone = secondCell.cloneNode(true);

      row.insertBefore(clone, lastCell);
    }
  });
});
