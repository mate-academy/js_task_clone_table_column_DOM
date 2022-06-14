'use strict';

const table = document.querySelector('table');
const tableRows = table.rows;

for (let i = 0; i < tableRows.length; i++) {
  const element = tableRows[i].cells[1];
  const elementClone = element.cloneNode(true);

  tableRows[i].insertBefore(elementClone, tableRows[i].cells[4]);
}
