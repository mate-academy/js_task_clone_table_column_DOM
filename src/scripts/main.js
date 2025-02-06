'use strict';

// write your code here
document.addEventListener('DOMContentLoaded', function () {
  const rows = document.querySelectorAll('tr');

  rows.forEach((row) => {
    const cells = row.children;

    if (cells.length >= 5) {
      const secondCol = cells[1];
      const copy = secondCol.cloneNode(true);

      row.insertBefore(copy, cells[4]);
    }
  });
});
