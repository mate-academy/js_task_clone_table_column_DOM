'use strict';

const table = document.querySelector('table');

for (let i = 0; i < table.rows.length; i++) {
  const row = table.rows[i];
  const clone = row.cells[1].cloneNode(true);
  const position = row.cells[row.cells.length - 1];

  row.insertBefore(clone, position);
}
