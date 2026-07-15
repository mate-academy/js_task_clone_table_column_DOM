'use strict';

// const tBody = document.querySelector('tbody');
const tableRows = document.querySelectorAll('tr');

tableRows.forEach((row) => {
  const targetCell = row.children[1];
  const clonedCell = targetCell.cloneNode(true);
  const cellIndex = row.children[4];

  cellIndex.before(clonedCell);
});
