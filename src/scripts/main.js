'use strict';

const rows = document.querySelectorAll('tr');

rows.forEach((row) => {
  const cell = row.cells[1];
  const clone = cell.cloneNode(true);
  const lastCell = row.cells[row.cells.length - 1];

  row.insertBefore(clone, lastCell);
});
