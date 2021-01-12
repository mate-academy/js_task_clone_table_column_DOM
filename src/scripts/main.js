'use strict';

const table = document.querySelector('table');
const row = document.querySelectorAll('tr');

for (let i = 0; i < row.length; i++) {
  const td = table.rows[i].cells[1];
  const lastCellInRow = table.rows[i].cells[4];
  const cellDuplicate = td.cloneNode(true);

  lastCellInRow.before(cellDuplicate);
}
