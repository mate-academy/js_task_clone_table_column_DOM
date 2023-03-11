'use strict';

const rows = document.querySelectorAll('tr');

for (const row of rows) {
  const secondCell = row.cells[1];
  const newCell = row.insertCell(4);

  newCell.innerHTML = secondCell.innerHTML;
};
