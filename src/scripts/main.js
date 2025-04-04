'use strict';

const table = document.querySelector('table');
const rows = table.rows;

for (const row of rows) {
  const newCell = row.cells[1].cloneNode(true);
  const lastChild = row.lastElementChild;

  lastChild.before(newCell);
}
