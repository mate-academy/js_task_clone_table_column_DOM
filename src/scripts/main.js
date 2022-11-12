'use strict';

const table = document.querySelector('table');

[ ...table.rows ].forEach(row => {
  const cell = row.cells[1];

  row.cells[3].after(cell.cloneNode(true));
});
