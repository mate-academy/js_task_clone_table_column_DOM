'use strict';

const table = document.querySelector('table');
const columnIndex = 1;
const newColumnIndex = table.rows[0].cells.length - 1;

for (const row of table.rows) {
  const cell = row.cells[columnIndex];
  const newCell = row.insertCell(newColumnIndex);

  newCell.outerHTML = cell.outerHTML;
}
