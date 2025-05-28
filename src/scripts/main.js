'use strict';

const table = document.querySelector('.dashboard');

if (table) {
  const rows = table.querySelectorAll('tr');

  rows.forEach((row) => {
    const cells = row.querySelectorAll('td, th');

    if (cells.length > 1) {
      const clonedCell = cells[1].cloneNode(true);

      row.insertBefore(clonedCell, cells[cells.length - 1]);
    }
  });
}
