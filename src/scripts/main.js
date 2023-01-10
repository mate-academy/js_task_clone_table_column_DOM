'use strict';

// write your code here
const table = document.querySelector('table');

for (let i = 0; i < table.rows.length; i++) {
  const newColumnCell = (table.rows[i].cells[1]).cloneNode(true);
  const lastColumnCell = table.rows[i].cells[table.rows[i].cells.length - 1];

  table.rows[i].insertBefore(newColumnCell, lastColumnCell);
}
