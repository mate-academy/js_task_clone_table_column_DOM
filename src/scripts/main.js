'use strict';

document.addEventListener('DOMContentLoaded', function () {
  const table = document.querySelector('table');

  if (!table) {
    // eslint-disable-next-line no-console
    console.error('Table not found');

    return;
  }

  const rows = table.querySelectorAll('tr');

  rows.forEach((row) => {
    const cells = row.querySelectorAll('th, td');

    if (cells.length > 1) {
      const clonedCell = cells[1].cloneNode(true);

      row.insertBefore(clonedCell, cells[1].nextSibling);
    }
  });
});
