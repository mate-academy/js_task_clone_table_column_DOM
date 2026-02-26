'use strict';

// write your code here
const rows = document.querySelectorAll('tr');

rows.forEach((row) => {
  const positionCell = row.cells[1];
  const salaryCell = row.cells[row.cells.length - 1];
  const clone = positionCell.cloneNode(true);

  row.insertBefore(clone, salaryCell);
});
