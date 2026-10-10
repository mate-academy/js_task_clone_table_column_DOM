'use strict';

const table = document.querySelector('table');

Array.from(table.rows).forEach((row) => {
  const newCell = row.cells[1].cloneNode(true);
  const lastCell = row.lastElementChild;

  row.insertBefore(newCell, lastCell);
});
