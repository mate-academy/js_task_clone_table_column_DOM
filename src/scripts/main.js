'use strict';

const table = document.querySelector('table');
const lastColumnIndex = table.rows[0].cells.length - 1;

for (let i = 0; i < table.rows.length; i++) {
  const cellToClone = table.rows[i].cells[1];

  const clonedCell = cellToClone.cloneNode(true);

  table.rows[i].insertBefore(clonedCell, table.rows[i].cells[lastColumnIndex]);
}
