'use strict';

const table = document.querySelector('table');

for (const row of table.rows) {
  const secondCell = row.cells[1];
  const clonedCell = secondCell.cloneNode(true);
  const lastCell = row.lastElementChild;

  lastCell.insertAdjacentElement('beforebegin', clonedCell);
}
