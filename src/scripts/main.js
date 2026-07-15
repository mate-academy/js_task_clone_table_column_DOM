'use strict';

// const tBody = document.querySelector('tbody');
const tableRows = document.querySelectorAll('tr');

tableRows.forEach((row) => {
  // move first cells to the end of the table

  // const firstCell = row.children[0];
  // const clonedFirstCell = firstCell.cloneNode(true);

  // row.append(clonedFirstCell);

  const targetCell = row.children[1];
  const clonedCell = targetCell.cloneNode(true);
  const cellIndex = row.children[4];

  cellIndex.before(clonedCell);
});
