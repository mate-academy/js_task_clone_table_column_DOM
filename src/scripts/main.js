'use strict';

const rows = document.querySelectorAll('tr');

rows.forEach((row) => {
  const secondCell = row.children[1];
  const lastCell = row.lastElementChild;

  if (secondCell && lastCell) {
    const clonedCell = secondCell.cloneNode(true);

    row.appendChild(clonedCell);

    row.insertBefore(clonedCell, lastCell);
  }
});
