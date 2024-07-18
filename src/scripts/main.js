'use strict';

const table = document.querySelector('table');

const rows = table.rows;

Array.from(rows).forEach((row) => {
  const th = row.cells[1].cloneNode(true);

  row.insertBefore(th, row.cells[row.cells.length - 1]);
});
