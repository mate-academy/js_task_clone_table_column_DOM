'use strict';

const table = document.querySelector('table');
const tableRows = table.rows;

const copyIndex = 1;
const pasteIndex = 4;

for (const tableRow of tableRows) {
  const copiedCell = tableRow.children[copyIndex].cloneNode(true);
  const newCell = tableRow.children[pasteIndex];

  newCell.before(copiedCell);
}
