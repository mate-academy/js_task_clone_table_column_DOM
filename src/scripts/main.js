'use strict';

const table = document.querySelector('table');

function cloneAndInsertColumn(columnIndex) {
  const rows = table.querySelectorAll('tr');

  rows.forEach((row) => {
    const cells = row.children;
    const targetCell = cells[columnIndex];

    if (targetCell) {
      const clonedCell = targetCell.cloneNode(true);

      row.insertBefore(clonedCell, cells[cells.length - 1]);
    }
  });
}

cloneAndInsertColumn(1);
