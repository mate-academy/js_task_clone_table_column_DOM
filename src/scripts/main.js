'use strict';

const table = document.querySelector('table');
const tableRows = table.rows;

const secondCellIndex = 1;
const lastCellIndex = table.rows[0].cells.length - 1;

function copyCell(copyCellFromIndex, pasteCellBeforeIndex) {
  for (const tableRow of tableRows) {
    tableRow.children[pasteCellBeforeIndex]
      .before(tableRow.children[copyCellFromIndex].cloneNode(true));
  }
}

copyCell(secondCellIndex, lastCellIndex);
