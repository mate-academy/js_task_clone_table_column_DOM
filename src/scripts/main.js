'use strict';

const rows = document.querySelectorAll('tr');

rows.forEach((row) => {
  const cells = row.querySelectorAll('th, td');
  const secondCell = cells[1];
  const clonedCell = secondCell.cloneNode(true);
  const lastCell = cells[cells.length - 1];

  row.insertBefore(clonedCell, lastCell);
});
