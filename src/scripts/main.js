'use strict';

const table = document.querySelector('table');

Array.from(table.rows).forEach((row) => {
  const cell = row.cells[1];
  const copy = cell.cloneNode(true);

  row.insertBefore(copy, row.cells[row.cells.length - 1]);
});
