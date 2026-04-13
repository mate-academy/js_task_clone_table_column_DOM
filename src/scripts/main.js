'use strict';

const table = document.querySelector('table');
const rows = [...table.rows];

rows.forEach((row) => {
  const cells = row.cells;

  const clone = cells[1].cloneNode(true);
  const lastCell = cells[cells.length - 1];

  row.insertBefore(clone, lastCell);
});
