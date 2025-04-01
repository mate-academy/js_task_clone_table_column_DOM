'use strict';

const table = document.querySelector('table');
const tableNodeClone = table.cloneNode(true);
const column = document.createElement('div');
const lastRow = table.rows.length - 1;
const lastCell = table.rows[0].cells.length - 1;

column.appendChild(tableNodeClone.rows[0].cells[1]);

for (let i = 1; i <= lastRow; i++) {
  const secondColumnCell = tableNodeClone.rows[i].cells[1];

  column.appendChild(secondColumnCell);
}

for (let i = 0; i <= lastRow; i++) {
  const dataToInput = column.children[i].cloneNode(true);
  const lastColumn = table.rows[i].cells[lastCell];

  lastColumn.before(dataToInput);
}
