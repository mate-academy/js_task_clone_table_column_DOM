'use strict';

// write your code here

const table = document.body.firstElementChild;

for (let i = 0; i < table.rows.length; i++) {
  const row = table.rows[i];

  const coppiedCell = row.cells[1].cloneNode(true);

  row.insertBefore(coppiedCell, row.cells[row.cells.length - 1]);
}
