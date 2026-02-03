'use strict';

const list = document.querySelectorAll('tr');

list.forEach((row) => {
  const cells = row.cells;
  const targetCell = cells[1];
  const clonedCell = targetCell.cloneNode(true);
  const lastCell = cells[cells.length - 1];

  row.append(clonedCell, lastCell);
});
