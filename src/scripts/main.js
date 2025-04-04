'use strict';

const table = document.querySelector('table');
const tableRows = table.rows;

for (const row of tableRows) {
  const cells = row.cells;
  const clonedCell = cells[1].cloneNode(true);
  const lastCellIndex = cells.length - 1;

  row.insertBefore(clonedCell, cells[lastCellIndex]);
}
