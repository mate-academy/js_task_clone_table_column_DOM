'use strict';

const table = document.querySelector('table');
const rows = table.rows;
const clonedFrom = 1;
const clonedTo = 3;

for (const row of rows) {
  const copyCellule = row.cells[clonedFrom].cloneNode(true);

  row.cells[clonedTo].after(copyCellule);
}
