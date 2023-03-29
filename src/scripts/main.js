'use strict';

const table = document.querySelector('table');
const rows = table.rows;

for (let i = 0; i < rows.length; i++) {
  const row = rows[i];
  const secondColumn = row.cells[1].cloneNode(true);
  row.insertBefore(secondColumn, row.lastElementChild);
};
