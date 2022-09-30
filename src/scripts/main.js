'use strict';

const rows = document.querySelector('table').rows;

for (const row of rows) {
  row.cells[4].before(row.cells[1].cloneNode(true));
}
