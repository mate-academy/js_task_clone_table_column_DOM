'use strict';

const table = document.querySelector('table');
const rows = table.rows;

for (let i = 0; i < rows.length; i++) {
  const cells = rows[i].cells;
  const positionCells = cells[1];
  const cloneCells = positionCells.cloneNode(true);

  rows[i].insertBefore(cloneCells, cells[cells.length - 1]);
}
