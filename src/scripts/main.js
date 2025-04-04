'use strict';

const table = document.querySelector('table');

for (const row of table.rows) {
  const cellsCopy = row.cells[1].cloneNode(true);

  row.cells[row.cells.length - 1].before(cellsCopy);
}
