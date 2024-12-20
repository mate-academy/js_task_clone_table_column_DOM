'use strict';

const table = document.querySelectorAll('table')[0];

const tableRows = table.rows;

for (let i = 0; i < tableRows.length; i++) {
  const cellCopy = tableRows[i].cells[1];
  const cellAfter = tableRows[i].cells[4];
  let newCell = document.createElement('td');

  if (i === 0 || i === tableRows.length - 1) {
    newCell = document.createElement('th');
  }

  newCell.innerText = cellCopy.innerText;

  cellAfter.before(newCell);
}
