'use strict';

const rows = document.querySelectorAll('tr');

for (const row of rows) {
  const secondCell = row.children[1];
  const clonedCell = secondCell.cloneNode(true);

  row.insertBefore(clonedCell, row.lastElementChild);
}
