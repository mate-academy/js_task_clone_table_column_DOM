'use strict';

const table = document.querySelector('table');

for (let row of table.rows) {
  const cells = row.cells;

  if (cells.length < 2) continue;

  const cloneCell = cells[1].cloneNode(true);
  row.insertBefore(cloneCell, row.lastElementChild);
}
