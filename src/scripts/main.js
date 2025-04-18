'use strict';

document.addEventListener('DOMContentLoaded', () => {
  const table = document.querySelector('table');

  if (!table) {
    return;
  }

  const cloneColumn = (section) => {
    if (!section) {
      return;
    }

    const rows = section.querySelectorAll('tr');

    rows.forEach((row) => {
      const cells = row.children;

      if (cells.length < 2) {
        return;
      }

      const secondCell = cells[1].cloneNode(true);

      row.insertBefore(secondCell, cells[cells.length - 1]);
    });
  };

  cloneColumn(table.tHead);
  cloneColumn(table.tBodies[0]);
  cloneColumn(table.tFoot);
});
