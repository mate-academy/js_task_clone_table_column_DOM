'use strict';

const rows = document.querySelectorAll('table tr');

rows.forEach((row) => {
  const cells = [...row.cells];
  const clonedCell = cells[1].cloneNode(true);
  const lastCell = cells[cells.length - 1];

  lastCell.before(clonedCell);
});
