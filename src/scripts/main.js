'use strict';

const table = document.querySelector('table');
const rows = table.rows;

for (let i = 0; i < rows.length; i++) {
  const cell = rows[i].cells[1].cloneNode(true);

  rows[i].insertBefore(cell, rows[i].cells[rows[i].cells.length - 1]);
}
