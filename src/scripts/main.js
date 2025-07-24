'use strict';

const table = document.querySelector('table');

const sections = ['thead', 'tbody', 'tfoot'];

sections.forEach((sectionName) => {
  const section = table.querySelector(sectionName);

  if (!section) {
    return;
  }

  const rows = section.rows;

  for (const row of rows) {
    const cells = row.cells;

    if (cells.length < 2) {
      continue;
    }

    const secondCell = cells[1];
    const clonedCell = secondCell.cloneNode(true);

    const lastCell = cells[cells.length - 1];

    row.insertBefore(clonedCell, lastCell);
  }
});
