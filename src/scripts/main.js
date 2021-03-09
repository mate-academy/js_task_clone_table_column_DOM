'use strict';

const table = document.querySelector('table');
const rows = table.rows;
const clonedColumnIndex = 1;
const columnIndexToInsert = 4;

for (let i = 0; i < rows.length; i++) {
  const searchedColumn = rows[i].cells[clonedColumnIndex];
  const copiedColumn = searchedColumn.cloneNode(true);

  rows[i].insertBefore(copiedColumn, rows[i].cells[columnIndexToInsert]);
}
