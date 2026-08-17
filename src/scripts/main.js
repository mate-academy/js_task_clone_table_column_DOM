'use strict';

const tHeadTable = document.querySelector('table thead');
const headRows = tHeadTable.rows;

const tBodyTable = document.querySelector('table tbody');
const bodyRows = tBodyTable.rows;

const tFootTable = document.querySelector('table tfoot');
const footRows = tFootTable.rows;

const headRow = headRows[0];
const headCell = headRow.cells[1];
const headClone = headCell.cloneNode(true);

headRow.insertBefore(headClone, headRow.lastElementChild);
tHeadTable.appendChild(headRow);

const footRow = footRows[0];
const footCell = footRow.cells[1];
const footClone = footCell.cloneNode(true);

footRow.insertBefore(footClone, footRow.lastElementChild);
tFootTable.appendChild(footRow);

for (let i = 0; i < bodyRows.length; i++) {
  const row = bodyRows[i];
  const secondCell = row.cells[1];
  const cloneCell = secondCell.cloneNode(true);

  row.insertBefore(cloneCell, row.lastElementChild);
}
