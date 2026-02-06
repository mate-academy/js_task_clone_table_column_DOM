'use strict';

const table = document.querySelector('table');

function cloneSecondColumn(section) {
  const rows = section.rows;

  for (const row of rows) {
    const secondCell = row.cells[1];

    const clonedCell = secondCell.cloneNode(true);

    const lastCell = row.cells[row.cells.length - 1];

    row.insertBefore(clonedCell, lastCell);
  }
}

cloneSecondColumn(table.tHead);
cloneSecondColumn(table.tBodies[0]);
cloneSecondColumn(table.tFoot);
