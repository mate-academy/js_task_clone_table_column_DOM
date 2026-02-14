'use strict';

// write your code here
const table = document.querySelector('table');

const rows = table.querySelectorAll('tr');

rows.forEach((row) => {
  const cells = Array.from(row.children);

  const secondCell = cells[1];

  const cloned = secondCell.cloneNode(true);

  row.insertBefore(cloned, cells[cells.length - 1]);
});
