'use strict';

function copyColumn(copyIndex, pastIndex) {
  for (let i = 0; i < tRows.length; i++) {
    const currentRow = tRows[i];
    const sourceCell = currentRow.cells[copyIndex];
    let newCell;

    if (i === 0 || i === tRows.length - 1) {
      newCell = document.createElement('th');
    } else {
      newCell = document.createElement('td');
    }

    newCell.innerHTML = sourceCell.innerHTML;

    currentRow.insertBefore(newCell, currentRow.cells[pastIndex]);
  }
}

const table = document.querySelector('table');
const tRows = table.rows;

copyColumn(1, 4);
