'use strict';

const table = document.querySelector('table');
const rows = table.rows;

for (const row of rows) {
  row.cells[4].before(row.cells[1].cloneNode(true));
}
