'use strict';

const table = document.querySelector('table');

if (table) {
  const cloneColumnIndex = 1; // second column (0-based)

  const insertBeforeCell = (row) => {
    const cells = Array.from(row.children);
    const sourceCell = cells[cloneColumnIndex];
    const targetCell = cells[cells.length - 1];

    if (sourceCell && targetCell) {
      const clonedCell = sourceCell.cloneNode(true);

      row.insertBefore(clonedCell, targetCell);
    }
  };

  table
    .querySelectorAll('thead tr, tbody tr, tfoot tr')
    .forEach(insertBeforeCell);
}
