'use strict';

// write your code here

const table = document.querySelector('table');
const tableRow = table.rows;
const copyFrom = 4;
const copyTo = 1;

for (const row of tableRow) {
  const clonedCell = row.cells[copyTo].cloneNode(true);

  row.cells[copyFrom].before(clonedCell);
}
