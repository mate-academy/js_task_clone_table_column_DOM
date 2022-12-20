'use strict';

const table = document.querySelector('table');

for (const row of table.rows) {
  row.cells[4].before(row.cells[1].cloneNode(true));
}