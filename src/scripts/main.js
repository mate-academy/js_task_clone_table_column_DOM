'use strict';

const tableRows = document.querySelector('table').rows;

for (let i = 0; i < tableRows.length; i++) {
  const clonedCell = tableRows[i].cells[1];
  const lastCell = tableRows[i].cells[4];

  lastCell.before(clonedCell.cloneNode(true));
}
