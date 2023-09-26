'use strict';

// write your code here

const rows = document.querySelectorAll('table tr');

for (let i = 0; i < rows.length; i++) {
  const row = rows[i];
  const newCell = document.createElement('td');
  const cellToclone = row.cells[1];
  const lastCell = row.lastElementChild;

  newCell.textContent = cellToclone.textContent;

  row.insertBefore(newCell, lastCell);
};
