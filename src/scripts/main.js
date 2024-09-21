'use strict';

// write code
const table = document.querySelector('table');

const theadRow = table.querySelector('thead tr');
const tbodyRows = table.querySelectorAll('tbody tr');
const tfootRow = table.querySelector('tfoot tr');

function cloneAndAppendSecondColumn(row) {
  const secondCell = row.children[1];
  const lastCell = row.lastElementChild;
  const clonedCell = secondCell.cloneNode(true);

  row.insertBefore(clonedCell, lastCell);
}

cloneAndAppendSecondColumn(theadRow);

tbodyRows.forEach((row) => {
  cloneAndAppendSecondColumn(row);
});

cloneAndAppendSecondColumn(tfootRow);
