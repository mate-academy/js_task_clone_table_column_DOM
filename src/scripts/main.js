'use strict';

const table = document.querySelector('table');
const secondCell = 1;
const fifthCell = 4;

for (const row of table.rows) {
  const clone = row.cells[secondCell].cloneNode(true);

  row.cells[fifthCell].before(clone);
}
