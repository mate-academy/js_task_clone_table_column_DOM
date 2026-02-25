'use strict';

// write your code here
const table = document.querySelector('table');
const rows = table.querySelectorAll('tr');

for (let i = 0; i < rows.length; i++) {
  const currentRow = rows[i];
  const secondCell = currentRow.children[1];
  const clonedCell = secondCell.cloneNode(true);
  const lastCell = currentRow.children[currentRow.children.length - 1];

  lastCell.before(clonedCell);
}
