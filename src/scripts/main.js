'use strict';

const table = document.querySelector('table');

for (const row of table.rows) {
  const cell = row.cells[1].cloneNode(true);

  row.insertBefore(cell, row.cells[row.cells.length - 1]);
}
