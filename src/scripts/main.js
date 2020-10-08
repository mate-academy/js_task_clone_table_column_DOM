'use strict';

const table = document.querySelector('table');
const clonePosition = 1;
const clonedPosition = 4;

for (const row of table.rows) {
  row.cells[clonedPosition].before(row.cells[clonePosition].cloneNode(true));
}
