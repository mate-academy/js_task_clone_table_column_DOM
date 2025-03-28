'use strict';

const table = document.querySelector('table');
const rows = table.rows;

for (let i = 0; i < rows.length; i++) {
  const cell = rows[i].cells;
  const positions = cell[1].cloneNode(true);

  rows[i].insertBefore(positions, cell[cell.length - 1]);
}
