'use strict';

const table = document.querySelector('table');

const tableRows = table.rows;

for (let i = 0; i < tableRows.length; i++) {
  const secondCell = 1;
  const fifthCell = 5;
  const columnsToClone = tableRows[i].cells[secondCell];
  const cloneColumn = columnsToClone.cloneNode(true);

  tableRows[i].insertBefore(cloneColumn, tableRows[i].cells[fifthCell]);
}
