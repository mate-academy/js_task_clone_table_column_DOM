'use strict';

// write your code here
document.addEventListener('DOMContentLoaded', () => {
  const table = document.querySelector('table');
  const rows = table.rows;

  for (let i = 0; i < rows.length; i++) {
    const cells = rows[i].cells;
    const secondColumnCell = cells[1].cloneNode(true);

    rows[i].insertBefore(secondColumnCell, cells[cells.length]);
  }
});
