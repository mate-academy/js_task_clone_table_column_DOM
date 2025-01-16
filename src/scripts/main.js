'use strict';

const table = document.querySelector('table');

Array.from(table.rows).forEach((row) => {
  const cells = row.cells;

  const secondColumn = cells[1].cloneNode(true);

  row.insertBefore(secondColumn, cells[cells.length - 1]);
});
