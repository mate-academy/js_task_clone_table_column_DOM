'use strict';

const tableOfWorkers = document.querySelector('table');

const rowsOfTable = tableOfWorkers.rows;
let copyOfPosition;

for (const row of rowsOfTable) {
  copyOfPosition = row.cloneNode(true).children[1];
  row.insertBefore(copyOfPosition, row.lastElementChild);
}
