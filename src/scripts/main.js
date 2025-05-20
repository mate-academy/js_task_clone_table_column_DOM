'use strict';

const table = document.body.querySelector('table');
const collectionRows = table.rows;

for (const row of collectionRows) {
  const col = row.cells[1].cloneNode();

  col.textContent = row.cells[1].textContent;

  row.lastElementChild.before(col);
}
