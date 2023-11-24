'use strict';

const tableElement = document.querySelector('table');

const rows = tableElement.rows;

for (let i = 0; i < rows.length; i++) {
  const cell = rows[i].cells[1];

  const lastCell = rows[i].cells[rows[i].cells.length - 1];

  rows[i].insertBefore(cell.cloneNode(true), lastCell);
}
