'use strict';

const table = document.querySelector('table');
const indexCopy = 1;
const indexPaste = 4;

for (const row of table.rows) {
  const cellCopy = row.cells[indexCopy];

  row.cells[indexPaste].before(cellCopy.cloneNode(true));
}
