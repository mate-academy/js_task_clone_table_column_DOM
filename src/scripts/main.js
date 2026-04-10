'use strict';

const rows = document.querySelectorAll('tr');

rows.forEach((row) => {
  const cell = row.children[1];
  const clonedCell = cell.cloneNode(true);
  const lastCell = row.children[row.children.length - 1];

  row.insertBefore(clonedCell, lastCell);
});
