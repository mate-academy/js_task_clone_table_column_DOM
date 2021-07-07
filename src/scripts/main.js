'use strict';

const table = document.querySelector('table');
const indexOfCopiedColumn = 1;
const indexOfInsertedColumn = 4;

for (let i = 0; i < table.rows.length; i++) {
  const cell = table.rows[i].cells[indexOfCopiedColumn];

  table.rows[i].cells[indexOfInsertedColumn].before(cell.cloneNode(true));
}
