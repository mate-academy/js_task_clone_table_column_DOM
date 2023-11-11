'use strict';

const table = document.querySelector('table');

const rows = table.rows;

for (let i = 0; i < rows.length; i++) {
  const cell = rows[i].querySelectorAll('td, th')[1];

  const lastCell = rows[i].querySelectorAll('td, th')[rows[i].cells.length - 1];

  rows[i].insertBefore(cell.cloneNode(true), lastCell);
};
