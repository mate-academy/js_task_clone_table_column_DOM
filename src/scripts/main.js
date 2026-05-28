'use strict';

// write your code here

const table = document.querySelector('table');
const rows = Array.from(table.rows);

rows.forEach((row) => {
  const clonedCell = row.cells[1].cloneNode(true);

  const lastRowCell = row.cells[4];

  row.insertBefore(clonedCell, lastRowCell);
});
