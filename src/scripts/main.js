'use strict';

const table = document.querySelector('table');
const tableRows = table.rows;

const secondCell = 1;
const lastCell = table.rows[0].cells.length - 1;

function copyCell(copyCellFrom, pasteCellTo) {
  for (const tableRow of tableRows) {
    tableRow.children[pasteCellTo]
      .before(tableRow.children[copyCellFrom].cloneNode(true));
  }
}

copyCell(secondCell, lastCell);
