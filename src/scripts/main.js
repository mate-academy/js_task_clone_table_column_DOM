'use strict';

const table = document.querySelector('table');

const allRows = [
  ...table.querySelectorAll('thead tr'),
  ...table.querySelectorAll('tbody tr'),
  ...table.querySelectorAll('tfoot tr'),
];

allRows.forEach((row) => {
  const secondCell = row.cells[1];

  const clonedCell = secondCell.cloneNode(true);

  row.insertBefore(clonedCell, row.cells[row.cells.length - 1]);
});
