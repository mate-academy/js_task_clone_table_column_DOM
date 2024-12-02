'use strict';

const table = document.querySelector('table');

const rows = [...table.rows];

rows.forEach((row) => {
  if (row.cells.length >= 5) {
    const copy = row.cells[1].cloneNode(true);

    row.cells[4].before(copy);
  }
});
