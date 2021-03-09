'use strict';

const table = document.querySelector('table');
const tableRows = table.rows;

const cloneAfterIndex = 3;
const cloneIndex = 1;

for (const row of tableRows) {
  const toBeClonned = row.cells[cloneIndex].cloneNode(true);

  row.cells[cloneAfterIndex].after(toBeClonned);
}
