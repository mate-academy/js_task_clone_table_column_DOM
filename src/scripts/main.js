'use strict';

// write your code here
const rows = document.querySelectorAll('table tr');

rows.forEach((row) => {
  const cells = row.children;
  const secondCell = cells[1].cloneNode(true);
  const lastCell = cells[cells.length - 1];

  row.insertBefore(secondCell, lastCell);
});
