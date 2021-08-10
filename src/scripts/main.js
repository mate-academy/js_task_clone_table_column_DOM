'use strict';

const table = document.querySelector('table');
const cellIndex = 1;
const cellCopyIndex = 4;

[...table.children].forEach(
  partOfTable => cloneColumn(partOfTable, fromCeil, toCeil)
);

function cloneColumn(tablePart, fromCell, toCell) {
  for (let i = 0; i < [...tablePart.children].length; i++) {
    tablePart.rows[i].cells[toCell]
      .before((tablePart.rows[i].cells[fromCell])
        .cloneNode(true));
  }
}
