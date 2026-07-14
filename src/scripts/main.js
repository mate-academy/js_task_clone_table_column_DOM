'use strict';

// write your code here
const originalTable = document.querySelector('table');
const table = originalTable.cloneNode(true);

const rows = table.querySelectorAll('tr');

rows.forEach((row) => {
  const cells = row.querySelectorAll('th, td');

  if (cells.length >= 2) {
    const secondCell = cells[1];
    const clonedCell = secondCell.cloneNode(true);
    const lastCell = cells[cells.length - 1];

    lastCell.parentNode.insertBefore(clonedCell, lastCell);
  }
});

originalTable.parentNode.replaceChild(table, originalTable);
