'use strict';

// write your code here
const table = document.querySelector('table');
const rows = Array.from(table.rows);

rows.forEach((row) => {
  const secondColumn = row.cells[1];
  const copySecondColumn = secondColumn.cloneNode(true);
  const lastColumn = row.cells[row.cells.length - 1];

  lastColumn.before(copySecondColumn);
});
