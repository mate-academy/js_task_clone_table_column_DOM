'use strict';

const table = document.querySelector('table');

function cloneAndInsertColumn(indexToClone, insertBeforeLast = true) {
  const rows = Array.from(table.rows);

  rows.forEach((row) => {
    const cells = Array.from(row.cells);
    const clone = cells[indexToClone].cloneNode(true);
    const insertIndex = insertBeforeLast ? cells.length - 1 : cells.length;

    row.insertBefore(clone, row.cells[insertIndex]);
  });
}

cloneAndInsertColumn(1);
