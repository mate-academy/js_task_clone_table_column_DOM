'use strict';

const table = document.querySelector('table');

for (let i = 0; i < table.rows.length; i++) {
  const positionCell = table.rows[i].cells[1];
  const salaryCell = table.rows[i].cells[4];
  const newPositionCell = positionCell.cloneNode(true);

  table.rows[i].insertBefore(newPositionCell, salaryCell);
}
