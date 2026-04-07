'use strict';

const table = document.querySelector('table');
const rows = table.rows;

for (const row of rows) {
  const second = row.cells[1];
  const clone = second.cloneNode(true);
  const last = row.cells[row.cells.length - 1];

  last.before(clone);
}
