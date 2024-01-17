'use strict';

const tableRows = document.querySelector('table').rows;

[...tableRows].forEach(row => {
  const cellCopy = row.cells[1].cloneNode(true);
  const cellLast = row.cells[row.cells.length - 1];

  cellLast.before(cellCopy);
});
