'use strict';

const table = document.querySelector('table');

table.rows.forEach((row) => {
  const copy = row.cells[1].cloneNode(true);
  const lastElementIndex = row.cells.length - 1;

  row.cells[lastElementIndex].before(copy);
});
