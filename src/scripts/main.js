'use strict';

const table = document.querySelector('table');

const rows = table.rows;

for (const key of rows) {
  const col = key.cells[1];
  const newCol = col.cloneNode(true);

  key.insertBefore(newCol, key.lastElementChild);
}
