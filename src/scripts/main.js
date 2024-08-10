'use strict';

// write your code here
const table = document.querySelector('table');

const headRows = table.tHead.rows;

for (const row of headRows) {
  const position = row.cells[1].cloneNode(true);

  row.insertBefore(position, row.cells[row.cells.length - 1]);
}

const bodyRows = table.tBodies[0].rows;

for (const row of bodyRows) {
  const position = row.cells[1].cloneNode(true);

  row.insertBefore(position, row.cells[row.cells.length - 1]);
}

const footRows = table.tFoot.rows;

for (const row of footRows) {
  const position = row.cells[1].cloneNode(true);

  row.insertBefore(position, row.cells[row.cells.length - 1]);
}
