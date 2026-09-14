'use strict';

// write your code here
const rows = document.querySelectorAll('tr');

for (const row of rows) {
  const cells = row.children;
  const secondCell = cells[1];
  const lastCell = cells[cells.length - 1];
  const copy = secondCell.cloneNode(true);

  row.insertBefore(copy, lastCell);
}
