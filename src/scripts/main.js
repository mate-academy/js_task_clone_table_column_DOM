'use strict';

const table = document.querySelector('table');

function cloneSecondCell(rows) {
  rows.forEach((tr) => {
    if (tr.cells.length < 2) {
      return;
    }

    const secondCell = tr.cells[1];
    const lastCell = tr.cells[tr.cells.length - 1];
    const clone = secondCell.cloneNode(true);

    tr.insertBefore(clone, lastCell);
  });
}

const allRows = [];

if (table.tHead) {
  allRows.push(...table.tHead.rows);
}

for (const tbody of table.tBodies) {
  allRows.push(...tbody.rows);
}

if (table.tFoot) {
  allRows.push(...table.tFoot.rows);
}

cloneSecondCell(allRows);
