'use strict';

const table = document.querySelector('table');

const tableRows = table.rows;

for (let i = 0; i < tableRows.length; i++) {
  const columnIndexToCopy = 1;
  const columnIndexToInsert = 4;
  const columnsToClone = tableRows[i].cells[columnIndexToCopy];
  const cloneColumn = columnsToClone.cloneNode(true);

  tableRows[i]
    .insertBefore(cloneColumn, tableRows[i].cells[columnIndexToInsert]);
}
