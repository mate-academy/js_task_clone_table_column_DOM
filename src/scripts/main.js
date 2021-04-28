'use strict';

const table = document.querySelector('table');

const rows = table.rows;

for (const row of rows) {
  row.insertBefore(row.cells[1].cloneNode(true), row.cells[4]);
};
