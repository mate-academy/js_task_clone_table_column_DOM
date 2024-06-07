'use strict';

document.addEventListener('DOMContentLoaded', () => {
  const table = document.getElementById('table');

  const rows = table.rows;

  for (let i = 0; i < rows.length; i++) {
    const cells = rows[i].cells;
    const positionCell = cells[1].cloneNode(true);

    rows[i].insertBefore(positionCell, cells[cells.length - 1]);
  }
});
