'use strict';

const table = document.querySelector('table');
const rows = table.rows;

for (let i = 0; i < rows.length; i++) {
  const row = rows[i];
  const secondCell = row.cells[1];
  const lastCell = row.cells[row.cells.length - 1];
  const newCell = document.createElement('td');

  newCell.textContent = secondCell.textContent;
  row.insertBefore(newCell, lastCell);
}
