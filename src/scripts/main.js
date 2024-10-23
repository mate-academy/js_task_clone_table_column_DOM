'use strict';

const table = document.querySelector('table');
const rows = table.rows;

for (const row of rows) {
  const copedColumn = row.cells[1].cloneNode(true);

  row.lastElementChild.before(copedColumn);
}
