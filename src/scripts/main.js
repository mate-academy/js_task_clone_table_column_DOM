'use strict';

const table = document.querySelector('table');
const rows = table.querySelectorAll('tr');

for (const row of rows) {
  if (row.cells.length < 2) {
    continue;
  }

  const row2 = row.cells[1];
  const clone = row2.cloneNode(true);

  clone.removeAttribute('id');

  const result = row.cells[row.cells.length - 1];

  row.insertBefore(clone, result);
}
