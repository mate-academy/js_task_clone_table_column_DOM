'use strict';

const table = document.querySelector('table');
const columnForCopy = 1;
const columnToCopy = 4;
const rowCount = table.rows.length;

for (let i = 0; i < rowCount; i++) {
  const cell = table.rows[i].cells[columnForCopy].cloneNode(true);

  table.rows[i].cells[columnToCopy - 1].after(cell);
}
