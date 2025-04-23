'use strict';

const table = document.querySelector('table');

const sections = [table.tHead, ...table.tBodies, table.tFoot];

sections.forEach((section) => {
  for (const row of section.rows) {
    if (row.cells.length < 2) {
      continue;
    }

    const firstCell = row.cells[1];

    const clone = firstCell.cloneNode(true);

    if (row.cells.length > 2) {
      const lastCell = row.cells[row.cells.length - 1];

      lastCell.parentNode.insertBefore(clone, lastCell);
    }
  }
});
