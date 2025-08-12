'use strict';

// write your code here
const table = document.querySelector('table');

function cloneSecondColumn(section) {
  if (!section) {
    return;
  }

  for (const row of section.rows) {
    const secondCell = row.cells[1].cloneNode(true);
    // second column clone

    row.cells[row.cells.length - 1].before(secondCell);
    // insert before last column
  }
}

cloneSecondColumn(table.tHead);
cloneSecondColumn(table.tBodies[0]);
cloneSecondColumn(table.tFoot);
