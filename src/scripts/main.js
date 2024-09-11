'use strict';

const table = document.querySelector('table');
const rows = table.rows;
const cloneIndex = 1;

for (let row = 0; row < rows.length; row++) {
  const cells = rows[row].cells;

  if (cells.length > cloneIndex) {
    const cloneCell = cells[cloneIndex].cloneNode(true);
    const insertIndex = cells.length - 1;

    rows[row].insertBefore(cloneCell, cells[insertIndex]);
  }
}
