'use strict';

// write your code here
const table = document.querySelector('table');

function cloneColumn(section) {
  for (const row of section.rows) {
    const secondCell = row.cells[1];

    const clone = secondCell.cloneNode(true);

    row.insertBefore(clone, row.cells[row.cells.length - 1]);
  }
}

cloneColumn(table.tHead);
cloneColumn(table.tBodies[0]);
cloneColumn(table.tFoot);
