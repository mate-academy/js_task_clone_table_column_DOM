'use strict';

document.addEventListener('DOMContentLoaded', () => {
  const table = document.querySelector('table');
  const rows = table.querySelectorAll('tr');

  rows.forEach((row) => {
    const cells = row.querySelectorAll('th, td');

    if (cells.length > 1) {
      const cloneCell = cells[1].cloneNode(true);

      row.insertBefore(cloneCell, cells[cells.length - 1]);
    }
  });
});
