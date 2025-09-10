'use strict';

document.addEventListener('DOMContentLoaded', () => {
  const table = document.querySelector('table');

  if (!table) {
    return;
  }

  if (window.__secondColCloned) {
    return;
  } else {
    window.__secondColCloned = true;
  }

  for (const row of table.rows) {
    if (row.cells.length < 2) {
      continue;
    }

    const clonedCell = row.cells[1].cloneNode(true);

    clonedCell.dataset.cloned = 'second-column';

    row.insertBefore(clonedCell, row.cells[row.cells.length - 1]);
  }
});
