'use strict';

const table = document.querySelector('table');

if (table) {
  const rows = [...table.rows];

  rows.forEach((row) => {
    if (row.cells.length < 2) {
      return;
    }

    const newCell = row.cells[1].cloneNode(true);

    row.lastElementChild.before(newCell);
  });
}

// write your code here
