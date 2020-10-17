'use strict';

const table = document.querySelector('table');
const copy = 1;
const paste = 4;

for (const row of table.rows) {
  const cellCopy = row.cells[copy];

  row.cells[paste].before(cellCopy.cloneNode(true));
}
