'use strict';

const table = document.querySelector('table');
const tableRows = [...table.rows];

tableRows.forEach((row) => {
  if (row.cells.length >= 2) {
    const secondCell = row.cells[1];
    const cloneCell = secondCell.cloneNode(true);

    const insertBeforeCell = row.cells[row.cells.length - 1];

    row.insertBefore(cloneCell, insertBeforeCell);
  }
});
