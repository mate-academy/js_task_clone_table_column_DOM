'use strict';

// write your code here
const originalTable = document.querySelector('table');
const table = originalTable.cloneNode(true);

const rows = table.querySelectorAll('tr');

rows.forEach((row) => {
  const cells = row.querySelectorAll('th, td');

  if (cells.length >= 1) {
    const firstCell = cells[0];
    const clonedFirstCell = firstCell.cloneNode(true);

    row.appendChild(clonedFirstCell);
  }
});

rows.forEach((row) => {
  const cells = row.querySelectorAll('th, td');

  if (cells.length >= 2) {
    const secondCell = cells[1];
    const clonedCell = secondCell.cloneNode(true);
    const fifthCell = cells[4];

    fifthCell.parentNode.insertBefore(clonedCell, fifthCell);
  }
});

originalTable.parentNode.replaceChild(table, originalTable);
