'use strict';

// write your code here
const table = document.querySelector('table');

function cloneSecondColumn(section) {
  for (const row of section.rows) {
    const secondCell = row.cells[1];

    const clone = secondCell.cloneNode(true);

    row.insertBefore(clone, row.cells[row.cells.length - 1]);
  }
}
cloneSecondColumn(table.tHead);
cloneSecondColumn(table.tBodies[0]);
cloneSecondColumn(table.tFoot);
