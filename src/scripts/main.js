'use strict';

function cloneColumn() {
  const rows = document.querySelectorAll('tr');

  for (let i = 0; i < rows.length; i++) {
    const cell = rows[i].cells[1];
    const cellCopy = cell.cloneNode(true);

    rows[i].insertBefore(cellCopy, rows[i].cells[4]);
  }
}

cloneColumn();
