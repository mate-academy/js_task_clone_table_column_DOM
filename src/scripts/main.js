'use strict';

document.addEventListener('DOMContentLoaded', () => {
  const table = document.querySelector('table');

  const rows = table.querySelectorAll('tr');

  rows.forEach((row) => {
    const cells = row.querySelectorAll('th, td');

    if (cells.length >= 2) {
      const secondCell = cells[1].cloneNode(true);
      const lastCell = cells[cells.length - 1];

      row.insertBefore(secondCell, lastCell);
    }
  });
});
