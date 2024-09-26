'use strict';

const table = document.querySelector('table');

const rows = Array.from(table.rows);

rows.forEach(row => {
  const secondCell = row.cells[1].cloneNode(true);
  const lastCell = row.lastElementChild;

  lastCell.before(secondCell);
});
