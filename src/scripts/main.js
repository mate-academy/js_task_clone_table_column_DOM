'use strict';

const table = document.querySelector('table');
const rows = table.querySelectorAll('tr');

Array.from(rows).forEach((row) => {
  const cells = row.querySelectorAll('td, th');

  if (cells.length > 2) {
    const clonedCells = cells[1].cloneNode(true);

    row.insertBefore(clonedCells, cells[cells.length - 1]);
  }
});
