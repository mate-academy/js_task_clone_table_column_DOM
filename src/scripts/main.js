'use strict';

document.addEventListener('DOMContentLoaded', () => {
  const table = document.querySelector('table');

  // eslint-disable-next-line no-shadow
  function cloneAndInsertColumn(table) {
    const rows = table.rows;

    const columnIndexToClone = 1;
    const insertBeforeLastIndex = rows[0].cells.length - 1;

    Array.from(rows).forEach((row) => {
      const cellToClone = row.cells[columnIndexToClone];

      const clonedCell = cellToClone.cloneNode(true);

      row.insertBefore(clonedCell, row.cells[insertBeforeLastIndex]);
    });
  }

  cloneAndInsertColumn(table);
});
