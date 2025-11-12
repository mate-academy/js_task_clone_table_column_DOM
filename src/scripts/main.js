'use strict';

const table = document.querySelector('table');

const allRows = table.querySelectorAll('tr');

allRows.forEach((row) => {
  const secondCell = row.children[1];

  if (secondCell) {
    const clonedCell = secondCell.cloneNode(true);
    const lastCell = row.lastElementChild;

    if (lastCell) {
      row.insertBefore(clonedCell, lastCell);
    }
  }
});
