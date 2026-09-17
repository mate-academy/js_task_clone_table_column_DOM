'use strict';

const table = document.querySelector('table');

for (const row of table.rows) {
  const secondCellCopy = row.cells[1].cloneNode(true);
  const lastCell = row.cells[row.cells.length - 1];

  lastCell.before(secondCellCopy);
}
