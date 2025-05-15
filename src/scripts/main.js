/* eslint-disable no-console */
'use strict';

const rows = document.querySelectorAll('tr');

for (const row of rows) {
  if (row.cells.length >= 5) {
    const rowCell = row.cells[1];
    const clone = rowCell.cloneNode(true);

    row.insertBefore(clone, row.cells[4]);
  }
}
