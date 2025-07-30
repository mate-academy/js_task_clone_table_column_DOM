'use strict';

const table = document.querySelector('table');

['tbody', 'thead', 'tfoot'].forEach((section) => {
  const sectionElement = table.querySelector(section);

  if (!sectionElement) {
    return;
  }

  const rows = sectionElement.rows;

  for (const row of rows) {
    const cells = row.cells;

    if (cells.length < 2) {
      continue;
    }

    const lastCellIndex = cells.length - 1;
    const potentialClone = cells[lastCellIndex - 1];

    if (potentialClone.innerHTML === cells[1].innerHTML) {
      continue;
    }

    const secondCell = cells[1];
    const clonedCell = secondCell.cloneNode(true);

    row.insertBefore(clonedCell, cells[lastCellIndex]);
  }
});
