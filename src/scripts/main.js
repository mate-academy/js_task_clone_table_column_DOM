'use strict';

const rows = document.querySelectorAll('tr');

for (const row of rows) {
  const allCells = row.cells;
  const secondCell = allCells[1];
  const lastCell = allCells[allCells.length - 1];
  const copyCell = secondCell.cloneNode(true);

  row.insertBefore(copyCell, lastCell);
}
