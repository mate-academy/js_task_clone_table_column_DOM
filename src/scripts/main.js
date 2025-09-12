'use strict';

document.addEventListener('DOMContentLoaded', () => {
  document.querySelectorAll('table tr').forEach(function (row) {
    const cells = row.cells;

    if (cells.length > 1) {
      const clone = cells[1].cloneNode(true);

      row.insertBefore(clone, cells[cells.length - 1]);
    }
  });
});
