'use strict';

// write your code here
document.addEventListener('DOMContentLoaded', () => {
  const table = document.querySelector('table');

  if (!table) {
    return;
  }

  ['thead', 'tbody', 'tfoot'].forEach((sectionName) => {
    const section = table.querySelector(sectionName);

    if (!section) {
      return;
    }

    section.querySelectorAll('tr').forEach((row) => {
      if (row.cells.length < 2) {
        return;
      }

      const secondCell = row.cells[1];
      const clonedCell = secondCell.cloneNode(true);
      const referenceCell = row.cells[row.cells.length - 1];

      row.insertBefore(clonedCell, referenceCell);
    });
  });
});
