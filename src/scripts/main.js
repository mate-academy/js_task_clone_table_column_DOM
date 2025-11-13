'use strict';

// write your code here
const table = document.querySelector('table');
const allRows = table.rows;

for (const row of allRows) {
  const copy = row.cells[1].cloneNode(true);

  const element = row.cells[row.cells.length - 1];

  element.before(copy);
}
