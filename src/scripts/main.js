'use strict';

const table = document.querySelector('table');
const rows = table.rows;

for (const row of rows) {
  row.cells[row.cells.length - 1].insertAdjacentElement(
    'beforebegin',
    row.cells[1].cloneNode(true),
  );
}
