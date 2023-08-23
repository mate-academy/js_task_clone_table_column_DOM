'use strict';

function cloneAndInsertColumn(targetRow, columnIndex) {
  const secondCell = targetRow.children[columnIndex];
  const clonedCell = secondCell.cloneNode(true);
  const lastCell = targetRow.lastElementChild;

  targetRow.insertBefore(clonedCell, lastCell);
}

const table = document.querySelector('table');

const headerRow = table.querySelector('thead tr');

cloneAndInsertColumn(headerRow, 1);

const footerRow = table.querySelector('tfoot tr');

cloneAndInsertColumn(footerRow, 1);

const rows = table.querySelectorAll('tbody tr');

rows.forEach(row => cloneAndInsertColumn(row, 1));
