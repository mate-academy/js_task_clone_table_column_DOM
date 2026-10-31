'use strict';

const table = document.querySelector('table');
const rows = table.rows;

for (const row of rows) {
  const clonedCell = row.cells[1].cloneNode(true);
  const lastCell = row.lastElementChild;

  row.insertBefore(clonedCell, lastCell);
}
