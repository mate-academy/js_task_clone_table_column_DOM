'use strict';

const salariesTable = document.querySelector('table');
const tableRows = salariesTable.querySelectorAll('tr');

tableRows.forEach((row) => {
  const secondCell = row.children[1];
  const lastCell = row.lastElementChild;

  if (!secondCell || !lastCell || secondCell === lastCell) {
    return;
  }

  const clonedCell = secondCell.cloneNode(true);

  row.insertBefore(clonedCell, lastCell);
});
