'use strict';

document.addEventListener('DOMContentLoaded', () => {
  const table = document.querySelector('table');

  if (!table) {
    return; // no table found
  }

  // Select ALL sections, not just the first one
  const sections = table.querySelectorAll('thead, tbody, tfoot');

  for (const section of sections) {
    for (const row of section.rows) {
      const secondCell = row.cells[1];
      if (!secondCell) {
        continue; // skip rows with < 2 cells
      }

      const clonedCell = secondCell.cloneNode(true);

      // Insert the cloned column before the last cell
      const lastCell = row.cells[row.cells.length - 1];
      row.insertBefore(clonedCell, lastCell);
    }
  }
});
