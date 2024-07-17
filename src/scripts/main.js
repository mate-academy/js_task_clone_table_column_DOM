'use strict';

const table = document.querySelector('table');

for (const row of table.rows) {
  row.cells[row.cells.length - 1].insertAdjacentHTML(
    'beforebegin',
    row.cells[1].outerHTML,
  );
}
