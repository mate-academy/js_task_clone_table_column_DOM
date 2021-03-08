'use strict';

const table = document.querySelector('table');
const tableRows = table.rows;

function addClonedCell(copyFrom, pasteTo) {
  for (const row of tableRows) {
    const clonedCell = row.children[clonedFrom].cloneNode(true);
    const newCell = row.children[clonedTo];

    newCell.after(clonedCell);
  }
}

const clonedFrom = 1;
const clonedTo = 3;

addClonedCell(clonedFrom, clonedTo);
