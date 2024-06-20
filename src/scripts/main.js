'use strict';

const table = document.querySelectorAll('table tr');

table.forEach((row) => {
  row.cells[4].before(row.cells[1].cloneNode(true));
});
