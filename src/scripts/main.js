'use strict';

const table = document.querySelector('table');
const rows = table.rows;
const indexFrom = 1;
const indexTo = 3;

for (const row of rows) {
  const copyRow = row.cells[indexFrom].cloneNode(true);

  row.cells[indexTo].after(copyRow);
}
