'use strict';

const table = document.querySelector('table');
const indexColumn = 1;

for (const row of table.rows) {
  const cellCopy = row.cells[indexColumn].cloneNode(true);

  row.cells[row.cells.length - 1].before(cellCopy);
}
