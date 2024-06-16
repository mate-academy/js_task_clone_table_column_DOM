'use strict';

function cloneAndInsertCell(row, cellIndex) {
  const cell = row.cells[cellIndex];
  const clonedCell = cell.cloneNode(true);

  row.insertBefore(clonedCell, row.lastElementChild);
}

function cloneSection(section) {
  const rows = section.querySelectorAll('tr');

  rows.forEach((row) => cloneAndInsertCell(row, 1));
}

const tableBody = document.querySelector('tbody');
const tableHeader = document.querySelector('thead');
const tableFooter = document.querySelector('tfoot');

cloneSection(tableHeader);
cloneSection(tableBody);
cloneSection(tableFooter);
