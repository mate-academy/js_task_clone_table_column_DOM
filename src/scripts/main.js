'use strict';

const table = document.querySelector('table');
const rows = table.rows;

for (let i = 0; i < rows.length; i++) {
  const row = rows[i];
  const cell = row.cells[1];

  const newCell = cell.cloneNode(true);
  const lastCell = row.lastElementChild;

  row.insertBefore(newCell, lastCell);
}
