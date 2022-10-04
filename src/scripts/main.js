'use strict';

const tableRows = document.querySelector('table').rows;

for (const row of tableRows) {
  row.insertBefore(row.cells[1].cloneNode(true), row.cells[4]);
};
