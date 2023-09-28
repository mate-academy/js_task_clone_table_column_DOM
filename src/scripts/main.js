'use strict';

const table = document.querySelector('table');

for (const row of table.rows) {
  const copyCells = row.cells[1].cloneNode(true);

  row.cells[4].before(copyCells);
}
