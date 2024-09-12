'use strict';

const table = document.querySelector('table');

function cloneAndInsertColumn() {
  const rows = Array.from(table.querySelectorAll('tr'));

  rows.forEach((row) => {
    const secondCell = row.children[1];

    if (secondCell) {
      const clonedCell = secondCell.cloneNode(true);

      row.insertBefore(clonedCell, row.children[row.children.length - 1]);
    }
  });
}

cloneAndInsertColumn();
