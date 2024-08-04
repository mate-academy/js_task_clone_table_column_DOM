'use strict';

const rows = [...document.querySelectorAll('tr')];

rows.forEach((row) => {
  const cells = row.cells;
  const clonedCell = cells[1].cloneNode(true);

  row.insertBefore(clonedCell, cells[cells.length - 1]);
});
