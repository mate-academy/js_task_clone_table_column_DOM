'use strict';

const table = document.querySelector('table');
const rows = table.rows;
const rowsArr = Array.from(rows);

for (let i = 0; i < rowsArr.length; i++) {
  const cell = rowsArr[i].cells[1];
  const clone = cell.cloneNode(true);

  rows[i].insertBefore(clone, rows[i].cells[4]);
}
