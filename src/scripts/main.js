'use strict';

const thead = document.querySelector('thead tr');
const theadCells = thead.children;
const clonedTheadCell = theadCells[1].cloneNode(true);

thead.insertBefore(clonedTheadCell, theadCells[theadCells.length - 1]);

const tbodyRows = document.querySelectorAll('tbody tr');

tbodyRows.forEach((row) => {
  const cells = row.children;
  const clonedCells = cells[1].cloneNode(true);

  row.insertBefore(clonedCells, cells[cells.length - 1]);
});

const tfoot = document.querySelector('tfoot tr');
const tfootCells = tfoot.children;
const clonedTfootCell = tfootCells[1].cloneNode(1);

tfoot.insertBefore(clonedTfootCell, tfootCells[tfootCells.length - 1]);
