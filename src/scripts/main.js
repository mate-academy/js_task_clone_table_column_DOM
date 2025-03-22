'use strict';

function cloneColumn() {
  const table = document.querySelector('table');
  const sections = table.querySelectorAll('thead, tbody, tfoot');

  sections.forEach((section) => {
    const rows = section.querySelectorAll('tr');

    rows.forEach((row) => {
      const cells = row.querySelectorAll('th, td');

      if (cells.length >= 2) {
        const clonedCell = cells[1].cloneNode(true);

        if (cells.length > 1) {
          row.insertBefore(clonedCell, cells[cells.length - 1]);
        } else {
          row.appendChild(clonedCell);
        }
      }
    });
  });
}

cloneColumn();
