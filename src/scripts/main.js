'use strict';

const table = document.querySelector('table');
const rows = table.rows;

for (const row of rows) {
  const columnToInsert = row.cells[1].cloneNode(true);

  row.cells[4].before(columnToInsert);
}
