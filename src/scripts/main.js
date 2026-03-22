'use strict';

const table = document.querySelector('table');

for (let i = 0; i < table.rows.length; i++) {
  const currentRow = table.rows[i];
  const lastCell = currentRow.lastElementChild;
  const cell = table.rows[i].cells[1].cloneNode(true);

  currentRow.insertBefore(cell, lastCell);
}
