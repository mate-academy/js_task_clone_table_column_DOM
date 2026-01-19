'use strict';
const table = document.querySelector('table');
table.setAttribute('id', 'table-cloner');

function cloneTableColumn (tableId, cellIndex) {
  const rows = document.querySelectorAll(`#${tableId} tr`);
  for (const row of rows) {
    let cell = row.cells[cellIndex];
    if (cell) {
      const clonedCell = cell.cloneNode(true);
      row.insertBefore(clonedCell, row.lastElementChild);
    }
  }
}

cloneTableColumn('table-cloner', 1);
