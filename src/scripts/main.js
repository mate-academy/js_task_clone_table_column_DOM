'use strict';

const table = document.querySelector('table');

const tableHeadRows = table.tHead.rows;
const tableBodies = table.tBodies;
const tableFooterRows = table.tFoot.rows;

for (const row of tableHeadRows) {
  copyCellBeforeLastCell(row, 1);
}

for (const body of tableBodies) {
  const bodyRows = body.rows;

  for (const row of bodyRows) {
    copyCellBeforeLastCell(row, 1);
  }
}

for (const row of tableFooterRows) {
  copyCellBeforeLastCell(row, 1);
}

function copyCellBeforeLastCell(row, cellIndex = 1) {
  const cells = row.cells;

  if (cells.length > 1) {
    const cellCopy = cells[cellIndex].cloneNode(true);

    cellCopy.removeAttribute('id');

    cells[cells.length - 1].before(cellCopy);
  }
}
