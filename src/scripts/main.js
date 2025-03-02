'use strict';

const table = document.querySelector('table');

[...table.rows].forEach((row) => {
  row.lastElementChild.before(row.cells[1].cloneNode(true));
});
