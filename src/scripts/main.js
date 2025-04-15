'use strict';

document.addEventListener('DOMContentLoaded', () => {
  const table = document.querySelector('table');

  ['thead', 'tbody', 'tfoot'].forEach((section) => {
    const rows = table.querySelectorAll(`${section} tr`);

    rows.forEach((row) => {
      const cells = row.children;

      const clonedCell = cells[1].cloneNode(true);

      row.insertBefore(clonedCell, cells[cells.length - 1]);
    });
  });
});
