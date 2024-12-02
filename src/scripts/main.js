'use strict';

const table = document.querySelector('table');
const rows = table.querySelectorAll('tr');

rows.forEach((row) => {
  const secondColumnCell = row.children[1];

  const clonedCell = secondColumnCell.cloneNode(true);

  row.insertBefore(clonedCell, row.children[row.children.length - 1]);
});
