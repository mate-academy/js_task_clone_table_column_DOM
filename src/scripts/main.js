'use strict';

const sections = document.querySelectorAll(
  'table thead, table tbody, table tfoot',
);

sections.forEach((section) => {
  const rows = section.querySelectorAll('tr');

  rows.forEach((row) => {
    const cells = row.children;

    if (cells.length > 1) {
      const cloneCell = cells[1].cloneNode(true);

      row.insertBefore(cloneCell, cells[cells.length - 1]);
    }
  });
});
