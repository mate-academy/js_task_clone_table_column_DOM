'use strict';

// write your code here
const table = document.querySelector('table');

Array.from(table.rows).forEach((row) => {
  const copy = row.cells[1].cloneNode(true);
  const i = row.cells.length - 1;

  row.cells[i].before(copy);
});
