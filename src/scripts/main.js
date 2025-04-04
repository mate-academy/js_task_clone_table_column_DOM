'use strict';

// write your code here

document.addEventListener('DOMContentLoaded', function () {
  const table = document.querySelector('table');
  const rows = table.querySelectorAll('tr');

  rows.forEach((row) => {
    const cells = row.children;
    const newCell = cells[1].cloneNode(true);

    row.insertBefore(newCell, cells[cells.length - 1]);
  });
});
