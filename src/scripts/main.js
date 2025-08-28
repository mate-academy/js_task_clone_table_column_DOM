'use strict';

// write your code here

const table = document.querySelector('table');

for (const row of table.rows) {
  if (row.cells.length < 2) {
    continue;
  }

  const clone = row.cells[1].cloneNode(true);

  row.insertBefore(clone, row.lastElementChild);
}
