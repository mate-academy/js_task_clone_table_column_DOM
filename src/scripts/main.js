'use strict';

// const tBody = document.querySelector('tbody');
const tableRows = document.querySelectorAll('tr');

tableRows.forEach((row) => {
  const lastCellIndex = row.children.length - 1;
  const targetCell = row.children[1];
  const clonedCell = targetCell.cloneNode(true);

  row.children[lastCellIndex].before(clonedCell);
});
