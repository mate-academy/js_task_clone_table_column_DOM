'use strict';

const allRows = document.querySelectorAll('tr');

allRows.forEach(row => {
  const cells = row.cells;
  const secondColumn = cells[1];
  const lastColumn = cells[cells.length - 1];
  const clonedCell = secondColumn.cloneNode(true);

  row.insertBefore(clonedCell, lastColumn);
});
