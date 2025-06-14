'use strict';

function moveColumns() {
  const table = document.querySelector('table');
  const rows = table.rows;

  for (let i = 0; i < rows.length; i++) {
    const row = rows[i];
    const insertionElement = row.cells[1];
    const insertionElementCopy = insertionElement.cloneNode(true);

    row.insertBefore(insertionElementCopy, row.cells[row.cells.length - 1]);
  }
}

moveColumns();
