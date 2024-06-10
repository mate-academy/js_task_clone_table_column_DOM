'use strict';

const table = document.querySelector('table');
const rows = table.rows;

for (let i = 0; i < rows.length; i++) {
  const cells = rows[i].cells;
  const positionCell = cells[1];
  const clonedPositionCell = positionCell.cloneNode(true);

  rows[i].insertBefore(clonedPositionCell, cells[cells.length - 1]);
}
