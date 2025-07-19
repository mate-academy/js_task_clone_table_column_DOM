'use strict';

// write your code here
const allRows = document.querySelectorAll('tr');

allRows.forEach((row) => {
  const secondCell = row.children[1];

  const clonedCell = secondCell.cloneNode(true);

  const lastCell = row.lastElementChild;

  row.insertBefore(clonedCell, lastCell);
});
