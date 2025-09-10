'use strict';

function insertClone(row) {
  const cells = row.children;
  const cellClone = cells[1].cloneNode(true);

  row.insertBefore(cellClone, row.lastElementChild);
}

const tableHeader = document.querySelector('thead');
const tableBody = document.querySelector('tbody');
const headerRow = tableHeader.querySelector('tr');
const tableRows = tableBody.querySelectorAll('tr');

if (!tableBody || !tableHeader || !tableRows.length || !headerRow) {
  throw new Error('Table elements are not found');
}

tableRows.forEach((row) => {
  insertClone(row);
});

insertClone(headerRow);
