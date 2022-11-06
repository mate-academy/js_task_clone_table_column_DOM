'use strict';

const table = document.querySelector('table');

[...table.rows].forEach(row => {
  row.cells[4].before(row.cells[1].cloneNode(true));
});
