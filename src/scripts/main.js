'use strict';

const table = document.querySelector('table');

for (const row of table.rows) {
  const newCell = row.cells[1].cloneNode(true);

  row.lastElementChild.before(newCell);
}
