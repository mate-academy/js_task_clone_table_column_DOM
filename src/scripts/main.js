'use strict';

const table = document.querySelector('table');

for (let i = 0; i < table.rows.length; i++) {
  const row = table.rows[i];
  const secondCell = row.querySelector('td:nth-child(2), th:nth-child(2)');
  const cellClone = secondCell.cloneNode(true);
  const lastCell = row.lastElementChild;

  row.insertBefore(cellClone, lastCell);
}
