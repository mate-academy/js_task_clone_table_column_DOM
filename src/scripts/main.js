'use strict';

const tableRows = document.querySelector('table').rows;
const clonedColumnIndex = 1;
const lastColumnIndex = 4;

for (let i = 0; i < tableRows.length; i++) {
  const clonedCell = tableRows[i].cells[clonedColumnIndex];
  const lastCell = tableRows[i].cells[lastColumnIndex];

  lastCell.before(clonedCell.cloneNode(true));
}
