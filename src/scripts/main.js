'use strict';

const allRows = document.querySelectorAll('tr');

allRows.forEach((row) => {
  const clonedcell = row.cells[1].cloneNode(true);
  const lastcell = row.cells[row.cells.length - 1];

  row.insertBefore(clonedcell, lastcell);
});
