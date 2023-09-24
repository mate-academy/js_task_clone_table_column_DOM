'use strict';

const table = document.querySelector('table');

for (const row of table.rows) {
  const copy = row.cells[1].cloneNode(true);

  row.cells[4].before(copy);
}
