'use strict';

const tableRows = document.querySelector('table').rows;
const cloneIndex = 1;
const insertIndex = 4;

for (const row of tableRows) {
  const clonnedCell = row.children[cloneIndex].cloneNode(true);
  const newCell = row.children[insertIndex];

  newCell.before(clonnedCell);
}
