'use strict';

const rows = document.querySelectorAll('tr');

rows.forEach((row) => {
  const secondCell = row.cells[1];
  const cloneCell = secondCell.cloneNode(true);

  row.insertBefore(cloneCell, row.cells[row.cells.length - 1]);
});
