'use strict';

// write your code here
const table = document.querySelector('table');

function cloneColumn(rows) {
  for (const row of rows) {
    if (row.cells.length < 2) {
      continue;
    }

    const cellToClone = row.cells[1];
    const clone = cellToClone.cloneNode(true);

    const lastCell = row.cells[row.cells.length - 1];

    row.insertBefore(clone, lastCell);
  }
}

if (table.tHead) {
  cloneColumn(table.tHead.rows);
}

for (const tBody of table.tBodies) {
  cloneColumn(tBody.rows);
}

if (table.tFoot) {
  cloneColumn(table.tFoot.rows);
}
