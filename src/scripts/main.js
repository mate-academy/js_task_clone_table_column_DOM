'use strict';

const allRows = document.querySelectorAll('table tr');

for (const row of allRows) {
  const cells = row.querySelectorAll('th, td');
  const targetCell = cells[1];
  const clonedCell = targetCell.cloneNode(true);
  const lastCell = row.lastElementChild;

  row.insertBefore(clonedCell, lastCell);
}
