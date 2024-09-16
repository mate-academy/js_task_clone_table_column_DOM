'use strict';

const table = document.querySelector('table');

for (const row of table.rows) {
  const cellSecond = row.cells[1];
  const cellLast = row.cells[row.cells.length - 1];

  cellLast.before(cellSecond.cloneNode(true));
};
