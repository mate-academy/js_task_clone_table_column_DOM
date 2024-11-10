'use strict';

const columnIndex = 1;
const table = document.querySelector('table');

for (let i = 0; i < table.rows.length; i++) {
  const row = table.rows[i];

  const cellToClone = row.cells[columnIndex];
  const clonedCell = cellToClone.cloneNode(true);

  const insertPosition = row.cells.length - 1;

  row.insertBefore(clonedCell, row.cells[insertPosition]);
}
