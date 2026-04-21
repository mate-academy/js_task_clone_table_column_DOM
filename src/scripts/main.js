'use strict';

function cloneTableColumn() {
  const table = document.querySelector('table');

  if (!table) {
    return;
  }

  const rows = table.querySelectorAll('tr');

  rows.forEach((row) => {
    const targetCell = row.cells[1];

    if (!targetCell) {
      return;
    }

    const clone = targetCell.cloneNode(true);

    const lastCell = row.cells[row.cells.length - 1];

    row.insertBefore(clone, lastCell || null);
  });
}

cloneTableColumn();
