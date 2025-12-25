'use strict';

const rows = document.querySelectorAll('table tr');

rows.forEach((row) => {
  const cells = [...row.cells];

  if (!cells[1]) {
    return;
  }

  const clonedCell = cells[1].cloneNode(true);
  const lastCell = cells.at(-1);

  lastCell.before(clonedCell);
});
