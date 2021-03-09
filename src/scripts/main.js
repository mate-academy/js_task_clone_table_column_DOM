'use strict';

const table = document.querySelector('table');
const rows = table.rows;

const copyFrom = 1;
const copyTo = 4;

for (const row of rows) {
  const clonedCell = row.cells[copyFrom].cloneNode(true);

  const newCell = row.cells[copyTo];

  newCell.before(clonedCell);
};
