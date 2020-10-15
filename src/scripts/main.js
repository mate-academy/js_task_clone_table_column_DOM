'use strict';

const table = document.querySelector('table');
const copiedColumnIndex = 1;
const pasteIndex = 4;

for (const row of table.rows) {
  const cellCopy = row.cells[copiedColumnIndex];

  row.cells[pasteIndex].before(cellCopy.cloneNode(true));
}
