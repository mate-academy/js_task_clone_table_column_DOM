'use strict';

// write your code here
const table = document.querySelector('table');

for (const row of table.rows) {
  const newCell = row.cells[1].cloneNode(true);

  row.cells[4].before(newCell);
}
