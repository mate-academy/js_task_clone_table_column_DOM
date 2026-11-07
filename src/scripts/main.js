'use strict';

const sourceTable = document.querySelector('table');

for (const row of sourceTable.rows) {
  const cells = row.cells;
  const cellToCopy = cells[1].cloneNode(true);

  cells[cells.length - 1].before(cellToCopy);
}
