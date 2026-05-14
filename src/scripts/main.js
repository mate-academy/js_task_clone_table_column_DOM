'use strict';

function cloneTableColumn() {
  const table = document.querySelector('table');
  const rows = document.querySelectorAll('tr');

  if(!table || !rows) return;

  for(const row of rows) {
    const lastCell = row.cells[row.cells.length - 1];
    const clonedCell = row.cells[1].cloneNode(true);
    row.insertBefore(clonedCell, lastCell);
  }
}

cloneTableColumn();
