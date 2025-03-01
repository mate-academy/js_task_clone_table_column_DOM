'use strict';

document.addEventListener('DOMContentLoaded', function () {
  const table = document.querySelector('table');

  const rows = table.querySelectorAll('tbody tr');

  rows.forEach((row) => {
    const secondColumn = row.cells[1];

    const clonedColumn = secondColumn.cloneNode(true);

    row.insertBefore(clonedColumn, row.cells[row.cells.length - 1]);
  });
});
