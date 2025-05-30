'use strict';

const table = document.querySelector('table');

for (let i = 0; i < table.rows.length; i++) {
  if (table.rows[i].cells.length > 1) {
    const cloneCell = table.rows[i].cells[1].cloneNode(true);

    const row = table.rows[i];
    const lastCell = row.cells[row.cells.length - 1];

    row.insertBefore(cloneCell, lastCell);
  }
}
