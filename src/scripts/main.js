'use strict';

const rows = document.querySelectorAll('tr');

function getCloneColumn(list) {
  list.forEach((row) => {
    const secondCell = row.cells[1];
    const lastCell = row.cells[row.cells.length - 1];
    const cellClone = secondCell.cloneNode(true);

    row.insertBefore(cellClone, lastCell);
  });
}

getCloneColumn(rows);
