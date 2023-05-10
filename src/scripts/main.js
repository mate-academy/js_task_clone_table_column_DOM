'use strict';

const rows = document.querySelectorAll('tr');

for (let i = 0; i < rows.length; i++) {
  const cell = rows[i].cells[1];
  const clone = cell.cloneNode(true);
  const lastCell = rows[i].cells[rows[i].cells.length - 1];

  rows[i].insertBefore(clone, lastCell);
}
