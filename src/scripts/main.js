'use strict';

const table = document.querySelector('table');
const rows = table.rows;

for (const row of rows) {
  const cloned = row.cells[1].cloneNode(true);

  row.insertBefore(cloned, row.children[4]);
}
