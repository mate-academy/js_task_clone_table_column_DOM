'use strict';

const table = document.querySelector('table');
const fromCeil = 1;
const toCeil = 4;

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
