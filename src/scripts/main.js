'use strict';

// write your code here

document.addEventListener('DOMContentLoaded', function () {
  const tableSections = document.querySelectorAll('thead, tbody, tfoot');

  tableSections.forEach((section) => {
    const rows = section.querySelectorAll('tr');

    rows.forEach((row) => {
      const cells = row.querySelectorAll('th, td');

      const clonedCell = cells[1].cloneNode(true);

      row.insertBefore(clonedCell, cells[cells.length - 1]);
    });
  });
});
