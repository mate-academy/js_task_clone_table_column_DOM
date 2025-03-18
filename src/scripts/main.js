'use strict';

function cloneColumn() {
  const table = document.querySelector('table');
  const rowClollection = table.rows;

  for (let i = 0; i < rowClollection.length; i++) {
    const cellsOfRow = rowClollection[i].cells;
    const secondCell = rowClollection[i].cells[1];
    const lastCell = cellsOfRow[cellsOfRow.length - 1];
    const secondCellClone = secondCell.cloneNode(true);

    lastCell.before(secondCellClone);
  }
}

cloneColumn();
// write your code here
