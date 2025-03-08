'use strict';

const table = document.querySelector('table');
const tableRows = table.rows;

for (const row of tableRows) {
  const cells = row.cells;
  const positionCell = cells[1];
  const salaryCell = cells[cells.length - 1];

  const positionCellClone = positionCell.cloneNode(true);

  salaryCell.before(positionCellClone);
}
