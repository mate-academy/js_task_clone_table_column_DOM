'use strict';

const table = document.querySelector('table');

for (const row of table.rows) {
  const clonnedCell = row.cells[1].cloneNode(true);
  const lastCell = row.cells[row.cells.length - 1];

  row.insertBefore(clonnedCell, lastCell);
}
