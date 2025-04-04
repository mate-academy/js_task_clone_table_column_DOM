'use strict';

const table = document.querySelector('table');

for (let i = 0; i < table.rows.length; i++) {
  const row = table.rows[i];
  const newCell = row.cells[1].cloneNode(true);

  row.cells[row.cells.length - 1].before(newCell);
}
