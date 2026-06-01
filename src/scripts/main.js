'use strict';

const rows = document.querySelectorAll('tr');

for (const row of rows) {
  const secondCell = row.children[1];

  const lastCell = row.children[row.children.length - 1];
  const clone = secondCell.cloneNode(true);

  row.insertBefore(clone, lastCell);
}
