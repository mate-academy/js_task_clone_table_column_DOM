'use strict';

const tableRows = document.body.querySelector('table').rows;

for (const row of tableRows) {
  row.insertBefore(row.cells[1].cloneNode(true), row.cells[4]);
}
