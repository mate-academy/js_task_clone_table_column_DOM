'use strict';

// write your code here
const table = document.querySelector('table');

[...table.rows].forEach((row) => {
  const columnToCopy = row.cells[1];
  const clonedCell = columnToCopy.cloneNode(true);
  const lastCell = row.cells[row.cells.length - 1];

  row.insertBefore(clonedCell, lastCell);
});
