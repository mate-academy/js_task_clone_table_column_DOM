'use strict';

function cloneColumn(targetTable) {
  // Renamed parameter to avoid shadowing
  const rows = targetTable.querySelectorAll('tr');

  rows.forEach((row) => {
    const cells = row.children;
    const secondCell = cells[1];
    const clonedCell = secondCell.cloneNode(true);
    const lastCell = cells[cells.length - 1];

    row.insertBefore(clonedCell, lastCell);
  });
}

const table = document.querySelector('table');

cloneColumn(table);
