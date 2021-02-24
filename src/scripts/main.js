'use strict';

const table = document.querySelector('table');

const tableRows = table.rows;

for (let i = 0; i < tableRows.length; i++) {
  const columnsToClone = tableRows[i].cells[1];
  const cloneColumn = columnsToClone.cloneNode(true);

  tableRows[i].insertBefore(cloneColumn, tableRows[i].cells[4]);
}
