'use strict';

// write your code here
const table = document.querySelector('table');
const rows = table.rows;

for (const row of rows) {
  const positionCell = table.rows[row.rowIndex].cells[1];
  const salaryCell = table.rows[row.rowIndex].cells[4];
  const item = positionCell.cloneNode(true);

  salaryCell.insertAdjacentElement('beforebegin', item);
}
