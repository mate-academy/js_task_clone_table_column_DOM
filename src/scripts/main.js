'use strict';

const table = document.querySelector('table');
const rowsQuantity = table.rows.length;

for (let i = 0; i < rowsQuantity; i++) {
  const extraCell = table.rows[i].cells[1];

  table.rows[i].insertBefore(extraCell.cloneNode(true), table.rows[i].cells[4]);
}
