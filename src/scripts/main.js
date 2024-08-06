'use strict';

const rows = document.querySelector('table').rows;

for (const row of rows) {
  const cells = row.cells;

  cells[cells.length - 1].before(cells[1].cloneNode(true));
}
