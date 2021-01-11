'use strict';

const table = document.querySelector('tbody');
const tableHeader = document.querySelector('thead').querySelector('tr');
const tableFooter = document.querySelector('tfoot').querySelector('tr');

function shiftColumn(tableElement, tegName) {
  tableElement.cells[4].insertAdjacentHTML('beforebegin',
    `${tegName}${tableElement.cells[1].textContent}`);
};

for (const row of table.rows) {
  shiftColumn(row, '<td>');
};

shiftColumn(tableHeader, '<th>');
shiftColumn(tableFooter, '<th>');
