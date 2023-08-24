'use strict';

const table = document.querySelector('table');
const headerRow = table.querySelector('thead tr');
const footerRow = table.querySelector('tfoot tr');
const rows = table.querySelectorAll('tbody tr');

function cloneAndInsertColumn(targetRow, columnIndex) {
  const secondCell = targetRow.children[columnIndex];
  const clonedCell = secondCell.cloneNode(true);
  const lastCell = targetRow.lastElementChild;

  targetRow.insertBefore(clonedCell, lastCell);
}

cloneAndInsertColumn(headerRow, 1);
cloneAndInsertColumn(footerRow, 1);
rows.forEach(row => cloneAndInsertColumn(row, 1));
