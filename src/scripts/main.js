'use strict';

const table = document.querySelector('table');

for (let i = 0; i < table.tHead.rows.length; i++) {
  const rowHead = table.tHead.rows[i];

  if (rowHead.cells.length > 1) {
    const secondCell = rowHead.cells[1];

    const lastCell = rowHead.cells[rowHead.cells.length - 1];

    const cellClone = secondCell.cloneNode(true);

    rowHead.insertBefore(cellClone, lastCell);
  }
}

for (let i = 0; i < table.tBodies[0].rows.length; i++) {
  const rowBodies = table.tBodies[0].rows[i];

  if (rowBodies.cells.length > 1) {
    const secondCell = rowBodies.cells[1];

    const lastCell = rowBodies.cells[rowBodies.cells.length - 1];

    const cellClone = secondCell.cloneNode(true);

    rowBodies.insertBefore(cellClone, lastCell);
  }
}

for (let i = 0; i < table.tFoot.rows.length; i++) {
  const rowFoot = table.tFoot.rows[i];

  if (rowFoot.cells.length > 1) {
    const secondCell = rowFoot.cells[1];

    const lastCell = rowFoot.cells[rowFoot.cells.length - 1];

    const cellClone = secondCell.cloneNode(true);

    rowFoot.insertBefore(cellClone, lastCell);
  }
}
