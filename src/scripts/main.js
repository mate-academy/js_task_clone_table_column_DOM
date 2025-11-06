'use strict';

const table = document.querySelector('table');

const headerRow = table.querySelector('thead tr');
const bodyRows = table.querySelectorAll('tbody tr');
const footerRow = table.querySelector('tfoot tr');

function cloneColumn(row) {
  const cellToClone = row.cells[1];
  const referenceCell = row.cells[row.cells.length - 1];
  const clonedCell = cellToClone.cloneNode(true);

  row.insertBefore(clonedCell, referenceCell);
}

cloneColumn(headerRow);

bodyRows.forEach((row) => {
  cloneColumn(row);
});

cloneColumn(footerRow);
