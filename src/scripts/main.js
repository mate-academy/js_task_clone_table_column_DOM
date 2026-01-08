'use strict';

const table = document.querySelector('table');
const thead = document.querySelector('thead');
const cells = thead.querySelectorAll('th');

const tableSize = table.rows.length;
const startCell = 1;
const finishCell = cells.length - 1;

for (let i = 0; i < tableSize; i++) {
  const td = table.rows[i].cells[startCell];

  table.rows[i].append(td.cloneNode(true));
}

for (let i = 0; i < tableSize; i++) {
  const td = table.rows[i].cells[finishCell];

  table.rows[i].append(td);
}
