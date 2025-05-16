'use strict';

const table = document.querySelector('table');
const tbody = table.tBodies[0];
const rows = tbody.rows;
const thead = table.tHead;
const headerRow = thead.rows[0];

const originalHeader = headerRow.cells[1];
const newHeader = originalHeader.cloneNode(true);

headerRow.insertBefore(newHeader, headerRow.cells[headerRow.cells.length - 1]);

for (let i = 0; i < rows.length; i++) {
  const positionCell = rows[i].cells[1];

  const salaryCell = rows[i].cells[rows[i].cells.length - 1];
  const clonedCell = positionCell.cloneNode(true);

  rows[i].insertBefore(clonedCell, salaryCell);
}
