'use strict';

const rows = document.querySelectorAll('tr');
const copyFrom = 1;
const copyTo = 4;

for (const row of rows) {
  const clonedCell = row.cells[copyFrom].cloneNode(true);

  const newCell = row.cells[copyTo];

  newCell.before(clonedCell);
};
