'use strict';

const table = document.querySelector('table');
const rows = table.rows;

for (const row of rows) {
  if (row.cells.length > 1) {
    const cloneCell = row.cells[1].cloneNode(true);

    row.cells[row.cells.length - 1].insertAdjacentElement(
      'beforebegin',
      cloneCell,
    );
  }
}
