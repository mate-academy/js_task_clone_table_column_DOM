'use strict';

const table = document.querySelector('table');

[...table.rows].forEach(row => {
  const clone = row.cells[1].cloneNode(true);

  row.cells[row.cells.length - 1].before(clone);
});
