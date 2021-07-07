'use strict';

const table = document.querySelector('table');
const columnIndexToCopy = 1;
const columnIndexToInsert = 4;

for (const row of table.rows) {
  const cellCopy = row.cells[columnIndexToCopy];

  row.cells[columnIndexToInsert].before(cellCopy.cloneNode(true));
}
