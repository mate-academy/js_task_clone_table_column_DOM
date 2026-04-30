'use strict';

// write your code here
const table = document.querySelector('table');

const rows = table.querySelectorAll('tr');

rows.forEach((row) => {
  const cells = row.children;

  const secondCell = cells[1];

  const clonedCell = secondCell.cloneNode(true);

  row.insertBefore(clonedCell, cells[cells.length - 1]);
});
