'use strict';

const table = document.querySelector('table');
const rowsCount = table.rows.length;
const colsCount = table.rows[0].cells.length;

for (let i = 0; i < rowsCount; i++) {
  table.rows[i].cells[colsCount - 1]
    .before(table.rows[i].cells[1].cloneNode(true));
}
