'use strict';

const targetIndex = document.querySelector('thead').rows[0].cells.length - 1;
const cellHeader = document.querySelector('thead').rows[0];
const positionCellHeader = document
  .querySelector('thead')
  .rows[0].cells[1].cloneNode(true);

const cellBody = document.querySelector('tbody').rows;

for (let i = 0; i < cellBody.length; i++) {
  const copyCell = cellBody[i].cells[1].cloneNode(true);

  cellBody[i].insertBefore(copyCell, cellBody[i].cells[targetIndex]);
}

const cellFoot = document.querySelector('tfoot').rows[0];
const positionCellFoot = document
  .querySelector('tfoot')
  .rows[0].cells[1].cloneNode(true);

cellHeader.insertBefore(positionCellHeader, cellHeader.cells[targetIndex]);
cellFoot.insertBefore(positionCellFoot, cellFoot.cells[targetIndex]);
