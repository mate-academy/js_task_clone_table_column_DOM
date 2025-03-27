'use strict';

const table = document.querySelector('table');
const tableNodeClone = table.cloneNode(true);
const toCopy = document.createElement('column');
const rowSize = table.rows.length - 1;

toCopy.appendChild(tableNodeClone.rows[0].cells[1]);

for (let i = 1; i <= rowSize; i++) {
  const secondColumnCell = tableNodeClone.rows[i].cells[1];

  toCopy.appendChild(secondColumnCell);
}

for (let i = 0; i <= rowSize; i++) {
  const cell = toCopy.children[i].cloneNode(true);
  const whereInputAfter = table.rows[i].cells[3];

  whereInputAfter.after(cell);
}
