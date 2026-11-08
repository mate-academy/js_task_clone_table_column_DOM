'use strict';

const table = document.querySelector('table');

for (const row of table.rows) {
  const newTh = row.cells[1].cloneNode(true);
  const lastTh = row.cells[row.cells.length - 1];

  lastTh.before(newTh);
}
