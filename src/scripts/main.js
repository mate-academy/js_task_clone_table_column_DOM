'use strict';

const table = document.querySelector('table');

for (let row of table.rows) {
  const cells = row.cells;

  if (cells.length >= 5) {
    const positionCell = cells[1].cloneNode(true);
    row.insertBefore(positionCell, cells[4]);
  }
}

