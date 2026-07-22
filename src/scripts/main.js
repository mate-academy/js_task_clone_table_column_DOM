'use strict';

const rows = document.getElementsByTagName('tr');

Array.from(rows).forEach((row) => {
  const secondCell = row.cells[1];
  const lastCell = row.cells[row.cells.length - 1];
  const clonedCell = secondCell.cloneNode(true);

  row.insertBefore(clonedCell, lastCell);
});
