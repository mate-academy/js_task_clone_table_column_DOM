'use strict';

const table = document.querySelector('table');

const rows = table.rows;

for (let i = 0; i < rows.length; i++) {
  const secondColumn = rows[i].cells[1];

  const clonedCell = secondColumn.cloneNode(true);

  rows[i].insertBefore(clonedCell, rows[i].cells[rows[i].cells.length - 1]);
}
