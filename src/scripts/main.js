'use strict';

const tableRows = document.querySelector('table').rows;

for (let i = 0; i < tableRows.length; i++) {
  const cell = tableRows[i].cells[1];
  const lastColumn = tableRows[i].cells[tableRows[i].cells.length - 1];

  tableRows[i].insertBefore(cell.cloneNode(true), lastColumn);
}
