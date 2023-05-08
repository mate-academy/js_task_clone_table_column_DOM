'use strict';

const table = document.body.firstElementChild;

[...table.rows].forEach(row =>
  row.children[4].before(row.cells[1].cloneNode(true)));
