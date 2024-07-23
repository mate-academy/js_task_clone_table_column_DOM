'use strict';

const moveFromIndex = 1;
const moveToIndex = 4;

function moveTableColumn(fromIndex, toIndex) {
  const table = document.querySelector('table');
  const rows = [...table.rows];

  rows.forEach((row, i) => {
    const copyCell = row.cells[fromIndex].cloneNode(true);

    row.insertBefore(copyCell, row.cells[toIndex]);
  });
}

moveTableColumn(moveFromIndex, moveToIndex);
