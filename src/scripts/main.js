'use strict';

const table = document.querySelector('table');
const copiedColumnIndex = 1;
const pasteIndex = 4;

for (const row of table.rows) {
  const copy = row.cells[copiedColumnIndex];

  row.cells[pasteIndex].before(copy.cloneNode(true));
}
