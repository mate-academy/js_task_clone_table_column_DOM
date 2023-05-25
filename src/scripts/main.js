'use strict';

const table = document.querySelector('table');

const positionHeader = table.rows[0].cells[1];
const thHeader = document.createElement('th');
const thFooter = document.createElement('th');

thHeader.textContent = positionHeader.textContent;
thFooter.textContent = positionHeader.textContent;

table.rows[0].insertBefore(thHeader, table.rows[0].cells[4]);

for (let i = 1; i < table.rows.length - 1; i++) {
  const newCell = table.rows[i].insertCell(4);

  newCell.textContent = table.rows[i].cells[1].textContent;
}

const lastRow = table.rows[table.rows.length - 1];

lastRow.insertBefore(thFooter, lastRow.cells[4]);
