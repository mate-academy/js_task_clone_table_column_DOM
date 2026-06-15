'use strict';

const tableOfPeople = document.querySelector('table');

for (const row of tableOfPeople.rows) {
  const cellToCopy = row.cells[1];
  const lastCell = row.cells[row.cells.length - 1];
  const clonedCell = cellToCopy.cloneNode(true);

  lastCell.before(clonedCell);
}
