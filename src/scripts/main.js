'use strict';

// write your code here

const table = document.querySelector('table');

for (let i = 0; i < table.rows.length; i++) {
  const row = table.rows[i];
  const sourceCell = row.cells[1].cloneNode(true);
  const newCell = row.insertCell(row.cells.length - 1);

  row.replaceChild(sourceCell, newCell);
}
