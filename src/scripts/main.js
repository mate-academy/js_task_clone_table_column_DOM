'use strict';

document.addEventListener('DOMContentLoaded', () => {
  const table = document.querySelector('table');

  const cloneColIndex = 1;

  const insertBeforeLast = (row, cloneIndex) => {
    const cells = Array.from(row.cells);

    if (cells.length < 2) {
      return;
    }

    const cloneCell = cells[cloneIndex].cloneNode(true);
    const lastIndex = cells.length - 1;

    row.insertBefore(cloneCell, cells[lastIndex]);
  };
  const cloneColumn = (section) => {
    if (!section) {
      return;
    }

    for (const row of section.rows) {
      insertBeforeLast(row, cloneColIndex);
    }
  };

  cloneColumn(table.tHead);
  cloneColumn(table.tBodies[0]);
  cloneColumn(table.tFoot);
});
