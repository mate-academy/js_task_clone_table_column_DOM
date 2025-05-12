'use strict';

document.addEventListener('DOMContentLoaded', () => {
  const table = document.querySelector('table');

  table.querySelectorAll('tr').forEach((row) => {
    const cells = Array.from(row.children);

    if (cells.length > 1) {
      const clone = cells[1].cloneNode(true);

      row.insertBefore(clone, cells[cells.length - 1]);
    }
  });
});
