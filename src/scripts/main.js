'use strict';

const tableElement = document.querySelector('table');

[...tableElement.rows].forEach((row) => {
  const cellCopy = row.cells[1].cloneNode(true);

  row.insertBefore(cellCopy, row.cells[row.cells.length - 1]);
});
