'use strict';

const table = document.querySelector('table');
const rows = table.querySelectorAll('tr');

rows.forEach((row) => {
  const cells = row.children;

  const secondCell = cells[1];
  const lastCell = cells[cells.length - 1];

  const clonedCell = secondCell.cloneNode(true);

  row.insertBefore(clonedCell, lastCell);
});
