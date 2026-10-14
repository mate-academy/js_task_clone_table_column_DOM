'use strict';

const rows = document.querySelectorAll('tr');

rows.forEach((row) => {
  const secondCell = row.children[1];
  const clonedCell = secondCell.cloneNode(true);
  const lastCell = row.lastElementChild;

  row.insertBefore(clonedCell, lastCell);
});
