'use strict';

const table = document.querySelector('table');

const SOURCE_INDEX = 1;

[...table.rows].forEach((row) => {
  const copy = row.cells[SOURCE_INDEX].cloneNode(true);
  const lastCell = row.cells[row.cells.length - 1];

  row.insertBefore(copy, lastCell);
});
