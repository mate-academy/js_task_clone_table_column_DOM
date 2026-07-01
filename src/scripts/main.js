'use strict';

// write your code here
const table = document.querySelector('table');

for (let i = 0; i < table.rows.length; i++) {
  const row = table.rows[i];
  const position = row.cells[1];
  const lastIndex = row.cells[row.cells.length - 1];

  row.insertBefore(position.cloneNode(true), lastIndex);
}
